import { create } from "zustand";
import { persist } from "zustand/middleware";
import doctors from "../mockData/doctorsList";

export const useDoctorsStore = create(
  persist(
    (set) => ({
      doctors: doctors,
      appointmentList: [],
      addAppointmentToList: (
        doctorName,
        date,
        timeFrom,
        timeTo,
        specialty,
        location
      ) =>
        set((state) => {
          return {
            appointmentList: [
              ...state.appointmentList,
              {
                id: state.appointmentList.length + 1,
                name: doctorName,
                date,
                timeFrom,
                timeTo,
                specialty,
                location,
              },
            ],
          };
        }),
      bookAppointment: (doctorId, date, time) =>
        set((state) => {
          return {
            doctors: state.doctors.map((doc) => {
              if (doc.id !== doctorId) return doc;

              const prevBookedDates = doc.bookedDates || {};
              const existingAppointments = prevBookedDates[date] || [];

              const isAlreadyBooked = existingAppointments.some(
                (appt) => appt.id === time.id
              );

              if (isAlreadyBooked) {
                return doc;
              }

              return {
                ...doc,
                bookedDates: {
                  ...prevBookedDates,
                  [date]: [...existingAppointments, time],
                },
              };
            }),
          };
        }),
    }),
    {
      name: "doctor-store",
    }
  )
);
