import { Subjects, Publisher, PaymentCreatedEvent } from '@ticketsbk/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
