import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const canvas = d3.select("div");

const dataArray = [4, 15, 34, 20, 25];

window.onload = (event) => {
  console.log(canvas);

  //add an svg element
  let svg = canvas.append("svg").attr("width", "500").attr("height", "800");
  const rect = svg.selectAll("rect");

  svg
    .append("text")
    .text("hello there!")
    .attr("font-size", 50)
    .attr("text-anchor", "start")
    .attr("fill", "lightgreen")
    .attr("x", 10)
    .attr("y", 50);

  rect
    .data(dataArray)
    .enter()
    .append("rect")
    .attr("width", 24)
    .attr("height", (d) => d * 3)
    .attr("fill", "orange")
    .attr("x", (d, i) => i * 25)
    .attr("y", (d) => 100 - d * 3);
};
