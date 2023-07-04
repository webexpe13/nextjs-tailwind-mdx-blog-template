import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  return <time dateTime={dateString}>{dateString}</time>
}

export default DateFormatter
