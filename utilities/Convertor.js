export const dateToTime = timestamp => {
  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 || 12;
  const period = hours < 12 ? 'am' : 'pm';

  const formattedTime = `${formattedHours}:${
    minutes < 10 ? '0' : ''
  }${minutes} ${period}`;

  return formattedTime;
};

export const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const dateFormated = dateString => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export const reverseDateFormatted = formattedDateString => {
  const parts = formattedDateString.split('-');

  if (parts.length !== 3) {
    throw new Error('Invalid formatted date string');
  }

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error('Invalid formatted date string');
  }

  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  return date;
};
