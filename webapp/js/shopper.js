var switch1 = 0;
var switch2 = 0;
var switch3 = 0;
var countCubicle = 3;
var queue = 0;

function getSwitch1Level() {
    $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20le%20'29827307-fa35-49e8-9374-dfe63a6d1893'&orderby=timestamp%20desc&top=1",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    }).done(function(data) {
  		if (data) {
  			if (data[0].measure.Switch === "0") {
  				switch1 = "1";
  			} else {
  				switch1 = "0";
  				
  				
  			}
  			
  		}
  });
}

function getSwitch2Level() {
    $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20le%20'3d55fa4a-a8fe-4b52-9c63-c2b30aeabf36'&orderby=timestamp%20desc&top=1",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    }).done(function(data) {
  		if (data) {
  			if (data[0].measure.Switch2 === "0") {
  				switch2 = "1";	
  				
  			} else {
  				switch2 = "0";
  				
  			}
  		}
  });
}

function getSwitch3Level() {
    $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20le%20'86bff464-5cb7-4c90-a8d3-b8ba7f18ab09'&orderby=timestamp%20desc&top=1",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    }).done(function(data) {
  		if (data) {
  			if (data[0].measure.Switch3 === "0") {
  				switch3 = "1";	
  				
  			} else {
  				switch3 = "0";
  				
  			}
  		}
  });
}

function getQueue() {
    $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20le%20'422492c0-5a6e-4b17-90d1-c5ab5548b969'&orderby=timestamp%20desc&top=1",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    }).done(function(data) {
  		if (data) {
  			queue = parseInt(data[0].measure.number);
  		}
  });
}

function getToilets() {
	$.ajax({
    type: "GET",
    url: "/xsodata_toilet3/toilet3/services/toilet3.xsodata/Toilet?$format=json",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("TOILET3" + ":" + "Welcome5")
	}
    }).done(function(data) {
    	countCubicle = 3 - parseInt(switch1) - parseInt(switch2) - parseInt(switch3);
    	console.log(switch3);
  		if (data) {
  			var output = "";
  			data.d.results.map((result) => {
                output += `<tr>
    						<td>` + result.Description + `</td>
    						<td>` + countCubicle + `</td>
    						<td>0</td>
    						<td><span class="badge badge-success">Available</span></td>
    					   </tr>`;
  			})
  			document.getElementById("toiletData").innerHTML = output;
  		}
  });
}



window.setInterval(function(){  
    getSwitch1Level();
    getSwitch2Level();
    getSwitch3Level();
    getQueue();
    getToilets();
    
    window.setTimeout(function() {
    	var cubicleStatus = "" + switch1 + "" + switch2 + "" + switch3;
		var output = "<img src='img/toilet/" + cubicleStatus + ".png' height='500'>";
	  	if (document.getElementById("toggleSwitch")) {
	  		document.getElementById("toggleSwitch").innerHTML = output;
	  	}
	  	
	  	if (queue > 0) {
	  		var x = document.getElementById("femalered");
	  		var y = document.getElementById("femaleyellow");
	  		var z = document.getElementById("femalegreen");
	  		y.className = "hidden";
	  		x.className = "female-dynamic";
	  		z.className = "hidden";
	  	} else if (cubicleStatus === "111") {
	  		// if (queue) {
	  		// 	change logo to red	
	  		// } else {
	  		// 	change logo to yellow
	  		// }
	  		var x = document.getElementById("femalered");
	  		var y = document.getElementById("femaleyellow");
	  		var z = document.getElementById("femalegreen");
	  		y.className = "female-dynamic";
	  		x.className = "hidden";
	  		z.className = "hidden";
	  	} else {
	  		var x = document.getElementById("femalered");
	  		var y = document.getElementById("femaleyellow");
	  		var z = document.getElementById("femalegreen");
	  		z.className = "female-dynamic";
	  		y.className = "hidden";
	  		x.className = "hidden";
	  	}
	  	document.getElementById("queue").innerHTML = queue;
    }, 2000);
}, 1000);