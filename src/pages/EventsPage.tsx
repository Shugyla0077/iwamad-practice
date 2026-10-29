import { events } from '../data/events'
import { EventCard } from '../components/EventCard'

export const EventsPage = () => {
  return (
    <div className="w-full max-w-4xl">
      <h1>Events</h1>
      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}