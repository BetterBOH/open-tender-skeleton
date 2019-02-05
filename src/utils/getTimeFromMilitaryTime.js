export default militaryTime => {
  if (!militaryTime.includes(':')) {
    throw new Error(
      'getTimeFromMilitaryTime: You must provide time in hh:mm format.'
    );
  }

  const [hours, minutes] = militaryTime.split(':').map(value => {
    return parseInt(value);
  });

  const timeOfDay = hours < 12 ? 'PM' : 'AM';
  const minutesInDoubleDigits = minutes < 10 ? `0${minutes}` : minutes;

  let formattedHours;
  switch (hours) {
    case 0:
    case 12:
      formattedHours = 12;
      break;
    default:
      formattedHours = hours % 12;
  }

  return minutes
    ? `${formattedHours}:${minutesInDoubleDigits}${timeOfDay}`
    : `${formattedHours}${timeOfDay}`;
};
