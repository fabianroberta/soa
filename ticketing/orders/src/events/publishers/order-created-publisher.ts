import { Publisher, OrderCreatedEvent, Subjects } from '@ticketsbk/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
