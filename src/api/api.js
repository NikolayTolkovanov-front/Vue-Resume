const url = "http://localhost:3000/bids";

export const addBid = (name, email, description) => {
  const bidInfo = JSON.stringify({ name, email, description });
  console.log(bidInfo)
  fetch(url, {
    method: "POST",
    body: bidInfo,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => console.log(res));
};
