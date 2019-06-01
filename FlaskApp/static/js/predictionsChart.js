// BASIC GREEN HORIZONTAL BAR chart

var predictionsURL = "https://api.myjson.com/bins/a5ot4"
var url = "/api/calculations"
var topMIS = "https://api.myjson.com/bins/1gn387"


var HIC = "https://api.myjson.com/bins/g9pvr"
var UMI = "https://api.myjson.com/bins/1b89c7"
var LMI = "https://api.myjson.com/bins/p9d47"
var LI = "https://api.myjson.com/bins/12yc13"

// HIC
d3.json(HIC).then(function(response) {
  // console.log(response);

  var xvar = response.map(function(d){return d.country})
  var man = response.map(function(d){return d.managed})
  var mis = response.map(function(d){return d.mismanaged})

  var managed = {
    y: xvar,
    x: man,
    name: 'managed waste',
    type: 'bar',
    orientation: 'h',
    marker: {
      // orange
      color: 'rgb(255, 159, 58)'
    }
  };

  var mismanaged = {
    y: xvar,
    x: mis,
    name: 'mismanaged waste',
    type: 'bar',
    orientation: 'h',
    marker: {
      // neon orange
      color: 'rgb(244, 86, 65)'
    }
  };

  var data = [managed, mismanaged];
  var layout = {barmode: 'stack',
    paper_bgcolor: '#000000',
    plot_bgcolor: '#000000',
      title: {
        text: 'Top 10 High Income Countries with Most Mismanaged Plastic Waste',
        font: {
          family: 'Courier New, monospace',
          size: 22,
          color: '#7f7f7f'}
        },
        xaxis: {
          text: "Managed vs Mismanaged Waste kg (percentage)",
          automargin: true,
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'}},
        yaxis: {
          text: "Countries",
          automargin: true,
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'}}
      };


  Plotly.newPlot('chart', data, layout, {responsive: true});
});


// UMI
d3.json(UMI).then(function(response) {
  // console.log(response);

  var xvar = response.map(function(d){return d.country})
  var man = response.map(function(d){return d.managed})
  var mis = response.map(function(d){return d.mismanaged})

  var managed = {
    y: xvar,
    x: man,
    name: 'managed waste',
    type: 'bar',
    orientation: 'h',
    marker: {
      // orange
      color: 'rgb(255, 159, 58)'
    }
  };

  var mismanaged = {
    y: xvar,
    x: mis,
    name: 'mismanaged waste',
    type: 'bar',
    orientation: 'h',
    marker: {
      // dark rose
      color: 'rgb(209, 64, 100)'
    }
  };

  var data = [managed, mismanaged];
  var layout = {barmode: 'stack',
  paper_bgcolor: '#000000',
  plot_bgcolor: '#000000',
      title: {
        text: 'Top 10 Upper Middle Income Countries with Most Mismanaged Plastic Waste',
        font: {
          family: 'Courier New, monospace',
          size: 22,
          color: '#7f7f7f'},
      xaxis: {
        text: "Managed vs Mismanaged Waste kg (percentage)",
        automargin: true,
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'}},
      yaxis: {
        text: "Countries",
        automargin: true,
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'}}

      }};

  Plotly.newPlot('chart2', data, layout, {responsive: true});
});

// LMI
d3.json(LMI).then(function(response) {
  // console.log(response);

  var xvar = response.map(function(d){return d.country})
  var man = response.map(function(d){return d.managed})
  var mis = response.map(function(d){return d.mismanaged})

  var managed = {
    y: xvar,
    x: man,
    name: 'managed waste',
    type: 'bar',
    orientation: 'h',
    marker: {
      // orange
      color: 'rgb(255, 159, 58)'
    }
  };

   var mismanaged = {
    y: xvar,
    x: mis,
    name: 'mismanaged waste',
    type: 'bar',
    orientation: 'h',
    marker: {
      // blue
      color: 'rgb(64, 80, 209)'
    }
  };

  var data = [managed, mismanaged];
  var layout = {barmode: 'stack',
  paper_bgcolor: '#000000',
  plot_bgcolor: '#000000',
      title: {
        text: 'Top 10 Lower Middle Income Countries with Most Mismanaged Plastic Waste',
        font: {
          family: 'Courier New, monospace',
          size: 22,
          color: '#7f7f7f'},
      xaxis: {
        text: "Managed vs Mismanaged Waste kg (percentage)",
        automargin: true,
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'}},
      yaxis: {
        text: "Countries",
        automargin: true,
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'}}
  }};

  Plotly.newPlot('chart3', data, layout, {responsive: true});
});



// LI
d3.json(LI).then(function(response) {
  // console.log(response);

  var xvar = response.map(function(d){return d.country})
  var man = response.map(function(d){return d.managed})
  var mis = response.map(function(d){return d.mismanaged})

  var managed = {
    y: xvar,
    x: man,
    name: 'managed waste',
    type: 'bar',
    orientation: 'h',
    marker: {
      // orange
      color: 'rgb(255, 159, 58)'
    }
  };

  var mismanaged = {
    y: xvar,
    x: mis,
    name: 'mismanaged waste',
    type: 'bar',
    orientation: 'h',
    marker: {
      // teal
      color: 'rgb(64, 209, 172)'
    }
  };

  var data = [managed, mismanaged];
  var layout = {barmode: 'stack',
  paper_bgcolor: '#000000',
  plot_bgcolor: '#000000',
      title: {
        text: 'Top 10 Lower Income Countries with Most Mismanaged Plastic Waste',
        font: {
          family: 'Courier New, monospace',
          size: 22,
          color: '#7f7f7f'},
      xaxis: {
        text: "Managed vs Mismanaged Waste kg (percentage)",
        automargin: true,
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'}},
      yaxis: {
        text: "Countries",
        automargin: true,
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'}}

      }};


Plotly.newPlot('chart4', data, layout, {responsive: true});
});
