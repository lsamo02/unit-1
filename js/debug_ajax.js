function debugAjax(){
	//removed var myData
	//var myData;

	//fetchs data from data folder 
	fetch("data/MegaCities.geojson")
		.then(function(response){
			return response.json(); //returned response first
		})
		.then(debugCallback)// then moved callback outside of response function
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(response)) //added , 
};

function debugCallback(response){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(response))
};

//not needed?
//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(response))


window.onload = debugAjax();