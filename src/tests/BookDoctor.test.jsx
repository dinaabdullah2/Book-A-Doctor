import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import React from 'react';
import BookDoctor from '../components/doctors/BookDoctor';
import { useDoctorsStore } from '../store/doctors.store';


vi.mock('../store/doctors.store', () => ({
  useDoctorsStore: vi.fn(),
}));

const mockDoctor = {
  id: 1,
  name: 'Dr. Jane Smith',
  specialty: 'Dermatologist',
  location: 'New York',
  availabilityTime: {
    [`${new Date().toLocaleDateString("en-US", { weekday: "long" }).toLowerCase()}`]: [
      { id: 1, startTime: '2023-01-01T09:00:00Z', endTime: '2023-01-01T10:00:00Z' },
    ],
  },
  bookedDates: {},
};

describe('BookDoctor Component', () => {
  const bookAppointment = vi.fn();
  const addAppointmentToList = vi.fn();

  beforeEach(() => {
    useDoctorsStore.mockReturnValue({
      bookAppointment,
      addAppointmentToList,
    });
  });

  it('renders the book button', () => {
    render(
      <BookDoctor
        doctorDetails={mockDoctor}
        isModalOpen={false}
        setIsModalOpen={() => {}}
      />
    );

    expect(screen.getByText(/Book Appointment/i)).toBeInTheDocument();
  });

  it('opens modal on button click', () => {
    const setIsModalOpen = vi.fn();

    render(
      <BookDoctor
        doctorDetails={mockDoctor}
        isModalOpen={false}
        setIsModalOpen={setIsModalOpen}
      />
    );

    fireEvent.click(screen.getByText(/Book Appointment/i));
    expect(setIsModalOpen).toHaveBeenCalledWith(true);
  });

  it('shows doctor details in modal', () => {
    render(
      <BookDoctor
        doctorDetails={mockDoctor}
        isModalOpen={true}
        setIsModalOpen={() => {}}
      />
    );

    expect(screen.getByText('Dr. Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Dermatologist')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
  });

  it('disables confirm button if no time is selected', () => {
    render(
      <BookDoctor
        doctorDetails={mockDoctor}
        isModalOpen={true}
        setIsModalOpen={() => {}}
      />
    );

    expect(screen.getByText(/Confirm/i)).toBeDisabled();
  });

  it('calls confirm handler when time is selected and confirm clicked', () => {
    const setIsModalOpen = vi.fn();

    render(
      <BookDoctor
        doctorDetails={mockDoctor}
        isModalOpen={true}
        setIsModalOpen={setIsModalOpen}
      />
    );

    fireEvent.click(screen.getByText(/11:00 AM\s*-\s*12:00 PM/i));
    fireEvent.click(screen.getByText(/Confirm/i));

    expect(bookAppointment).toHaveBeenCalled();
    expect(addAppointmentToList).toHaveBeenCalled();
    expect(setIsModalOpen).toHaveBeenCalledWith(false);
  });
});
