import dayjs from 'dayjs';

export default function Date({ dateString }) {
  const formatDate = dayjs(dateString).format('MMMM D, YYYY');

  return <time dateTime={dateString}>{formatDate}</time>;
}
