import React, { useState } from "react";
import Modal from "../layout/modal";
import DatePicker from "react-datepicker";
import { useDoctorsStore } from "../../store/doctors.store";

const BookDoctor = ({ isModalOpen, setIsModalOpen, doctorDetails }) => {
  const [date, setday] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const { bookAppointment, addAppointmentToList } = useDoctorsStore();
  const handleConfirm = () => {
    bookAppointment(
      doctorDetails.id,
      date.toISOString().split("T")[0],
      selectedTime
    );
    addAppointmentToList(
      doctorDetails.name,
      date,
      formatToAMPM(new Date(selectedTime?.startTime)),
      formatToAMPM(new Date(selectedTime?.endTime)),
      doctorDetails.specialty,
      doctorDetails.location
    );
    setIsModalOpen(false);
    setday(new Date());
    setSelectedTime(null);
  };
  const formatToAMPM = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${period}`;
  };
  console.log(
    doctorDetails,"asa"
  );
  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#10AAC7] rounded-lg hover:bg-[#364153] focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Book Appointment
      </button>
      <Modal
        isOpen={isModalOpen}
        disabled={!selectedTime || !date}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {doctorDetails.name}
        </h3>
        <p className="mb-1 text-gray-700">{doctorDetails.specialty}</p>
        <p className="mb-4 text-gray-700">{doctorDetails.location}</p>
        <div className=" flex  md:flex-row flex-col justify-between mb-2">
          <DatePicker
            showIcon
            className="border border-gray-300 rounded-lg p-2 w-full md:w-1/2"
            minDate={new Date()}
            inline
            selected={date}
            onChange={(date) => setday(date)}
          />
          {doctorDetails?.availabilityTime[
            date.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase()
          ]?.length === 0 && (
            <div className=" flex  w-full">
            <p className="text-red-500 m-auto text-center font-semibold">
              No available time slots for this date.
            </p>
            </div>
          )}
          {doctorDetails?.availabilityTime[
            date.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase()
          ]?.length > 0 && (
          <ul className="space-y-2 my-2 md:h-[230px] h-[150px] md:w-1/2 overflow-y-scroll">
            {doctorDetails?.availabilityTime[
              date
                .toLocaleDateString("en-US", { weekday: "long" })
                .toLowerCase()
            ]?.map((item, index) => {
              const timeId = `appointment-${item.id || index}`;
              const AppointmentId = doctorDetails.bookedDates?.[
                date.toISOString().split("T")[0]
              ]
                ? doctorDetails.bookedDates?.[
                    date.toISOString().split("T")[0]
                  ].find((time) => time.id === item.id)
                : null;
              const isBooked = AppointmentId ? true : false;
              return (
                <li key={index}>
                  <input
                    type="radio"
                    id={timeId}
                    name="appointment"
                    value={item.id}
                    onChange={() => setSelectedTime(item)}
                    disabled={isBooked}
                    aria-checked={selectedTime?.id === item.id}
                    checked={selectedTime?.id === item.id}
                    aria-label={`${formatToAMPM(new Date(item?.startTime))} - ${formatToAMPM(new Date(item?.endTime))}`}
                    className="hidden peer"
                    readOnly
                  />
                  <label
                    htmlFor={timeId}
                    role="radio"
                    aria-checked={selectedTime?.id === item.id}
                    aria-disabled={isBooked}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        if (!isBooked) setSelectedTime(item);
                      }
                    }}
                    className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:bg-gray-200 peer-disabled:hover:bg-gray-200 peer-disabled:opacity-[.5] peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-checked:bg-blue-200 hover:bg-gray-100"
                  >
                    <div className="block">
                      {formatToAMPM(new Date(item?.startTime))} -{" "}
                      {formatToAMPM(new Date(item?.endTime))}
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default BookDoctor;
