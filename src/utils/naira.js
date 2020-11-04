var Naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});

const Currency = (e, divisor = 100) => Naira.format(e / divisor);

// export default Naira;
export default Currency;
