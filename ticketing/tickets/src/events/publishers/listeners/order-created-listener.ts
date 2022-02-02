import { Listener, OrderCreatedEvent, Subjects } from '@ticketsbk/common';
import { Message } from 'node-nats-streaming';
import { Ticket } from '../../../models/ticket';
import { TicketUpdatedPublisher } from '../ticket-updated-publisher';
import { queueGroupName } from './queue-group-name';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    const ticket = await Ticket.findById(data.ticket.id);

    if (!ticket) {
      throw new Error('Ticket not found');
    }

    // mark the ticket as being reserved by setting its orderId prop
    ticket.set({ orderId: data.id });

    await ticket.save();

    await new TicketUpdatedPublisher(this.client).publish({
      id: ticket.id,
      version: ticket.version,
      title: ticket.title,
      price: ticket.price,
      userId: ticket.userId,
      orderId: ticket.orderId,
    });

    msg.ack();
  }
}