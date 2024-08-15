const ordersFromAPI = [
  {
    id: 1,
    title: "Tennis racket HEAD 23 Junior",
    price: { amount: "350.00", currency: "PLN" },
    delivery: { price: "10.00", currency: "PLN", type: "INPOST" },
    quantity: 1,
  },
  {
    id: 2,
    title: "Tennis racket HEAD 25 Junior",
    price: { amount: "500.00", currency: "PLN" },
    delivery: { price: "10.00", currency: "PLN", type: "INPOST" },
    quantity: 2,
  },
  {
    id: 3,
    title: "Tennis racket HEAD 27 Pro",
    price: { amount: "750.00", currency: "PLN" },
    delivery: { price: "5.00", currency: "PLN", type: "COURIER" },
    quantity: 1,
  },
];

console.log(ordersFromAPI);

const orders = ordersFromAPI.map((order) => {
  return {
    id: order.id,
    title: order.title,
    totalPrice: {
      amount:
        Number(order.price.amount) * order.quantity +
        Number(order.delivery.price),
      currency: order.price.currency,
    },
  };
});

console.log(orders);
