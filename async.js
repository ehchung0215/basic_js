(async () => {
  const { retrieveOrders, getOrdersByStatus } = require("./async_example");

  //   retrieveOrders is an API call to get order details
  //   getOrderByStatus is a function that takes 2 arguments
  // first is, orderDetails --> orderDetails (array of objects)
  // second is, the status --> string

  // print out the results that you get from getOrdersByStatus function
  // make sure to pass the 2 arguments into the function

  const orderDetails = await retrieveOrders(true);
  const ordersByStatus = await getOrdersByStatus(orderDetails, "Pending");
  console.log(ordersByStatus);
  //   for (let i = 0; i < orderDetails.length; i++) {
  //     console.log(orderDetails[i].orderId);

  //   let totalAmt = 0;
  //   for (let i = 0; i < orderDetails.length; i++) {
  // console.log(orderDetails[i].totalAmount);

  //     totalAmt = totalAmt + orderDetails[i].totalAmount;
  //   }

  //   let roundedAmount = Math.round(totalAmt * 100) / 100;

  //   console.log(roundedAmount);
})();
// Problem - using a for loop, get the total sum of totalAmount
