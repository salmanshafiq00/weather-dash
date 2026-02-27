function getFormattedTime(value, type, inMS = false) {
  if (value === undefined || value === null) return '';

  if (!type) return value;

  if (!inMS) {
    value = value * 1000;
  }

  const date = new Date(value);

  let options;

  switch (type) {
    case 'time':
      options = { hour: 'numeric', minute: 'numeric' };
      break;
    case 'date':
      options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
      break;
    default:
      return value;
  }

  return Intl.DateTimeFormat('en-US', options).format(date);
}

export { getFormattedTime };

