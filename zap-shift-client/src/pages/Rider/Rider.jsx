import React from "react";
import { useForm } from "react-hook-form";
import riderImage from "../../assets/agent-pending.png";
const Rider = () => {
  const districts = [
    "Dhaka",
    "Chattogram",
    "Khulna",
    "Rajshahi",
    "Barishal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
  ];

  const regions = {
    Dhaka: ["Dhanmondi", "Mirpur", "Uttara"],
    Chattogram: ["Pahartali", "Agrabad"],
    Khulna: ["Sonadanga", "Khalishpur"],
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRiderInfoSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-11/12 mx-auto  my-3 ">
      <div className="bg-white  py-20 px-20 rounded-2xl">
        <div>
          <h2 className="font-extrabold text-5xl text-left text-secondary my-2">
            Be a Rider
          </h2>
          <p className="font-medium text-base-200/60 text-left ">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal <br /> packages to business shipments —
            we deliver on time, every time.
          </p>
        </div>

        <div className="divider"></div>

        {/* form for rider  */}

        <div className="flex items-start justify-between gap-20">
          <div className="flex-1 w-full">
            <h2 className="font-extrabold text-2xl text-left text-secondary my-2">
              Tell us about yourself
            </h2>

            <form
              onSubmit={handleSubmit(handleRiderInfoSubmit)}
              className="fieldset w-full"
            >
              {/* name  */}
              <legend className="fieldset-legend">Your Name</legend>
              <input
                type="text"
                className="input w-full"
                {...register("name", { required: true })}
                placeholder="Your Name"
              />
              {errors.name?.type === "required" && (
                <span className="text-red-800">This field is required</span>
              )}
              {/* Driving License Number  */}
              <legend className="fieldset-legend">
                Driving License Number
              </legend>
              <input
                type="text"
                className="input w-full"
                {...register("dln", { required: true })}
                placeholder="Driving License Number"
              />
              {errors.dln?.type === "required" && (
                <span className="text-red-800">This field is required</span>
              )}

              {/* email  */}
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                className="input w-full"
                {...register("email", { required: true })}
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-800">This field is required</span>
              )}

              {/* Region */}
              <legend className="fieldset-legend">Your Region</legend>
              <select
                className="select w-full"
                {...register("region", { required: true })}
              >
                <option value="">Select Region</option>
                {regions["Dhaka"]?.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {errors.region && (
                <span className="text-red-800">This field is required</span>
              )}

              {/* District */}
              <legend className="fieldset-legend">Your District</legend>
              <select
                className="select w-full"
                {...register("district", { required: true })}
              >
                <option value="">Select District</option>
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.district && (
                <span className="text-red-800">This field is required</span>
              )}

              {/* NID  */}
              <legend className="fieldset-legend">NID No</legend>
              <input
                type="text"
                className="input w-full"
                {...register("nid", {
                  required: true,
                  minLength: 10,
                })}
                placeholder="NID"
              />

              {errors.nid?.type === "required" && (
                <span className="text-red-800">This field is required</span>
              )}

              {errors.nid?.type === "minLength" && (
                <span className="text-red-800">
                  NID must be at least 10 digits
                </span>
              )}

              {/* Phone  */}
              <legend className="fieldset-legend">Phone Number</legend>
              <input
                type="text"
                className="input w-full"
                {...register("phone", {
                  required: true,
                })}
                placeholder="Phone Number"
              />
              {errors.phone?.type === "required" && (
                <span className="text-red-800">This field is required</span>
              )}

              {/* Bike brand  */}
              <legend className="fieldset-legend">
                Bike Brand Model And Year
              </legend>
              <input
                type="text"
                className="input w-full"
                {...register("bikeInfo", { required: true })}
                placeholder="Bike Brand Model And Year"
              />
              {errors.bikeInfo && (
                <span className="text-red-800">This field is required</span>
              )}

              {/* Bike registration NUmber  */}
              <legend className="fieldset-legend">
                Bike Registration Number
              </legend>
              <input
                type="text"
                className="input w-full"
                {...register("bikeReg", { required: true })}
                placeholder="Bike Registration Number"
              />
              {errors.bikeReg && (
                <span className="text-red-800">This field is required</span>
              )}

              {/* About Yourself  */}
              <legend className="fieldset-legend">
                Tell Us About Yourself
              </legend>
              <textarea
                className="textarea w-full"
                {...register("aboutSelf")}
                placeholder="Tell Us About Yourself"
              />

              <button className="btn bg-primary text-base-200 rounded-lg font-semibold my-2 border-0">
                Submit
              </button>
            </form>
          </div>
          <div className="flex-1 w-full">
            <img src={riderImage} alt="riderImage" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;
