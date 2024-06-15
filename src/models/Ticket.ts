import { Field, Model } from "json-modelizer";

import type Order from "./Order";
import type Seat from "./Seat";

export default class Ticket extends Model {
  static _table = "tickets";
  static schema = {
    isCancelled: Field.Boolean,
  };

  id!: number;
  isCancelled!: boolean;
  createdAt!: Date;
  updatedAt!: Date;

  seatId!: number;
  seat!: Seat;

  orderId!: number;
  order!: Order;

  // belongsTo
  withoutOrder() {
    const { order, ...ticketWithoutOrder } = this;
    return ticketWithoutOrder;
  }

  // belongsTo
  withoutSeatAndOrder() {
    const { seat, order, ...ticketWithoutSeatAndOrder } = this;
    return ticketWithoutSeatAndOrder;
  }

  withoutOrderAndTicketsInSeat() {
    const { order, ...ticketWithoutOrder } = this;
    return {
      ...ticketWithoutOrder,
      seat: this.seat.withoutTicketsAndSeatsInMovie(),
    };
  }

  toJSON() {
    return {
      ...this,
      seat: this.seat.withoutTicketsAndSeatsInMovie(),
      order: this.order.withoutTicketsAndOrderInUser(),
    };
  }
}
