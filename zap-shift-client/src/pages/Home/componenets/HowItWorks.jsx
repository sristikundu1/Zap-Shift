import React from "react";
import { GiFactory, GiTakeMyMoney } from "react-icons/gi";
import { MdBusiness, MdDirectionsCar } from "react-icons/md";

const HowItWorks = () => {
  const workResources = [
    {
      id: 1,
      book: <MdDirectionsCar></MdDirectionsCar>,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      book: <GiTakeMyMoney />,
      title: "Cash On Delivery",
      description:
        "Pay only when your package is delivered — safe, simple, and convenient for every shipment.",
    },
    {
      id: 3,
      book: <GiFactory />,
      title: "Delivery Hub",
      description:
        "Centralized hubs ensure fast processing and smooth handling of all deliveries across the network.",
    },
    {
      id: 4,
      book: <MdBusiness />,
      title: "Booking SME & Corporate",
      description:
        "Tailored logistics solutions for small businesses and corporate clients to meet all delivery needs.",
    },
  ];
  return (
    <section className="max-w-10/12 mx-auto  mt-24 mb-10 ">
      <h2 className="font-extrabold text-3xl text-left text-base-content mb-8">
        How it Works
      </h2>

      <div className="grid grid-cols-4 gap-10">
        {workResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white p-7 flex flex-col justify-baseline rounded-2xl"
          >
            <div className="text-4xl text-secondary">{resource.book}</div>
            <h2 className="text-lg font-bold text-base-content my-2">
              {resource.title}
            </h2>
            <p className="font-medium text-base-200/60">
              {resource.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
