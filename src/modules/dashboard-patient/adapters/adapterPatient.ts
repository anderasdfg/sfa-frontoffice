import type {
  PatientResponse,
  FormattedPatient,
} from '@/modules/dashboard-patient/types';
import { formatDate } from '@/shared/utils';

export const adapterPatient = (
  data?: PatientResponse['data'],
): FormattedPatient => {
  if (!data) {
    return {
      id: '',
      historyId: '',
      userId: '',
      weight: '-',
      bloodGroup: '-',
      height: '-',
      name: '-',
      email: '-',
      phoneNumber: '-',
      photo: '',
    };
  }

  return {
    id: data.id,
    historyId: data.historyId,
    userId: data.userId,
    weight: data.resumeInfo.weight + 'kg' ?? '-',
    bloodGroup: data.resumeInfo.bloodGroup ?? '-',
    height: data.resumeInfo.height + 'm' ?? '-',
    dateOfBirth: formatDate(data.resumeInfo.dateOfBirth),
    name: data.personalInfo.name ?? '-',
    email: data.personalInfo.email ?? '-',
    phoneNumber: data.personalInfo.phoneNumber ?? '-',
    photo: data.personalInfo.photo ?? '',
  };
};
