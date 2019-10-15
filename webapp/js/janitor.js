var soapLevel = "";
var rubbishLevel = "";
var toiletPaperAvailability = "";
var airQuality = "";
var floorWetness = "";

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var day = new Array();
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";

var currentDate = new Date();

function getAirQualityLevel() {
    //bb82a4c9-4bcb-4757-81f6-831d119f55e8
    var hasIssue = 0;
    $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20le%20'bb82a4c9-4bcb-4757-81f6-831d119f55e8'&orderby=timestamp%20desc&top=10",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    }).done(function(data) {
  		if (data) {
  			//get average air quality
  			airQuality = data[0].measure.QualityLevel; 
  			var timestamp = data[data.length-1].timestamp;
  			var date = new Date(timestamp);
  			var dayDay = date.getDay();
  			var dateDate = date.getDate();
  			var dateMonth = date.getMonth();
  			var dateYear = date.getFullYear();
  			var dateHour = date.getHours();
  			var dateMin = date.getMinutes();
  			var newDateMin = (dateMin < 10 ? "0" : "") + dateMin;
  			
  			var difference = (currentDate - date)/ 1000;
  			var status = "Low Priority";
  			var badge = "secondary";
  			if (difference >= 20){
  				status = "Urgent";
  				badge = "danger";
  			} else if (difference >= 10){
  				status = "High Priority";
  				badge = "warning";
  			}
  			var output = "";
  			var icon = "";
  			if (airQuality === "0") {
  				output = "<td>Bad Odour</td><td><img class='navbar-brand-full' src='img/toilet/issues/odour.png' height='35'></td><td>" + day[dayDay] + ", " + dateDate.toString() + " " + month[dateMonth] + " " + dateYear.toString() + " " + dateHour + ":" + newDateMin + " HRS" + "</td><td>Start washing the toilet!</td><td><span class='badge badge-" + badge + "'>" + status + "</span></td>";
  				icon = "<img class='navbar-brand-full' src='img/toilet/issues/odour.png' height='40'>";
  				hasIssue = 1;
  			}
  			document.getElementById("airQualityLevel").innerHTML = output;
		  	document.getElementById("odour").innerHTML = icon;
  		}
  		return hasIssue;
  });
}

function getToiletPaperAvailability() {
	var hasIssue = 0;
	$.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20le%20'91ff28a0-02d7-40ea-8b66-49a208fddb8e'&orderby=timestamp%20desc&top=1",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    }).done(function(data) {
  		if (data) {
  			toiletPaperAvailability = data[0].measure.Availability;
  			var timestamp = data[0].timestamp;
  			var date = new Date(timestamp);
  			var dayDay = date.getDay();
  			var dateDate = date.getDate();
  			var dateMonth = date.getMonth();
  			var dateYear = date.getFullYear();
  			var dateHour = date.getHours();
  			var dateMin = date.getMinutes();
  			var newDateMin = (dateMin < 10 ? "0" : "") + dateMin;
  			
  			var difference = (currentDate - date)/ 1000;
  			var status = "Low Priority";
  			var badge = "secondary";
  			if (difference >= 20){
  				status = "Urgent";
  				badge = "danger";
  			} else if (difference >= 10){
  				status = "High Priority";
  				badge = "warning";
  			}
  			var output = "";
  			var icon = "";
  			if (toiletPaperAvailability === "1") {
  				output = "<td>Low Toilet Paper (Cubicle 2)</td><td><img class='navbar-brand-full' src='img/toilet/issues/toiletpaper.png' height='35'></td><td>" + day[dayDay] + ", " + dateDate.toString() + " " + month[dateMonth] + " " + dateYear.toString() + " " + dateHour + ":" + newDateMin + " HRS" + "</td><td>Replenish Toilet Paper</td><td><span class='badge badge-" + badge + "'>" + status + "</span></td>";
  				icon = "<img class='navbar-brand-full' src='img/toilet/issues/toiletpaper.png' height='40'>";
  				hasIssue = 1;
  			}
  			document.getElementById("toiletPaperLevel").innerHTML = output;
		  	document.getElementById("toiletPaper").innerHTML = icon;
  		}
  		return hasIssue;
  });
}

function getRubbishBinIsFull() {
	var hasIssue = 0;
	$.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20le%20'c1d0fa40-c3cd-4b1b-884c-df1f47707979'&orderby=timestamp%20desc&top=1",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    }).done(function(data) {
  		if (data) {
  			rubbishLevel = data[0].measure.RubbishLevel;
  			var timestamp = data[0].timestamp;
  			var date = new Date(timestamp);
  			var dayDay = date.getDay();
  			var dateDate = date.getDate();
  			var dateMonth = date.getMonth();
  			var dateYear = date.getFullYear();
  			var dateHour = date.getHours();
  			var dateMin = date.getMinutes();
  			var newDateMin = (dateMin < 10 ? "0" : "") + dateMin
  			
  			var difference = (currentDate - date)/ 1000;
  			var status = "Low Priority";
  			var badge = "secondary";
  			if (difference >= 20){
  				status = "Urgent";
  				badge = "danger";
  			} else if (difference >= 10){
  				status = "High Priority";
  				badge = "warning";
  			}
  			var output = "";
  			var icon = "";
  			if (rubbishLevel === "0") {
  				output = "<td>Rubbish bin is full</td><td><img class='navbar-brand-full' src='img/toilet/issues/dustbin.png' height='35'></td><td>" + day[dayDay] + ", " + dateDate.toString() + " " + month[dateMonth] + " " + dateYear.toString() + " " + dateHour + ":" + newDateMin + " HRS" + "</td><td>Clear the rubbish bin</td><td><span class='badge badge-" + badge + "'>" + status + "</span></td>";
  				icon = "<img class='navbar-brand-full' src='img/toilet/issues/dustbin.png' height='40'>";
  				hasIssue = 1;
  			}
  			document.getElementById("rubbishLevel").innerHTML = output;
		  	document.getElementById("rubbishBin").innerHTML = icon;
  		}
  		return hasIssue;
  });
}

function getSoapLevel() {
    var hasIssue = 0;
    $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20le%20'f72ab57e-a708-4d19-81ca-25ae772f7bf4'&orderby=timestamp%20desc&top=1",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    }).done(function(data) {
  		if (data) {
  			soapLevel = data[0].measure.level;
  			var timestamp = data[0].timestamp;
  			var date = new Date(timestamp);
  			var dayDay = date.getDay();
  			var dateDate = date.getDate();
  			var dateMonth = date.getMonth();
  			var dateYear = date.getFullYear();
  			var dateHour = date.getHours();
  			var dateMin = date.getMinutes();
  			var newDateMin = (dateMin < 10 ? "0" : "") + dateMin;
  			
  			var difference = (currentDate - date)/ 1000;
  			var status = "Low Priority";
  			var badge = "secondary";
  			if (difference >= 20){
  				status = "Urgent";
  				badge = "danger";
  			} else if (difference >= 10){
  				status = "High Priority";
  				badge = "warning";
  			}
  			var output = "";
  			var icon = "";
  			if (soapLevel === "0") {
  				output = "<td>Low Soap Level (Sink 1)</td><td><img class='navbar-brand-full' src='img/toilet/issues/soap.png' height='35'></td><td>" + day[dayDay] + ", " + dateDate.toString() + " " + month[dateMonth] + " " + dateYear.toString() + " " + dateHour + ":" + newDateMin + " HRS" + "</td><td>Replenish Soap</td><td><span class='badge badge-" + badge + "'>" + status + "</span></td>";
  				icon = "<img class='navbar-brand-full' src='img/toilet/issues/soap.png' height='40'>";
  				hasIssue = 1;
  			}
  			document.getElementById("soapLevel").innerHTML = output;
		  	document.getElementById("soap").innerHTML = icon;
  		}
  		return hasIssue;
  });
}

function getFloorWetness() {
	//0a074ca5-fd47-4e0e-82d4-b719e2d1975f
	var hasIssue = 0;
	$.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20le%20'0a074ca5-fd47-4e0e-82d4-b719e2d1975f'&orderby=timestamp%20desc&top=10",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    }).done(function(data) {
  		if (data) {
  			//get average floor wetness
  			floorWetness = data[0].measure.WaterLevel;
  			var timestamp = data[data.length-1].timestamp;
  			
  			var difference = (currentDate - date)/ 1000;
  			var status = "Low Priority";
  			var badge = "secondary";
  			if (difference >= 20){
  				status = "Urgent";
  				badge = "danger";
  			} else if (difference >= 10){
  				status = "High Priority";
  				badge = "warning";
  			}
  			var date = new Date(timestamp);
  			var dayDay = date.getDay();
  			var dateDate = date.getDate();
  			var dateMonth = date.getMonth();
  			var dateYear = date.getFullYear();
  			var dateHour = date.getHours();
  			var dateMin = date.getMinutes();
  			var newDateMin = (dateMin < 10 ? "0" : "") + dateMin;
  			var output = "";
  			var icon = "";
  			if (floorWetness === "1") {
  				output = "<td>Wet Floor</td><td><img class='navbar-brand-full' src='img/toilet/issues/wetfloor.png' height='35'></td><td>" + day[dayDay] + ", " + dateDate.toString() + " " + month[dateMonth] + " " + dateYear.toString() + " " + dateHour + ":" + newDateMin + " HRS"  + "</td><td>Clean the floor and indicate sign</td><td><span class='badge badge-" + badge + "'>" + status + "</span></td>";
  				icon = "<img class='navbar-brand-full' src='img/toilet/issues/wetfloor.png' height='40'>";
  				hasIssue = 1;
  			}
  			document.getElementById("floorWetnessLevel").innerHTML = output;
		  	document.getElementById("wetFloor").innerHTML = icon;
  		}
  		return hasIssue;
  });
}

window.setInterval(function(){  
    getSoapLevel();
    getRubbishBinIsFull();
    getToiletPaperAvailability();
    getAirQualityLevel();
    getFloorWetness();
    
    window.setTimeout(function() {
	  	var issues = "<img class='navbar-brand-full' src='img/toilet/cubicle.png' height='660'>";
	  	if (document.getElementById("toiletIssues")) {
	  		document.getElementById("toiletIssues").innerHTML = issues;
	  	}
	    
	    var issueCount = 0;
	    
	    if (airQuality === "0") {
	    	issueCount++;
	    }
	    if (rubbishLevel === "0") {
	    	issueCount++;
	    }
	    if (soapLevel === "0") {
	    	issueCount++;
	    }
	    issueCount += parseInt(toiletPaperAvailability) + parseInt(floorWetness);
	    if (document.getElementById("issueCount")) {
	    	if (issueCount < 2) {
	    	document.getElementById("issueCount").innerHTML = "<a class='btn btn-block btn-success' href='index2.html' role='button'>" + issueCount + "</a>";
		    }
		    else if (issueCount < 4) {
		    	document.getElementById("issueCount").innerHTML = "<a class='btn btn-block btn-warning' href='index2.html' role='button'>" + issueCount + "</a>";
		    }
		    else {
		    	document.getElementById("issueCount").innerHTML = "<a class='btn btn-block btn-danger' href='index2.html' role='button'>" + issueCount + "</a>";
		    }
	    }	
    }, 1000);
}, 1000);