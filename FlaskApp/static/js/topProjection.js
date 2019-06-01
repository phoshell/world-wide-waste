// console.log("EPA PLOTS.js");

var pop_url = "https://api.myjson.com/bins/whz27";

d3.json(pop_url).then(function(pop) {
  console.log(pop);

// d3.csv("../resources/Population.csv").then((data) => {
//   console.log(data);

// function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  // d3.csv("../resources/Population.csv").then((data) => {
  //   console.log(data);
  
    // @TODO: Build a Bubble Chart using the sample data
    // /// /// /// /// BUBBLE CHART // /// /// /// /// 
  var bubble_data = {
    x: pop.coastal_population,
    y: pop.value,
    mode: "markers",
    // type: "scatter",
    marker: {
      size: pop.coastal_population,
      colors: [1, 95, 88],
    }
  };

  // Create the data array for the plot
  var data_pop = [bubble_data];

  var layout = {
    title: "Population",
    xaxis: { title: "Coastal Country Population" },
    yaxis: { title: "Waste Generation in Tonnes" },
  };

  Plotly.newPlot("bubble", data_pop, layout);
  });