import { Field, Model } from "json-modelizer";

import type Ticket from "./Ticket";
import User from "./User";

export default class Order extends Model {
  static _table = "orders";
  static schema = {
    total: Field.Number,
  };

  id!: number;
  total!: number;
  createdAt!: Date;
  updatedAt!: Date;

  tickets!: Ticket[];

  userId!: number;
  user!: User;

  // hasMany
  withoutTickets() {
    const { tickets, ...orderWithoutTickets } = this;
    return orderWithoutTickets;
  }

  // belongsTo
  withoutUser() {
    const { user, ...orderWithoutUser } = this.withoutTickets();
    return orderWithoutUser;
  }

  withoutTicketsAndOrderInUser() {
    const { tickets, ...orderWithoutTickets } = this;
    return {
      ...orderWithoutTickets,
      user: this.user.withoutOrders(),
    };
  }

  toJSON() {
    const { orders, ...userWithoutOrders } = User.withoutPassword(this.user);
    return {
      ...this,
      tickets: this.tickets.map((ticket) =>
        ticket.withoutOrderAndTicketsInSeat()
      ),
      user: userWithoutOrders,
    };
  }
}
