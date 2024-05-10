import type { FormattedDate } from '@/shared/utils';

export interface FormattedPatient {
  id: string;
  historyId: string;
  userId: string;
  weight: string;
  bloodGroup: string;
  height: string;
  dateOfBirth?: FormattedDate;
  name: string;
  email: string;
  phoneNumber: string;
  photo: string;
}
