import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const serviceCenter = useLoaderData();
  const mapRef = useRef(null);
  console.log(serviceCenter);
  const position = [23.685, 90.3563];

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenter.find((l) =>
      l.district.toLowerCase().includes(location.toLowerCase()),
    );
    if (district) {
      const coOordinate = [district.latitude, district.longitude];

      mapRef.current.flyTo(coOordinate, 13);
    }
  };
  return (
    <section className="max-w-11/12 mx-auto  mt-3 mb-14 ">
      <div className="bg-white py-20 px-28 rounded-lg">
        <h1 className="font-extrabold text-3xl text-left text-secondary my-2">
          We are available in 64 districts
        </h1>

        <form onSubmit={handleSearch}>
          <div className="relative max-w-md my-14">
            {/* Input */}
            <input
              type="text"
              name="location"
              placeholder="Search here"
              className="w-full rounded-full border border-base-300 pl-10 pr-28 py-3 outline-none focus:border-primary"
            />

            {/* Search Icon (left) */}
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl " />

            {/* Button (inside right) */}
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-secondary px-5 py-2 rounded-full font-medium"
            >
              Search
            </button>
          </div>
        </form>

        <div className="divider"></div>

        <h1 className="font-extrabold text-2xl text-left text-secondary my-2">
          We deliver almost all over Bangladesh
        </h1>
        {/* map  */}
        <div className="w-full h-[800px]">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className=" h-[800px]"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceCenter.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong> <br /> Service Area:
                  {center.covered_area.join(",")}.
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
