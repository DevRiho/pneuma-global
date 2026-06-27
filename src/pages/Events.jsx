import InnerHeader from '../components/InnerHeader';
import EventCard from '../components/EventCard';
import { getEvents } from '../data/events';

const Events = () => {
  const events = getEvents(import.meta.env.BASE_URL);
  return (
    <>
    <InnerHeader title="Upcoming Events" breadcrumb="Events" />
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Events;
