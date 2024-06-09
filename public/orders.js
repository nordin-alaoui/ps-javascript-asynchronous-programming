async function get(){
  try{
    const statuseReq = axios.get("http://localhost:3000/api/orderStatuses");
    const orderReq = axios.get("http://localhost:3000/api/orders");

    const {data: statuses} = await statuseReq;
    const {data: order} = await orderReq;
    
    const orders = order.map(o => {
      return {
        ...o,
        orderStatus: statuses.find(d => d.id === o.orderStatusId).description
      };
    });
    showOrderList("#order-list", orders);
  }
  catch(err)
  {
    showError("order-list", err)
  }
}

get();