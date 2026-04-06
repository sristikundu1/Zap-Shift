import React, { use } from "react";
import serviceIcon from "../../../assets/service.png";
const servicesPromises = fetch("services.json").then((res) => res.json());

const Services = () => {
  const services = use(servicesPromises);
  return (
    <section className="max-w-11/12 mx-auto  mt-24 mb-10 ">
      <div className="bg-secondary py-24 px-28 rounded-2xl">
        <div>
          <h2 className="font-extrabold text-3xl text-center text-white mb-2">
            Our Services
          </h2>
          <p className="font-medium text-white/50 text-center mb-8">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-7 flex flex-col items-center rounded-2xl text-center hover:bg-primary"
            >
              <img
                className="p-4 rounded-full bg-gradient-to-b from-[rgba(238,237,252,1)] to-[rgba(238,237,252,0)]"
                src={serviceIcon}
                alt="service-icon"
              />
              <h2 className="text-lg font-bold text-base-content my-2">
                {service.title}
              </h2>
              <p className="font-medium text-base-200/60 ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
