import Movie from "./Movie";
import Order from "./Order";
import Seat from "./Seat";
import Ticket from "./Ticket";
import User from "./User";

Movie.hasMany(Seat).as("seats").foreignKey("movieId");
Seat.belongsTo(Movie).as("movie").foreignKey("movieId");

// Seat.hasOne(Ticket).as("ticket").foreignKey("seatId");
// Ticket.belongsTo(Seat).as("seat").foreignKey("seatId");

// Order.hasMany(Ticket).as("tickets").foreignKey("orderId");
// Ticket.belongsTo(Order).as("order").foreignKey("orderId");

// User.hasMany(Order).as("orders").foreignKey("userId");
// Order.belongsTo(User).as("user").foreignKey("userId");

export { Movie, User, Order, Ticket, Seat };
