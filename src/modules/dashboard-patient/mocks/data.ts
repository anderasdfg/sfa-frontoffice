import type { PatientResponse } from '../types';

export const mockPatientResponse: PatientResponse = {
  data: {
    id: '123456789',
    historyId: 'history123',
    userId: 'user123',
    resumeInfo: {
      weight: 70,
      bloodGroup: 'A+',
      height: 175,
      dateOfBirth: '2003-04-13',
    },
    personalInfo: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '+1234567890',
      photo:
        'https://homecoming.messiah.edu/wp-content/uploads/2015/04/speaker-3-v2.jpg',
    },
  },
  success: true,
  page: 1,
};
