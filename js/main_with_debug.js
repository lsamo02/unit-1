//define cityPop outside of function since it will be used in multiple
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

//create the table element
var table = document.createElement("table");

//initialize functions called when the script loads
function initialize(){
    cities();
	addColumns(cityPop); 
	addEvents ();

	//function to create intial table 
	function cities(){

		//create a header row
		var headerRow = document.createElement("tr");

		//add the "City" and "Population" columns to the header row
		headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

		//add the row to the table
		table.appendChild(headerRow);

		//loop to add a new row for each city
		for(var i = 0; i < cityPop.length; i++){
			//assign longer html strings to a variable
			var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
			//add the row's html string to the table
			table.insertAdjacentHTML('beforeend',rowHtml);
		}

		document.querySelector("#mydiv").appendChild(table);
	}


	//function to add column for city size
	function addColumns(cityPop){
		
		document.querySelectorAll("tr").forEach(function(row, i){

			if (i == 0 ){ 

				row.insertAdjacentHTML('beforeend', '<th>City Size</th>'); //corrected spelling of Adjacent

			} else {

				var citySize; 
				if (cityPop[i-1].population < 100000){
					citySize = 'Small';

				} else if (cityPop[i-1].population < 500000){
					citySize = 'Medium'; //corrected Case of citySize

				} else {
					citySize = 'Large';
				}

				row.insertAdjacentHTML ('beforeend', '<td>' + citySize + '</td>') //corrected spelling of Adjacent and added > to <td>. Replaced = with () after insertAdjacentHTML
			
			};
		}); 
	};

	// function to add hovering color to table
	function addEvents(){

		document.querySelector('table').addEventListener("mouseover", function(){
			
			var color = "rgb(";

			for (var i= 0; i<3; i++) {

				var random = Math.round(Math.random() * 255);

				color += random; // fixed random to not be string

				if (i<2){

					color += ",";
				
				} else {

					color += ")";
				};
			document.querySelector('table').style.color = color}; // added closing } and .style to .style.color= color
		});	
		
	};

	//function to add clicked pop up when table is clicked
	function clickMe(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickMe) // changed case of clickme to clickMe
};
document.addEventListener('DOMContentLoaded',initialize)
