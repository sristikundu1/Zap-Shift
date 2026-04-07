import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-11/12 mx-auto  my-3 ">
      <div className="bg-white  py-20 px-20 rounded-2xl">
        <div>
          <h2 className="font-extrabold text-5xl text-left text-secondary my-2">
            About Us
          </h2>
          <p className="font-medium text-base-200/60 text-left ">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal <br /> packages to business shipments —
            we deliver on time, every time.
          </p>
        </div>

        <div className="divider"></div>

        {/* tabs  */}

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          {/* Story */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-xl font-extrabold"
            aria-label="Story"
          />
          <div className="tab-content  p-6">
            <p>
              Zap-Shift began with a simple idea — to transform the way people
              experience delivery services. In a world where time matters, we
              noticed delays, lack of transparency, and poor customer support in
              traditional logistics. That’s when we stepped in to build
              something better.
              <br />
              <br />
              From a small startup to a growing delivery network, Zap-Shift has
              focused on speed, reliability, and innovation. Today, we proudly
              serve customers across the country, ensuring every parcel reaches
              its destination safely and on time. Whether it's a personal
              package or a business shipment, our journey has always been driven
              by trust and customer satisfaction.
            </p>
          </div>

          {/* Mission */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-xl font-extrabold"
            aria-label="Mission"
            defaultChecked
          />
          <div className="tab-content  p-6">
            <p>
              At Zap-Shift, our mission is to make delivery services fast,
              reliable, and stress-free for everyone. We aim to simplify
              logistics by combining smart technology with efficient operations.
              <br />
              <br />
              We are committed to providing real-time tracking, secure handling,
              and timely deliveries. Our goal is to empower individuals and
              businesses with a service they can depend on — every single time.
              By continuously improving and listening to our users, we strive to
              set new standards in the delivery industry.
            </p>
          </div>

          {/* Success */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-xl font-extrabold"
            aria-label="Success"
          />
          <div className="tab-content  p-6">
            <p>
              Our success is built on trust, performance, and consistency. Over
              time, Zap-Shift has successfully delivered thousands of parcels
              across multiple regions, earning the confidence of both
              individuals and businesses.
              <br />
              <br />
              We have expanded our network to cover major districts, introduced
              real-time tracking systems, and improved delivery speed through
              optimized routes and smart logistics. Our growing customer base
              and positive feedback reflect our dedication to excellence and
              continuous improvement.
            </p>
          </div>

          {/* Team & Others */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-xl font-extrabold"
            aria-label="Team & Others"
          />
          <div className="tab-content  p-6">
            <p>
              Behind Zap-Shift is a passionate team dedicated to delivering the
              best experience possible. From logistics coordinators to delivery
              agents and customer support — every member plays a vital role in
              ensuring smooth operations.
              <br />
              <br />
              We believe in teamwork, innovation, and customer-first thinking.
              Our team continuously works to improve service quality, adopt new
              technologies, and solve real-world delivery challenges. Together,
              we are building a smarter and more efficient delivery ecosystem
              for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
