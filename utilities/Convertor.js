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
