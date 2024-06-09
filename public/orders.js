
async function get(){

  await Promise.all([
    (async () => {
      const {data: statuses} = await axios.get("http://localhost:3000/api/orderStatuses");
      showMessage("statuses Fetched");
    })(),
    (async () => {
    const {data: data} = await axios.get("http://localhost:3000/api/orders");;
      showOrderList("#order-list", data);
    })()
  ]) 
}

get();