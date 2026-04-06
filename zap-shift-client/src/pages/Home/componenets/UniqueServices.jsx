import React from "react";
import icon1 from "../../../assets/live-tracking.png";
import icon2 from "../../../assets/safe-delivery.png";
import icon3 from "../../../assets/customer-service.png";
const UniqueServices = () => {
  const services = [
    {
      id: 1,
      image: icon1,
      title: " Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      image: icon2,
      title: " 100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time. ",
    },
    {
      id: 3,
      image: icon3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <section className="max-w-10/12 mx-auto  mt-24 mb-10 ">
      <div className="divider divider-secondary w-full before:border-t-2 before:border-dashed after:border-t-2 after:border-dashed before:bg-transparent after:bg-transparent"></div>
      <div className="py-20 grid grid-cols-1 gap-4 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex justify-between items-center gap-3 p-8 bg-white rounded-2xl"
          >
            <img
              src={service.image}
              className="object-cover"
              alt="service-icon"
            />
            <div className="divider divider-horizontal divider-secondary w-px h-40 self-center before:border-l-2 before:border-dashed after:border-l-2 after:border-dashed before:bg-transparent after:bg-transparent"></div>
            <div className="flex flex-col justify-baseline ">
              <h2 className="text-lg font-bold text-base-content my-2">
                {service.title}
              </h2>
              <p className="font-medium text-base-200/60">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="divider divider-secondary/10 w-full before:border-t-2 before:border-dashed after:border-t-2 after:border-dashed before:bg-transparent after:bg-transparent"></div>
    </section>
  );
};

export default UniqueServices;
