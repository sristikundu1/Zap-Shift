import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map((r) => r.region);
  // get all unique region
  const region = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "ReceiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);

    return districts;
  };

  const handleParcelInfoSubmit = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const sameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.weight);
    // console.log(sameDistrict);

    let cost = 0;
    if (isDocument) {
      cost = sameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = sameDistrict ? 110 : 150;
      } else {
        let minimumCharge = sameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = sameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minimumCharge + extraCharge;
      }
    }
    Swal.fire({
      title: "Confirm Booking",
      text: `You need to pay ৳${cost} for this delivery. Do you want to proceed?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm",
    }).then((result) => {
      if (result.isConfirmed)
        // Swal.fire({
        //   title: "Booking Confirmed!!",
        //   text: "Your parcel has been successfully booked.",
        //   icon: "success",
        // });
    });
  };
  return (
    <div className="max-w-11/12 mx-auto  my-3 ">
      <div className="bg-white  py-20 px-20 rounded-2xl">
        <div>
          <h2 className="font-extrabold text-5xl text-left text-secondary my-2">
            Send A Parcel
          </h2>
          <p className="font-medium text-base-200/60 text-left ">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal <br /> packages to business shipments —
            we deliver on time, every time.
          </p>
        </div>

        <div className="divider"></div>

        {/* form for rider  */}

        <div className="">
          <h2 className="font-extrabold text-2xl text-left text-secondary my-2">
            Enter your parcel details
          </h2>

          <form
            onSubmit={handleSubmit(handleParcelInfoSubmit)}
            className="max-w-6xl mx-auto p-8 bg-white min-h-screen"
          >
            {/* Radio Selection */}
            <div className="flex items-center gap-10 mb-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  value="document"
                  {...register("parcelType")}
                  className="radio radio-success border-2"
                  defaultChecked
                />
                <span className="font-bold text-secondary">Document</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer opacity-40">
                <input
                  type="radio"
                  value="non-document"
                  {...register("parcelType")}
                  className="radio radio-success border-2"
                />
                <span className="font-bold text-secondary">Not-Document</span>
              </label>
            </div>

            {/* Top Row: Parcel Name & Weight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-secondary">
                    Parcel Name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Parcel Name"
                  className="input input-bordered w-full bg-transparent "
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-bold text-secondary">
                    Parcel Weight (KG)
                  </span>
                </label>
                <input
                  type="text"
                  {...register("weight", { required: true })}
                  placeholder="Parcel Weight (KG)"
                  className="input input-bordered w-full bg-transparent "
                />
              </div>
            </div>

            <div className="border-t border-base-100 mb-10"></div>

            {/* Sender & Receiver Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Left Column: Sender Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-secondary mb-4">
                  Sender Details
                </h3>
                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Sender Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("senderName")}
                    placeholder="Sender Name"
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Address
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("address")}
                    placeholder="Address"
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Sender Phone No
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("phone")}
                    placeholder="Sender Phone No"
                    className="input input-bordered w-full "
                  />
                </div>

                {/* Region */}
                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Your Region
                    </span>
                  </label>

                  <select
                    className="select w-full"
                    {...register("senderRegion", { required: true })}
                  >
                    <option value="">Select Region</option>
                    {region.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.region && (
                    <span className="text-red-800">This field is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Your District
                    </span>
                  </label>
                  <select
                    {...register("senderDistrict")}
                    className="select select-bordered w-full font-normal"
                  >
                    <option value="">Select Your District</option>
                    {districtsByRegion(senderRegion).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Pickup Instruction
                    </span>
                  </label>
                  <textarea
                    {...register("pickup")}
                    placeholder="Pickup Instruction"
                    className="textarea textarea-bordered h-32 w-full "
                  ></textarea>
                </div>
              </div>

              {/* Right Column: Receiver Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-secondary mb-4">
                  Receiver Details
                </h3>
                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Receiver Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("receiverName")}
                    placeholder="Sender Name"
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Receiver Address
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("receiverAddress")}
                    placeholder="Address"
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Receiver Contact No
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("receiverContact")}
                    placeholder="Sender Contact No"
                    className="input input-bordered w-full "
                  />
                </div>

                {/* Region */}
                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Your Region
                    </span>
                  </label>

                  <select
                    className="select w-full"
                    {...register("ReceiverRegion", { required: true })}
                  >
                    <option value="">Select Region</option>
                    {region.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.ReceiverRegion && (
                    <span className="text-red-800">This field is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Receiver District
                    </span>
                  </label>
                  <select
                    {...register("receiverDistrict")}
                    className="select select-bordered w-full  font-normal"
                  >
                    <option value="">Select Your District</option>
                    {districtsByRegion(receiverRegion).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-control">
                  <label className="label py-0">
                    <span className="label-text font-bold text-secondary">
                      Delivery Instruction
                    </span>
                  </label>
                  <textarea
                    {...register("delivery")}
                    placeholder="Delivery Instruction"
                    className="textarea textarea-bordered h-32 w-full "
                  ></textarea>
                </div>
              </div>
            </div>

            <p className="text-sm font-medium text-slate-900 mt-10 mb-6">
              * PickUp Time 4pm-7pm Approx.
            </p>

            {/* Lime Green Button */}
            <button className="btn bg-primary text-secondary border-none rounded-lg font-bold px-10 h-14 normal-case">
              Proceed to Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendParcel;
