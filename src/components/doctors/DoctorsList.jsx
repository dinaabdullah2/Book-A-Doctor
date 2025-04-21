import { useState } from "react";
import Select from "react-select";
import BookDoctor from "./BookDoctor";
import { useDoctorsStore } from "../../store/doctors.store";
const DoctorsList = () => {
  const doctors = useDoctorsStore((state) => state.doctors);
  console.log("doctors", doctors);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const options = [
    { value: "cardiologist", label: "Cardiologist" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "neurologist", label: "Neurologist" },
    { value: "pediatrician", label: "Pediatrician" },
    { value: "endocrinologist", label: "Endocrinologist" },
  ];
  const filteredDoctors = selectedOption
    ? doctors.filter(
        (doctor) =>
          doctor.specialty.toLowerCase() === selectedOption.value.toLowerCase()
      )
    : doctors;
  return (
    <div className="max-w-screen-xl mx-auto py-7">
      <div className=" flex items-center justify-between mb-4">
        <h2 className="px-7 text-xl font-bold text-gray-800">Doctors List</h2>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder="Choose specialty"
        />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredDoctors.map((item) => (
          <div key={item.id} className=" col-span-1   rounded-lg p-4">
            <div className=" bg-white border border-gray-200 rounded-lg shadow-sm  ">
              <a href="#">
                <img
                  className="rounded-tLg md:h-[300px]"
                  src={item.photo}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {item.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.specialty}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.location}
                </p>
                <div className=" flex items-center  flex-wrap gap-3 justify-between">
                  <span className="text-sm font-medium text-[#364153] ">
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
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
