import { useEffect, useState } from "react";
import Select from "react-select";
import { useDoctorsStore } from "../../store/doctors.store";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { specialtiesOptions } from "../../mockData/specialtiesOptions";
import DoctorCard from "./DoctorCard";

const DoctorsList = () => {
  const doctors = useDoctorsStore((state) => state.doctors);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  function getFilteredAvailableDoctors(doctors, selectedOption, selectedDate) {
    const dayOfWeek = selectedDate
      ? format(selectedDate, "EEEE").toLowerCase()
      : null;
  
    return doctors.filter((doctor) => {
      const matchesSpecialty = selectedOption
        ? doctor.specialty.toLowerCase() === selectedOption.value.toLowerCase()
        : true;
  
      const matchesDay =
        dayOfWeek && doctor.availabilityTime?.[dayOfWeek]?.length > 0;
  
      return matchesSpecialty && (!dayOfWeek || matchesDay);
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
    setFilteredDoctors(doctors || []);
  }, [doctors]);

  return (
    <div className="max-w-screen-xl mx-auto py-7 ">
      <div className=" flex md:flex-row flex-col gap-5  items-center justify-between mb-4 px-3">
        <h2 className=" text-xl font-bold text-gray-800 ">Doctors List</h2>
        <div className="flex md:flex-row flex-wrap justify-end flex-col items-center gap-4 w-full md:w-1/2">
          <Select
            inputId="specialty-select"
            aria-label="Specialty selection"
            aria-labelledby="specialty-select"
            name="specialty-select"
            value={selectedOption}
            onChange={handleSpecialtyChange}
            options={specialtiesOptions}
            className="w-full md:w-1/3"           
            placeholder="Choose specialty"
          />

          <DatePicker
            className=" w-full "
            selected={startDate}
            onChange={handleFilter}
            placeholderText="Select date and time"
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
          />
          {(startDate || selectedOption) && filteredDoctors.length > 0 && (
            <div>
              <button
                type="button"
                className="w-full  bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                onClick={() => {
                  setFilteredDoctors(doctors);
                  setStartDate(null);
                  setSelectedOption(null);
                }}
                aria-label="Reset filters and show all doctors"
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-3 p-4">
        {filteredDoctors && filteredDoctors.map((item) => (
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
