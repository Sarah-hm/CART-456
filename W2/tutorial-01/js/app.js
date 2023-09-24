import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

import { scaleLinear } from "https://cdn.skypack.dev/d3-scale@4";

const x = scaleLinear();

const DUMMY_DATA = [
  {
    id: "d1",
    value: 10,
    region: "USA",
  },
  {
    id: "d2",
    value: 11,
    region: "India",
  },
  {
    id: "d3",
    value: 12,
    region: "China",
  },
  {
    id: "d4",
    value: 6,
    region: "Germany",
  },
];

const xScale = d3
  .scaleBand()
  .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
  .rangeRound([0, 250])
  .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);
console.log(xScale);

window.onload = (event) => {
  //   const div = d3.selectAll("div");

  //   console.log(d3);

  let container = d3.select("svg").classed("container", true);

  let bar = container
    .selectAll(".bar")
    .data(DUMMY_DATA)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", xScale.bandwidth())
    .attr("height", (data) => 200 - yScale(data.value))
    .attr("x", (data) => xScale(data.region))
    .attr("y", (data) => yScale(data.value));
};
