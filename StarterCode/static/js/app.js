// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");


//Display data in log
console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(alienVista) {
    // console.log(alienVista);
    const row = tbody.append('tr');
    row.append('td').text(alienVista.datetime);
    row.append('td').text(alienVista.city.toUpperCase());
    row.append('td').text(alienVista.state.toUpperCase());
    row.append('td').text(alienVista.country.toUpperCase());
    row.append('td').text(alienVista.shape);
    row.append('td').text(alienVista.durationMinutes);
    row.append('td').text(alienVista.comments);
  });

