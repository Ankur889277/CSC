export const PENDING = "PENDING";
export const IN_REVIEW = "IN_REVIEW";
export const ACTIVE = "ACTIVE";
export const PUBLISHED = "PUBLISHED";



 export const formatDateTime = (date, time) => {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  let [hours, minutes] = time.split(':').map(Number);
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${amPm}`;

  return `${formattedDate} at ${formattedTime}`;
};
