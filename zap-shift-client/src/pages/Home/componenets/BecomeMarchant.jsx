import React from "react";
import mainIcon from "../../../assets/location-merchant.png";
import bannerIcon from "../../../assets/be-a-merchant-bg.png";

const BecomeMarchant = () => {
  return (
    <section className="max-w-10/12 mx-auto  mt-24 mb-10 ">
      <div className="bg-secondary py-24 px-28 rounded-2xl relative">
        <img className="absolute top-0" src={bannerIcon} alt="bannerIcon" />
        <div className="flex items-center justify-between ">
          <div>
            <h2 className="font-extrabold text-3xl  text-left text-white mb-8">
              Merchant and Customer Satisfaction is Our First Priority
            </h2>
            <p className="font-medium text-white/50 text-left mb-8">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div className="space-x-4">
              <button className="btn bg-primary text-base-200 rounded-4xl font-semibold">
                Become a Merchant
              </button>
              <button className="btn bg-transparent text-primary border-primary rounded-4xl font-semibold">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          <img src={mainIcon} alt="mainIcon" />
        </div>
      </div>
    </section>
  );
};

export default BecomeMarchant;
