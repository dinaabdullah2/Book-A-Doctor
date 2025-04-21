import React from "react";
import { useDoctorsStore } from "../store/doctors.store";
import Navbar from "../components/Navbar";

const AppoimtmentList = () => {
  const appointmentList = useDoctorsStore((state) => state.appointmentList);

  const formatDate = (date) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(d);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-7 text-gray-900 divide-y divide-gray-200 dark:text-white">
        <h2 className="text-xl font-bold text-gray-800 py-5">
          My Appointments
        </h2>

        {appointmentList.length === 0 && (
          <div className="flex flex-col py-10 items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-800">
              No Appointments
            </h2>
            <p className="text-gray-500">You have no appointments scheduled.</p>
          </div>
        )}

        {appointmentList.map((item) => (
          <div key={item.id} className="flex flex-col py-3">
            <dt className="mb-1 font-bold text-gray-900 md:text-lg">
              {item.name}
            </dt>
            <dd className="text-lg font-semibold text-gray-500">
              {formatDate(item.date)}
            </dd>
            <dd className="text-lg font-semibold  text-gray-500">
              {item.timeFrom} - {item.timeTo}
            </dd>
            <p className="text-lg font-semibold text-gray-500">
              {item.specialty}
            </p>
            <p className="text-lg font-semibold text-gray-500">
              {item.location}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppoimtmentList;
