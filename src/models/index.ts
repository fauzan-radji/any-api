import Movie from "./Movie";
import User from "./User";
import Order from "./Order";
import Ticket from "./Ticket";

Order.hasMany(Ticket).as("tickets");
Ticket.belongsTo(Order).as("order");

User.hasMany(Order).as("orders");
Order.belongsTo(User).as("user");

Movie.hasMany(Order).as("orders");
Order.belongsTo(Movie).as("movie");

export { Movie, User, Order, Ticket };
