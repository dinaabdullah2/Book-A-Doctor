import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it} from 'vitest';

import DoctorCard from '../components/Doctors/DoctorCard';
import BookDoctor from '../components/doctors/BookDoctor';

const mockDoctor = {
  id: 101,
  name: 'Dr. Ayesha Khan',
  specialty: 'Cardiologist',
  location: 'San Francisco',
  availability: 'Mon - Fri, 9am to 5pm',
  photo: 'https://via.placeholder.com/150',
  availabilityTime: {
    monday: [
      {
        id: 1,
        startTime: '2023-01-01T09:00:00Z',
        endTime: '2023-01-01T10:00:00Z',
      },
    ],
  },
  bookedDates: {},
};

describe('DoctorCard Component', () => {

  it('renders doctor info correctly', () => {
    render(<DoctorCard item={mockDoctor} />);
    expect(screen.getByText(/ayesha khan/i)).toBeInTheDocument();
    expect(screen.getByText('Dr. Ayesha Khan')).toBeInTheDocument();
    expect(screen.getByText('Cardiologist')).toBeInTheDocument();
    expect(screen.getByText('San Francisco')).toBeInTheDocument();
    expect(screen.getByText(/Mon - Fri/)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockDoctor.photo);
  });

  it('opens modal when Book Appointment is clicked', () => {
    render(<DoctorCard item={mockDoctor} />);

    const bookButton = screen.getByText(/Book Appointment/i);
    fireEvent.click(bookButton);

    expect(screen.getByText(/Confirm/i)).toBeInTheDocument();
  });
  
  it('shows doctor details in modal', () => {
    render(
      <BookDoctor
        doctorDetails={mockDoctor}
        isModalOpen={true}
        setIsModalOpen={() => {}}
      />
    );

    expect(screen.getByText('Dr. Ayesha Khan')).toBeInTheDocument();
    expect(screen.getByText('Cardiologist')).toBeInTheDocument();
    expect(screen.getByText('San Francisco')).toBeInTheDocument();

  });

  it('closes modal when Decline is clicked', () => {
    render(<DoctorCard item={mockDoctor} />);

    fireEvent.click(screen.getByText(/Book Appointment/i));
    const declineButton = screen.getByText(/Decline/i);

    fireEvent.click(declineButton);


    expect(screen.queryByText(/Confirm/i)).not.toBeInTheDocument();
  });
});
