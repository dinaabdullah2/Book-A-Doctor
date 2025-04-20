
import doctors from "../../mockData/DoctorsList";
const DoctorsList = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-7">
              <h2 className="px-7 text-xl font-bold text-gray-800">Doctors List</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  
        {doctors.map((item) => (
          <div key={item} className=" col-span-1   rounded-lg p-4">
            <div className=" bg-white border border-gray-200 rounded-lg shadow-sm  ">
              <a href="#">
                <img className="rounded-t-lg md:h-[300px]" src={item.photo} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                   {item.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.specialty}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.location}
                </p>
                <div className=" flex items-center justify-between">
                  <span className="text-sm font-medium text-[#364153] ">
                    {item.availability}
                  </span>
               

                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#10AAC7] rounded-lg hover:bg-[#364153] focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                 Book Appointment
                  
                </a>
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
