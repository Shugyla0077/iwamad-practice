import { Link } from 'react-router'
import { Card } from './ui/Card'
import { Tag } from './ui/Tag'
import type { CampusEvent } from '../data/events'

export const EventCard = ({ event }: { event: CampusEvent }) => {
  return (
    <Card>
      <h2>{event.title}</h2>
      <p>
        {event.date} · {event.place}
      </p>
      <div className="flex items-center justify-between mt-3 gap-2">
        <Tag label={`${event.seats} seats`} />
        <Link to={`/events/${event.id}`}>Details</Link>
      </div>
    </Card>
  )
}