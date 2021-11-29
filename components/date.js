import { parseISO, format } from 'date-fns';

export default function Date({ dateString, title }) {
  const date = parseISO(dateString);
  let foo;
  try {
    foo = format(date, 'dd MMM yyyy');
  } catch (e) {
    console.log(date);
    console.log(dateString);
    console.log(title);
  }
  return <time dateTime={dateString}>{format(date, 'dd MMM yyyy')}</time>;
}
