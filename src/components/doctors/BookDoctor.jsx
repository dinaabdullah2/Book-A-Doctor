import React, { useState } from "react";
import Modal from "../layout/modal";
import DatePicker from "react-datepicker";

const BookDoctor = ({ isModalOpen, setIsModalOpen, doctorDetails }) => {
  const [startDate, setStartDate] = useState(new Date());
  console.log("Doctor Details", startDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase());
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
        onClose={() => setIsModalOpen(false)}
        title="Terms of Service"
      // onConfirm={handleConfirm}
      // onDecline={handleDecline}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{doctorDetails.name}</h3>
        <p className="mb-4 text-gray-700">{doctorDetails.specialty}</p>
        <p className="mb-4 text-gray-700">{doctorDetails.location}</p>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

        <ul className="space-y-4 my-4 ">
          {doctorDetails?.availabilityTime[startDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()].map((item) => (
            <li>
              <input type="radio" id="job-1" name="job" value="job-1" className="hidden peer"  />
              <label for="job-1" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-blue-200 hover:bg-gray-100 ">
                <div className="block">
                  {item.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {item.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                
              </label>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default BookDoctor;
