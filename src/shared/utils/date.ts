import { add, format } from 'date-fns';
export interface FormattedDate {
  date: string;
  time: string;
  month: string;
  year: string;
}

export const formatDateFallback = {
  date: '--/--/----',
  time: '--:--:--',
  month: '--',
  year: '----',
};

export const formatDate = (date?: Date | null | string): FormattedDate => {
  if (!date) return formatDateFallback;

  let dateValid: Date;

  if (typeof date === 'string') {
    const day = parseInt(date.substring(0, 2), 10);
    const month = parseInt(date.substring(2, 4), 10) - 1;
    const year = parseInt(date.substring(4, 8), 10);
    dateValid = new Date(year, month, day);
    if (date.includes('-')) {
      dateValid = new Date(date);
    }
  } else {
    dateValid = date;
  }

  const dateFormatted = format(dateValid, 'dd/MM/yyyy');

  const timeFormatted = dateValid.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const month = dateValid.toLocaleDateString('es-ES', {
    month: 'long',
  });

  const year = dateValid.toLocaleDateString('es-ES', {
    year: 'numeric',
  });

  return {
    date: dateFormatted,
    time: timeFormatted,
    month,
    year,
  };
};

export const removeTime = (date: Date) => {
  const [dateWithoutTime] = date.toISOString().split('T');

  return dateWithoutTime;
};

export const formatDateKey = (date?: Date | string): string => {
  let dateValid: Date;

  if (typeof date === 'string') {
    dateValid = add(new Date(new Date(date)), { hours: 5 });
  } else {
    dateValid = date ?? new Date();
  }

  return format(dateValid, 'yyyy-MM-dd');
};

export const formatDateIso = (date?: string | Date): string => {
  const dateValid = date
    ? new Date(formatDateKey(date))
    : new Date(formatDateKey());

  const timezoneOffset = dateValid.getTimezoneOffset() * -1;
  const localDate = new Date(dateValid.getTime() - timezoneOffset * 60 * 1000);

  return localDate.toISOString();
};

export const getDateToCompare = (now: Date) => {
  return now.setMinutes(now.getMinutes() + 30);
};

export const formatDateFromUnix = (unixTimestamp: number): FormattedDate => {
  const dateValid = new Date(unixTimestamp * 1000); // Multiplicar por 1000 para convertir segundos a milisegundos

  const dateFormatted = format(dateValid, 'dd/MM/yyyy');
  const timeFormatted = dateValid.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const month = dateValid.toLocaleDateString('es-ES', {
    month: 'long',
  });
  const year = dateValid.toLocaleDateString('es-ES', {
    year: 'numeric',
  });

  return {
    date: dateFormatted,
    time: timeFormatted,
    month,
    year,
  };
};
