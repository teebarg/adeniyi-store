var Naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});

const Currency = (e) => Naira.format(e / 100);

// export default Naira;
export default Currency;
