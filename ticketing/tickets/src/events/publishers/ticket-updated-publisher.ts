import { Publisher, Subjects, TicketUpdatedEvent } from '@ticketsbk/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
