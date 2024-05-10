export interface PatientRequest {
  id: string;
}

export interface PatientResponse {
  page: number;
  data: {
    id: string;
    historyId: string;
    userId: string;
    resumeInfo: {
      weight: number;
      bloodGroup: string;
      height: number;
      dateOfBirth: string;
    };
    personalInfo: {
      name: string;
      email: string;
      phoneNumber: string;
      photo: string;
    };
  };
  success: boolean;
}
