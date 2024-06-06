import { Model } from "json-modelizer";
import type Ticket from "./Ticket";
import User from "./User";

export default class Order extends Model {
  static _table = "orders";
  static schema = {};

  id!: number;
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

  toJSON() {
    const { orders, ...userWithoutOrders } = User.withoutPassword(this.user);
    return {
      ...this,
      tickets: this.tickets.map((ticket) => ticket.withoutOrder()),
      user: userWithoutOrders,
    };
  }
}
