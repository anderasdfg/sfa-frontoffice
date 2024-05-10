import type { PatientResponse } from '../types';
import { mockPatientResponse } from './data';

export const getPatientBasicInfo = (): Promise<PatientResponse> => {
  return new Promise((resolve) =>
    // eslint-disable-next-line no-promise-executor-return
    setTimeout(() => resolve(mockPatientResponse), 1000),
  );
};
