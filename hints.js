console.log(unpack(data.dataset.data, 0))


// The new student and grade to add to the table
const newGrade = ["Wash", 79];

// Use D3 to select the table
const table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
const tbody = d3.select("tbody");

// Append one table row `tr` to the table body
const row = tbody.append("tr");

// Append one cell for the student name
row.append("td").text(newGrade[0]);

// Append one cell for the student grade
row.append("td").text(newGrade[1]);


// The new student and grade to add to the table
const newGrade = ["Wash", 79];

// Use D3 to select the table
const row = d3.select("table")
	.attr("class", "table table-striped")
	.select("tbody")
	.append("tr")

newGrade.forEach(
	e=>{
		row.append("td").text(e)
	}
)


headerArr = Object.keys(data[0])

headerArr.forEach(
    e => {
        newTheadRow.append("th").text(e)
    }
)


data.forEach(

    obj => {
        row = newTbody.append("tr")
    
    Object.keys(obj).forEach(
        key =>
        {
            row.append("td").text(obj[key])
        }
    )

    }
)