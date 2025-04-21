import { useEffect, useState } from "react";
import Select from "react-select";
import { useDoctorsStore } from "../../store/doctors.store";
import { format, setHours, setMinutes } from "date-fns";
import DatePicker from "react-datepicker";
import { specialtiesOptions } from "../../mockData/specialtiesOptions";
import DoctorCard from "./DoctorCard";

const DoctorsList = () => {
  const doctors = useDoctorsStore((state) => state.doctors);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  function getFilteredAvailableDoctors(doctors, selectedOption, selectedDate) {
    const dayOfWeek = selectedDate
      ? format(selectedDate, "EEEE").toLowerCase()
      : null;
    const selectedTime = selectedDate?.getTime();

    return doctors.filter((doctor) => {
      const matchesSpecialty = selectedOption
        ? doctor.specialty.toLowerCase() === selectedOption.value.toLowerCase()
        : true;

      const matchesAvailability = selectedDate
        ? doctor.availabilityTime?.[dayOfWeek]?.some(
            (slot) => new Date(slot.startTime).getTime() === selectedTime
          )
        : true;

      return matchesSpecialty && matchesAvailability;
    });
  }

  const handleFilter = (date) => {
    setStartDate(date);
    const availableDoctors = getFilteredAvailableDoctors(
      doctors,
      selectedOption,
      date
    );
    setFilteredDoctors(availableDoctors);
  };

  const handleSpecialtyChange = (option) => {
    setSelectedOption(option);
    const availableDoctors = getFilteredAvailableDoctors(
      doctors,
      option,
      startDate
    );
    setFilteredDoctors(availableDoctors);
  };

  useEffect(() => {
    setFilteredDoctors(doctors);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-7 md:px-0 px-3">
      <div className=" flex md:flex-row flex-col gap-5  items-center justify-between mb-4">
        <h2 className="px-7 text-xl font-bold text-gray-800">Doctors List</h2>
        <div className="flex md:flex-row flex-wrap justify-end flex-col items-center gap-4 w-full md:w-1/2">
          <Select
            value={selectedOption}
            onChange={handleSpecialtyChange}
            options={specialtiesOptions}
            className=" w-full md:w-1/3"
            placeholder="Choose specialty"
          />

          <DatePicker
            className=" w-full "
            selected={startDate}
            onChange={handleFilter}
            showTimeSelect
            placeholderText="Select date and time"
            minDate={new Date()}
            excludeTimes={[
              setHours(setMinutes(new Date(), 0), 17),
              setHours(setMinutes(new Date(), 30), 18),
              setHours(setMinutes(new Date(), 30), 19),
              setHours(setMinutes(new Date(), 30), 17),
            ]}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          {(startDate || selectedOption) && filteredDoctors.length > 0 && (
            <div>
              <button
                className=" w-full md:w-1/3 "
                onClick={() => {
                  setFilteredDoctors(doctors);
                  setStartDate(null);
                  setSelectedOption(null);
                }}
              >
                reset
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredDoctors.map((item) => (
          <DoctorCard item={item} key={item.id} />
        ))}
        {filteredDoctors.length === 0 && (
          <div className="flex flex-col py-10 items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-800">No Doctors</h2>
            <p className="text-gray-500">
              {startDate
                ? "there is no doctor in this time."
                : "there is no doctor in this specialty."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;
