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

  //get a hold of the button
const button = d3.select('#filter-btn')

button.on("click", function(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //select the input element for date filter
   const dateForm =  d3.select('#datetime')
   const dateValue = dateForm.property("value")

    console.log(dateValue);

    //filter data by date
    if (dateValue == '')
        {filteredData = tableData}
    else 
        {filteredData = tableData.filter(tableData => Date.parse(tableData.datetime) === Date.parse(dateValue))}
    

    console.log(filteredData);


    //select the input element by country
    const countryForm =  d3.select('#countrycd')
    const countryValue = countryForm.property("value")

    console.log(countryValue);

    //filter data by country
    if (countryValue == '')
        {filteredData = filteredData}
    else 
        {filteredData = filteredData.filter(filteredData => filteredData.country.toUpperCase() === countryValue.toUpperCase())}

    

    console.log(filteredData);

    //select the input element by state
    const stateForm =  d3.select('#statecd')
    const stateValue = stateForm.property("value")

    console.log(stateValue);

    //filter data by state
    if (stateValue == '')
        {filteredData = filteredData}
    else 
        {filteredData = filteredData.filter(filteredData => filteredData.state.toUpperCase() === stateValue.toUpperCase())}

    

    console.log(filteredData);


    //select the input element
    const cityForm =  d3.select('#city')
    const cityValue = cityForm.property("value")

    console.log(cityValue);

    //filter data by date
    if (cityValue == '')
        {filteredData = filteredData}
    else 
        {filteredData = filteredData.filter(filteredData => filteredData.city.toUpperCase() === cityValue.toUpperCase())}

    

    console.log(filteredData);

    //select the comment search
    const commForm =  d3.select('#comments')
    const commValue = commForm.property("value")

    console.log(commValue);

    //filter data by date
    if (commValue == '')
        {filteredData = filteredData}
    else 
        {filteredData = filteredData.filter(filteredData => filteredData.comments.toUpperCase().search(commValue.toUpperCase()) !== -1)}

    

    console.log(filteredData);

    var table = d3.select("#ufo-body");
    //or use :  var table = document.all.tableid;
    table.html("")

    filteredData.forEach(function(alienVista) {
        // console.log(alienVista);
        let tbody = d3.select("tbody");
        const row = tbody.append('tr');
        row.append('td').text(alienVista.datetime);
        row.append('td').text(alienVista.city.toUpperCase());
        row.append('td').text(alienVista.state.toUpperCase());
        row.append('td').text(alienVista.country.toUpperCase());
        row.append('td').text(alienVista.shape);
        row.append('td').text(alienVista.durationMinutes);
        row.append('td').text(alienVista.comments);
      });

})
