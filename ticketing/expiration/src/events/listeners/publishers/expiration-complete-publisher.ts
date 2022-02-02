import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ticketsbk/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
