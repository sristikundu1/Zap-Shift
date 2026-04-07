import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const FAQ = () => {
  return (
    <section className="max-w-8/12 mx-auto  mt-18 mb-10 ">
      <div className=" flex flex-col items-center">
        <h2 className="font-extrabold text-3xl text-center text-secondary my-2">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="font-medium text-base-200/60 text-center ">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="collapse collapse-arrow bg-white border border-white mb-4 has-[input:checked]:bg-accent/20">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How does this posture corrector work?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector gently pulls your shoulders back and aligns your
          spine, helping you maintain proper posture throughout the day. Over
          time, it trains your muscles to stay in the correct position
          naturally.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white border border-white mb-4 has-[input:checked]:bg-accent/20">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Is it suitable for all ages and body types?
        </div>
        <div className="collapse-content text-sm">
          Yes, most posture correctors are adjustable and designed to fit
          different body sizes. They are generally suitable for both adults and
          teenagers, but it's always best to check size guidelines before
          purchasing.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white border border-white mb-4 has-[input:checked]:bg-accent/20">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Does it really help with back pain and posture improvement?
        </div>
        <div className="collapse-content text-sm">
          Yes, regular use can help reduce back pain by improving posture and
          reducing strain on your spine. However, results may vary depending on
          consistency and individual conditions.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white border border-white mb-4 has-[input:checked]:bg-accent/20">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Does it have smart features like vibration alerts?
        </div>
        <div className="collapse-content text-sm">
          Some advanced posture correctors include smart features like vibration
          alerts that notify you when your posture is incorrect, helping you
          stay aware and improve faster.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white border border-white mb-4 has-[input:checked]:bg-accent/20">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How will I be notified when the product is back in stock?
        </div>
        <div className="collapse-content text-sm">
          You can subscribe with your email on the product page, and you will
          receive a notification as soon as the item is back in stock.
        </div>
      </div>

      <div className="flex justify-center my-8">
        <button className="btn bg-primary text-base-200 rounded-lg font-bold border-primary">
          See More FAQ’s
        </button>
        <GoArrowUpRight className="bg-base-200 rounded-full p-2 text-4xl text-white" />
      </div>
    </section>
  );
};

export default FAQ;
