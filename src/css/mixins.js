export const translate = (e) => {
  return `
    transform: translate(${e});
    -webkit-transform: translate(${e});
    -ms-transform: translate(${e});
    -moz-transform: translate(${e});
    -o-transform: translate(${e});
    -khtml-transform: translate(${e});
  `;
};

export const translateXY = (x, y) => {
  return `
    transform: translate(${x}, ${y});
    -webkit-transform: translate(${x}, ${y});
    -ms-transform: translate(${x}, ${y});
    -moz-transform: translate(${x}, ${y});
    -o-transform: translate(${x}, ${y});
    -khtml-transform: translate(${x}, ${y});
  `;
};

export const shadow = () => {
  return `
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  `;
};
