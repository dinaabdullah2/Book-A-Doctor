import React, { useState } from "react";
import BookDoctor from "./BookDoctor";

const DoctorCard = ({ item }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  return (
    <div key={item.id} className="col-span-1 rounded-lg p-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <img
          className="rounded-tLg md:h-[300px]"
          src={item.photo}
          alt={item.name}
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {item.name}
          </h5>

          <p className="mb-3 font-normal text-gray-700">{item.specialty}</p>
          <p className="mb-3 font-normal text-gray-700">{item.location}</p>
          <div className="flex items-center flex-wrap gap-3 justify-between">
            <span className="text-sm font-medium text-[#364153]">
              {item.availability}
            </span>
            <BookDoctor
              doctorDetails={item}
              isModalOpen={selectedDoctor?.id === item.id}
              setIsModalOpen={(state) => {
                setSelectedDoctor(state ? item : null);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
