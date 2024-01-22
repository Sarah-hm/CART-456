import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
const canvas = d3.select("div");
window.onload = (event) => {
  // Dataset taken from Ville de Montreal here: https://donnees.montreal.ca/dataset/grands-parcs-parcs-d-arrondissements-et-espaces-publics
  fetch("espace_vert.json")
    .then((response) => response.json())
    .then((data) => {
      const x = d3.scaleLinear();

      let neighborhoods = [{}];
      //Run through the data, and everytime there is a new GESTION (neighborhood), store it in an array of possible neighborhoods
      for (let i = 0; i < data.features.length; i++) {
        // if neighborhoods array does not already have an object with name of neighborhood, push to array
        if (
          !neighborhoods.some(
            (e) => e.name === data.features[i].properties.GESTION
          )
        ) {
          //  push the new neighborhood to neighborhoods array, with a park number of 0 (will be added after)
          neighborhoods.push({
            name: data.features[i].properties.GESTION,
            numParks: 0,
          });
        }

        //run through neighborhoods array, and add +1 value to whichever neighborhood the park belongs to
        for (let y = 0; y < neighborhoods.length; y++) {
          if (neighborhoods[y].name === data.features[i].properties.GESTION) {
            let newNum = neighborhoods[y].numParks + 1;
            neighborhoods[y].numParks = newNum;
          }
        }
      }
      console.log(neighborhoods);

      // To know what is the maximum number of Parks any neighborhood has
      // Run through the entire neighorhood array, if the number of park is greater than the already found maximum, replace the maximum by this neighborhood's park number.
      let maxNumPark = 0;
      for (let i = 0; i < neighborhoods.length; i++) {
        if (neighborhoods[i].numParks > maxNumPark) {
          maxNumPark = neighborhoods[i].numParks;
        }
      }

      let container = canvas
        .append("svg")
        .attr("width", "100%")
        .attr("height", "90vh")
        .attr("id", "container");

      // DO SOMETHING WITH DATA :)
      console.log();
      const xScale = d3
        .scaleBand()
        .domain(neighborhoods.map((dataPoint) => dataPoint.name))
        .rangeRound([
          0,
          document.getElementById("container").getBoundingClientRect().width,
        ])
        .padding(0.2);
      const yScale = d3.scaleLinear().domain([0, maxNumPark]).range([600, 0]);
      console.log(xScale);

      //   let container = d3.select("svg").classed("container", true);

      let bars = container
        .selectAll(".bar")
        .data(neighborhoods)
        .enter()
        .append("rect")
        .classed("bar", true)
        .attr("width", xScale.bandwidth())
        .attr("height", (neighborhoods) => 700 - yScale(neighborhoods.numParks))
        .attr("x", (neighborhoods) => xScale(neighborhoods.name))
        .attr("y", (neighborhoods) => yScale(neighborhoods.numParks));
      //   .attr("fill", (d) => d.color)
    });
};
