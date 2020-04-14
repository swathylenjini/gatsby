import * as d3 from "d3";

export const generateRandomValues = (value, length = 5) =>
d3.range(length).map((item, index) => ({
  label: 'Label'+ index,
  value: value === null || value === undefined ? Math.random() * 100 : value
}));