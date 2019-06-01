// OG EPA WASTE TREATMENT VISUALIZATION

// This is the older version of my code when i was using the data.js file
// The difference – this code visually functions closest to what I wanted to visualize
// However the individual rectangles in each bar DO NOT depict each individual measurement
// var epa = data

// TRACEPAPER
var tracePaper = {
    x: [epa.map(item => item.year), epa.map(item => item.waste_type)],
    y: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
    text: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
    name: "Paper",
    type: "bar",
    marker: {
      // bright green
      color: 'rgb(241, 242, 181)'
    }
};

//   TRACEGLASS
var traceGlass = {
    x: [epa.map(item => item.year), epa.map(item => item.waste_type)],
    y: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
    text: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
    name: "Glass",
    type: "bar",
    marker: {
      // bright teal
      color: 'rgb(81, 239, 191)'
    }
};
// TRACEMETAL
var traceMetal = {
    x: [epa.map(item => item.year), epa.map(item => item.waste_type)],
    y: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
    text: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
    name: "Metal",
    type: "bar",
    marker: {
      // green yellow
      color: 'rgb(192,192,192)'
    }
};
  // TRACEWOOD
  var traceWood = {
    x: [epa.map(item => item.year), epa.map(item => item.waste_type)],
    y: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass), epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
    text: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass), epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
    name: "Wood",
    type: "bar",
    marker: {
      // neon yellow
      color: 'rgb(255, 175, 56)'
      // in case we like blue instead > rgb(15, 71, 255)
    }
};
  // TRACEPLASTIC
  var tracePlastic = {
    x: [epa.map(item => item.year), epa.map(item => item.waste_type)],
    y: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
    text: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
    name: "Plastic",
    type: "bar",
    marker: {
      // neon orange
      color: 'rgb(244, 86, 65)'
    }
  };
  
  // The data array consists of both traces
  var tada = [tracePlastic, traceGlass, traceMetal, traceWood, tracePaper];


// LAYOUT IN THE LOOP
var layout = {
    barmode: 'stack',
    paper_bgcolor: '#000000',
    plot_bgcolor: '#000000',
    title: {
      text:'United States Material Waste Treatments By Years',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05,
    },
    xaxis: {
      title: {
        text: 'Materials Generated & Treatments Per Year ',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Materials in Tonnes',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    }
  };

  Plotly.newPlot("plot", tada, layout);