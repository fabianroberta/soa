import { Publisher, Subjects, TicketCreatedEvent } from '@ticketsbk/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
