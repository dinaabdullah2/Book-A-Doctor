 const doctors = [
    {
        id: 1,
        name: "Dr Jin Paul",
        photo: "/assets/images/doctor-1.jpg",
        specialty: "Cardiologist",
        availability: "Mon - Fri, 9am - 3pm",
        location: "70 Broad St, New York, NY 10004, USA",
        availabilityTime: {
          monday: [
            {
              id: '1',
              time: 30,
              startTime: new Date('2025-04-21T09:00:00'),
              endTime: new Date('2025-04-21T09:30:00'),
            },
            {
              id: '2',
              time: 30,
              startTime: new Date('2025-04-21T10:00:00'),
              endTime: new Date('2025-04-21T10:30:00'),
            },
            {
              id: '3',
              time: 30,
              startTime: new Date('2025-04-21T11:00:00'),
              endTime: new Date('2025-04-21T11:30:00'),
            },
          ],
          tuesday: [
            {
              id: '3',
              time: 30,
              startTime: new Date('2025-04-22T13:00:00'),
              endTime: new Date('2025-04-22T13:30:00'),
            },
          ],
          wednesday: [
            {
              id: '4',
              time: 30,
              startTime: new Date('2025-04-23T11:00:00'),
              endTime: new Date('2025-04-23T11:30:00'),
            },
          ],
          thursday: [
            {
              id: '5',
              time: 30,
              startTime: new Date('2025-04-24T15:00:00'),
              endTime: new Date('2025-04-24T15:30:00'),
            },
          ],
          friday: [
            {
              id: '6',
              time: 30,
              startTime: new Date('2025-04-25T14:00:00'),
              endTime: new Date('2025-04-25T14:30:00'),
            },
          ],
          saturday: [
            {
              id: '7',
              time: 30,
              startTime: new Date('2025-04-26T10:00:00'),
              endTime: new Date('2025-04-26T10:30:00'),
            },
          ],
          sunday: [
            {
              id: '8',
              time: 30,
              startTime: new Date('2025-04-27T12:00:00'),
              endTime: new Date('2025-04-27T12:30:00'),
            },
          ],
        },
        bookedDates: {
          '2025:21:04': [ // Mon
            {
              id: '1',
              time: 30,
              startTime: new Date('2025-04-21T09:00:00'),
              endTime: new Date('2025-04-21T09:30:00'),
            },
          ],
          '2025:23:04': [ // Wed
            {
              id: '4',
              time: 30,
              startTime: new Date('2025-04-23T11:00:00'),
              endTime: new Date('2025-04-23T11:30:00'),
            },
          ],
          '2025:26:04': [ // Sat
            {
              id: '7',
              time: 30,
              startTime: new Date('2025-04-26T10:00:00'),
              endTime: new Date('2025-04-26T10:30:00'),
            },
          ]
        }
      },
      {
        id: 2,
        name: "Dr. Omar Hussein",
        photo: "/assets/images/doctor-2.jpg",
        specialty: "Dermatologist",
        availability: "Tue - Sat, 10am - 6pm",
        location: "21 St James Pl, New York, NY 10038, USA",
        availabilityTime: {
          monday: [
            {
              id: '1',
              time: 30,
              startTime: new Date('2025-04-21T09:00:00'),
              endTime: new Date('2025-04-21T09:30:00'),
            },
            {
              id: '2',
              time: 30,
              startTime: new Date('2025-04-21T10:00:00'),
              endTime: new Date('2025-04-21T10:30:00'),
            },
          ],
          tuesday: [
            {
              id: '3',
              time: 30,
              startTime: new Date('2025-04-22T13:00:00'),
              endTime: new Date('2025-04-22T13:30:00'),
            },
          ],
          wednesday: [
            {
              id: '4',
              time: 30,
              startTime: new Date('2025-04-23T11:00:00'),
              endTime: new Date('2025-04-23T11:30:00'),
            },
          ],
          thursday: [
            {
              id: '5',
              time: 30,
              startTime: new Date('2025-04-24T15:00:00'),
              endTime: new Date('2025-04-24T15:30:00'),
            },
          ],
          friday: [
            {
              id: '6',
              time: 30,
              startTime: new Date('2025-04-25T14:00:00'),
              endTime: new Date('2025-04-25T14:30:00'),
            },
          ],
          saturday: [
            {
              id: '7',
              time: 30,
              startTime: new Date('2025-04-26T10:00:00'),
              endTime: new Date('2025-04-26T10:30:00'),
            },
          ],
          sunday: [
            {
              id: '8',
              time: 30,
              startTime: new Date('2025-04-27T12:00:00'),
              endTime: new Date('2025-04-27T12:30:00'),
            },
          ],
        },
      },
      {
        id: 3,
        name: "Dr Mark Tescrothic",
        photo: "/assets/images/doctor-3.jpg",
        specialty: "Neurologist",
        availability: "Mon - Thurs, 8am - 2pm",
        location: "35-51 81st St, Jackson Heights, NY 11372, USA",
        availabilityTime: {
          monday: [
            {
              id: '1',
              time: 30,
              startTime: new Date('2025-04-21T09:00:00'),
              endTime: new Date('2025-04-21T09:30:00'),
            },
            {
              id: '2',
              time: 30,
              startTime: new Date('2025-04-21T10:00:00'),
              endTime: new Date('2025-04-21T10:30:00'),
            },
          ],
          tuesday: [
            {
              id: '3',
              time: 30,
              startTime: new Date('2025-04-22T13:00:00'),
              endTime: new Date('2025-04-22T13:30:00'),
            },
          ],
          wednesday: [
            {
              id: '4',
              time: 30,
              startTime: new Date('2025-04-23T11:00:00'),
              endTime: new Date('2025-04-23T11:30:00'),
            },
          ],
          thursday: [
            {
              id: '5',
              time: 30,
              startTime: new Date('2025-04-24T15:00:00'),
              endTime: new Date('2025-04-24T15:30:00'),
            },
          ],
          friday: [
            {
              id: '6',
              time: 30,
              startTime: new Date('2025-04-25T14:00:00'),
              endTime: new Date('2025-04-25T14:30:00'),
            },
          ],
          saturday: [
            {
              id: '7',
              time: 30,
              startTime: new Date('2025-04-26T10:00:00'),
              endTime: new Date('2025-04-26T10:30:00'),
            },
          ],
          sunday: [
            {
              id: '8',
              time: 30,
              startTime: new Date('2025-04-27T12:00:00'),
              endTime: new Date('2025-04-27T12:30:00'),
            },
          ],
        },
      },
      {
        id: 4,
        name: "Dr. Miguel Alvarez",
        photo: "/assets/images/doctor-4.jpg",
        specialty: "Pediatrician",
        availability: "Mon - Fri, 10am - 4pm",
        location: "1177B Broadway, New York, NY 10001, USA",
        availabilityTime: {
          monday: [
            {
              id: '1',
              time: 30,
              startTime: new Date('2025-04-21T09:00:00'),
              endTime: new Date('2025-04-21T09:30:00'),
            },
            {
              id: '2',
              time: 30,
              startTime: new Date('2025-04-21T10:00:00'),
              endTime: new Date('2025-04-21T10:30:00'),
            },
          ],
          tuesday: [
            {
              id: '3',
              time: 30,
              startTime: new Date('2025-04-22T13:00:00'),
              endTime: new Date('2025-04-22T13:30:00'),
            },
          ],
          wednesday: [
            {
              id: '4',
              time: 30,
              startTime: new Date('2025-04-23T11:00:00'),
              endTime: new Date('2025-04-23T11:30:00'),
            },
          ],
          thursday: [
            {
              id: '5',
              time: 30,
              startTime: new Date('2025-04-24T15:00:00'),
              endTime: new Date('2025-04-24T15:30:00'),
            },
          ],
          friday: [
            {
              id: '6',
              time: 30,
              startTime: new Date('2025-04-25T14:00:00'),
              endTime: new Date('2025-04-25T14:30:00'),
            },
          ],
          saturday: [
            {
              id: '7',
              time: 30,
              startTime: new Date('2025-04-26T10:00:00'),
              endTime: new Date('2025-04-26T10:30:00'),
            },
          ],
          sunday: [
            {
              id: '8',
              time: 30,
              startTime: new Date('2025-04-27T12:00:00'),
              endTime: new Date('2025-04-27T12:30:00'),
            },
          ],
        },
      },
      {
        id: 5,
        name: "Dr Michel Jonson",
        photo: "/assets/images/doctor-5.jpg",
        specialty: "Endocrinologist",
        availability: "Wed - Sat, 9am - 1pm",
        location: "83 Columbia St, New York, NY 10002, USA",
        availabilityTime: {
          monday: [
            {
              id: '1',
              time: 30,
              startTime: new Date('2025-04-21T09:00:00'),
              endTime: new Date('2025-04-21T09:30:00'),
            },
            {
              id: '2',
              time: 30,
              startTime: new Date('2025-04-21T10:00:00'),
              endTime: new Date('2025-04-21T10:30:00'),
            },
          ],
          tuesday: [
            {
              id: '3',
              time: 30,
              startTime: new Date('2025-04-22T13:00:00'),
              endTime: new Date('2025-04-22T13:30:00'),
            },
          ],
          wednesday: [
            {
              id: '4',
              time: 30,
              startTime: new Date('2025-04-23T11:00:00'),
              endTime: new Date('2025-04-23T11:30:00'),
            },
          ],
          thursday: [
            {
              id: '5',
              time: 30,
              startTime: new Date('2025-04-24T15:00:00'),
              endTime: new Date('2025-04-24T15:30:00'),
            },
          ],
          friday: [
            {
              id: '6',
              time: 30,
              startTime: new Date('2025-04-25T14:00:00'),
              endTime: new Date('2025-04-25T14:30:00'),
            },
          ],
          saturday: [
            {
              id: '7',
              time: 30,
              startTime: new Date('2025-04-26T10:00:00'),
              endTime: new Date('2025-04-26T10:30:00'),
            },
          ],
          sunday: [
            {
              id: '8',
              time: 30,
              startTime: new Date('2025-04-27T12:00:00'),
              endTime: new Date('2025-04-27T12:30:00'),
            },
          ],
        },
      },
  ];
  export default doctors;