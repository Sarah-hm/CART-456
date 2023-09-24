import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// import { scaleLinear } from "https://cdn.skypack.dev/d3-scale@4";

window.onload = (event) => {
  fetch("data/text.json")
    .then((response) => response.json())
    .then((data) => {
      const x = d3.scaleLinear();

      const xScale = d3
        .scaleBand()
        .domain(data.map((dataPoint) => dataPoint.region))
        .rangeRound([0, 250])
        .padding(0.1);
      const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);
      console.log(xScale);

      let container = d3.select("svg").classed("container", true);

      let bars = container
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .classed("bar", true)
        .attr("width", xScale.bandwidth())
        .attr("height", (data) => 200 - yScale(data.value))
        .attr("fill", (d) => d.color)
        .attr("x", (data) => xScale(data.region))
        .attr("y", (data) => yScale(data.value));
    });
};
