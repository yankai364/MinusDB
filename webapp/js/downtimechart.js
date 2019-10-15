function getAirQualityLevelChartData(hours) {
    //bb82a4c9-4bcb-4757-81f6-831d119f55e8
	var arr = [];
	var now = new Date();
	var ts = now.setHours(now.getHours() - hours);
    return $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20ge%20'bb82a4c9-4bcb-4757-81f6-831d119f55e8'%20and%20timestamp%20ge%20'" + ts + "'&orderby=timestamp%20asc&skip=0&top=100",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    });
}

function getToiletPaperAvailabilityChartData(hours) {
	var arr = [];
	var now = new Date();
	var ts = now.setHours(now.getHours() - hours);
	return $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20ge%20'91ff28a0-02d7-40ea-8b66-49a208fddb8e'%20and%20timestamp%20ge%20'" + ts + "'&orderby=timestamp%20asc&skip=0&top=100",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    });
}

function getRubbishBinIsFullChartData(hours) {
	var arr = [];
	var now = new Date();
	var ts = now.setHours(now.getHours() - hours);
	return $.ajax({
    type: "GET",
	url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20ge%20'c1d0fa40-c3cd-4b1b-884c-df1f47707979'%20and%20timestamp%20ge%20'" + ts + "'&orderby=timestamp%20asc&skip=0&top=100",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    });
}

function getSoapLevelChartData(hours) {
    var arr = [];
    var now = new Date();
	var ts = now.setHours(now.getHours() - hours);
    return $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20ge%20'f72ab57e-a708-4d19-81ca-25ae772f7bf4'%20and%20timestamp%20ge%20'" + ts + "'&orderby=timestamp%20asc&skip=0&top=100",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    });
}

function getFloorWetnessChartData(hours) {
	//0a074ca5-fd47-4e0e-82d4-b719e2d1975f
	var arr = [];
	var now = new Date();
	var ts = now.setHours(now.getHours() - hours);
	return $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20ge%20'0a074ca5-fd47-4e0e-82d4-b719e2d1975f'%20and%20timestamp%20ge%20'" + ts + "'&orderby=timestamp%20asc&skip=0&top=100",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    });
}

function getOccupancyDataCubicle1(hours) {
	var arr = [];
	var now = new Date();
	var ts = now.setHours(now.getHours() - hours);
	return $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20ge%20'29827307-fa35-49e8-9374-dfe63a6d1893'%20and%20timestamp%20ge%20'" + ts + "'&orderby=timestamp%20asc&skip=0",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    });
}

function getOccupancyDataCubicle2(hours) {
	var arr = [];
	var now = new Date();
	var ts = now.setHours(now.getHours() - hours);
	return $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20ge%20'3d55fa4a-a8fe-4b52-9c63-c2b30aeabf36'%20and%20timestamp%20ge%20'" + ts + "'&orderby=timestamp%20asc&skip=0",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    });
}

function getOccupancyDataCubicle3(hours) {
	var arr = [];
	var now = new Date();
	var ts = now.setHours(now.getHours() - hours);
	return $.ajax({
    type: "GET",
    url: "https://6493976d-0b5e-4d5a-90c6-e3893adcc64a.us10.cp.iot.sap/iot/core/api/v1/devices/43/measures?filter=capabilityId%20ge%20'86bff464-5cb7-4c90-a8d3-b8ba7f18ab09'%20and%20timestamp%20ge%20'" + ts + "'&orderby=timestamp%20asc&skip=0",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("toilet3" + ":" + "toilet3T1")
	}
    });
}

function getJanitors(){
	$.ajax({
    type: "GET",
    url: "/xsodata_toilet3/toilet3/services/toilet3.xsodata/Janitor?$format=json",
    dataType: 'json',
    headers: {
    	"Authorization": "Basic " + btoa("TOILET3" + ":" + "Welcome5")
	}
    }).done(function(data) {
  		if (data) {
  			var output = "";
  			data.d.results.map((result) => {
    			output += `<tr>
                                <td class="text-center">
                                    <div class="avatar">
                                        <img class="img-avatar" src="` + result.Url + `" alt="admin@bootstrapmaster.com">
                                        <span class="avatar-status badge-success"></span>
                                    </div>
                                </td>
                                <td>
                                    <div><a href="index1.html" style="color:black">` + result.Name + `</a></div>
                                    <div class="small text-muted">
                                        <span>` + result.Role + `</span></div>
                                </td>
                                <td class="text-left">
                                    <div class="text-muted">Plaza Singapura</div>
                                </td>
                                <td>
                                    <div class="clearfix">
                                        <div class="float-left">
                                            <strong>` + result.Rating + `%</strong>
                                        </div>
                                        <div class="float-right">
                                            <small class="text-muted">Jun 11, 2015 - Nov 16, 2018</small>
                                        </div>
                                    </div>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: ` + result.Rating + `%"
                                            aria-valuenow="` + result.Rating + `" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <i class="fa fa-cc-mastercard" style="font-size:24px"></i>
                                    <strong>✔</strong>
                                </td>
                                <td>
                                    <div class="small text-muted">Last cleaned</div>
                                    <strong>1 hour ago</strong>
                                </td>
                            </tr>`;
  			})
  			document.getElementById("janitorData").innerHTML = output;
  		}
  });
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + " min " + (seconds < 10 ? '0' : '') + seconds + " sec";
}

getJanitors();

window.setInterval(async function() {
	var combinedArrIssues = [];
	
	if (document.getElementById("2hourly").className === "btn btn-outline-secondary active") {
		var daySoapArr = await getSoapLevelChartData(2);
		for(var i=0; i<daySoapArr.length-1; i++) {
  			var soapLevel = daySoapArr[i].measure.level;
  			var soapLevel2 = daySoapArr[i+1].measure.level;
  			var timestamp1 = daySoapArr[i].timestamp;
  			var timestamp2 = daySoapArr[i+1].timestamp;
  			if(i === daySoapArr.length-2 && soapLevel2 === "0") {
  				combinedArrIssues.push(['Low Soap Level', '', new Date(timestamp2), new Date()]);
  			}
  			else if(soapLevel === "0" && soapLevel2 === "1") {
  				combinedArrIssues.push(['Low Soap Level', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  			else if(soapLevel === "0" && soapLevel2 === "0") {
  				combinedArrIssues.push(['Low Soap Level', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  		}
  		
	    var dayRubbishArr = await getRubbishBinIsFullChartData(2);
	    for(var i=0; i<dayRubbishArr.length-1; i++) {
  			var rubbishLevel = dayRubbishArr[i].measure.RubbishLevel;
  			var rubbishLevel2 = dayRubbishArr[i+1].measure.RubbishLevel;
  			var timestamp1 = dayRubbishArr[i].timestamp;
  			var timestamp2 = dayRubbishArr[i+1].timestamp;
  			if(i === dayRubbishArr.length-2 && rubbishLevel2 === "0") {
  				combinedArrIssues.push(['Full Rubbish Bin', '', new Date(timestamp2), new Date()]);
  			}
  			else if(rubbishLevel === "0" && rubbishLevel2 === "1") {
  				combinedArrIssues.push([ 'Full Rubbish Bin', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  			else if(rubbishLevel === "0" && rubbishLevel2 === "0") {
  				combinedArrIssues.push(['Full Rubbish Bin', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  		}
  		
	    var dayToiletPaperArr = await getToiletPaperAvailabilityChartData(2);
	    for(var i=0; i<dayToiletPaperArr.length-1; i++) {
  			var toiletPaperAvailability = dayToiletPaperArr[i].measure.Availability;
  			var toiletPaperAvailability2 = dayToiletPaperArr[i+1].measure.Availability;
  			var timestamp1 = dayToiletPaperArr[i].timestamp;
  			var timestamp2 = dayToiletPaperArr[i+1].timestamp;
  			if(i === dayToiletPaperArr.length-2 && toiletPaperAvailability2 === "1") {
  				combinedArrIssues.push(['Low Toilet Paper', '', new Date(timestamp2), new Date()]);
  			}
  			else if(toiletPaperAvailability === "1" && toiletPaperAvailability2 === "0") {
  				combinedArrIssues.push([ 'Low Toilet Paper', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  			else if(toiletPaperAvailability === "1" && toiletPaperAvailability2 === "1") {
  				combinedArrIssues.push(['Low Toilet Paper', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  		}
  		
	    var dayAirQualityArr = await getAirQualityLevelChartData(2);
	    for(var i=0; i<dayAirQualityArr.length-1; i++) {
  			var airQuality1 = dayAirQualityArr[i].measure.QualityLevel;
  			var airQuality2 = dayAirQualityArr[i+1].measure.QualityLevel;
  			var timestamp1 = dayAirQualityArr[i].timestamp;
  			var timestamp2 = dayAirQualityArr[i+1].timestamp;
  			if (i === dayAirQualityArr.length-2 && airQuality2 === "0") {
  				combinedArrIssues.push(['Foul Smell', '', new Date(timestamp2), new Date()]);
  			}
  			else if(airQuality1 === "0" && airQuality2 === "1") {
  				combinedArrIssues.push([ 'Foul Smell', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  			else if(airQuality1 === "0" && airQuality2 === "0") {
  				combinedArrIssues.push(['Foul Smell', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  		}
  			
	    var dayWetFloorArr = await getFloorWetnessChartData(2);
	    for(var i=0; i<dayWetFloorArr.length-1; i++) {
  			var floorWetness = dayWetFloorArr[i].measure.WaterLevel;
  			var floorWetness2 = dayWetFloorArr[i+1].measure.WaterLevel;
  			var timestamp1 = dayWetFloorArr[i].timestamp;
  			var timestamp2 = dayWetFloorArr[i+1].timestamp;
  			if(i === dayWetFloorArr.length-2 && floorWetness2 === "1") {
  				combinedArrIssues.push(['Wet Floor', '', new Date(timestamp2), new Date()]);
  			}
  			else if(floorWetness === "1" && floorWetness2 === "0") {
  				combinedArrIssues.push([ 'Wet Floor', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  			else if(floorWetness === "1" && floorWetness2 === "1") {
  				combinedArrIssues.push(['Wet Floor', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  		}
  		
  		var cubicle1Data = await getOccupancyDataCubicle1(2);
		for(var i=0; i<cubicle1Data.length-1; i++) {
  			var value1 = cubicle1Data[i].measure.Switch;
  			var value2 = cubicle1Data[i+1].measure.Switch;
  			var timestamp1 = cubicle1Data[i].timestamp;
  			var timestamp2 = cubicle1Data[i+1].timestamp;
  			if(value1 === "0" && value2 === "1") {
  				combinedArrIssues.push([ 'Cubicle 1', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  		}
  		
	    var cubicle2Data = await getOccupancyDataCubicle2(2);
	    for(var i=0; i<cubicle2Data.length-1; i++) {
  			var value1 = cubicle2Data[i].measure.Switch2;
  			var value2 = cubicle2Data[i+1].measure.Switch2;
  			var timestamp1 = cubicle2Data[i].timestamp;
  			var timestamp2 = cubicle2Data[i+1].timestamp;
  			if(value1 === "0" && value2 === "1") {
  				combinedArrIssues.push([ 'Cubicle 2', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  		}
  		
	    var cubicle3Data = await getOccupancyDataCubicle3(2);
	    for(var i=0; i<cubicle3Data.length-1; i++) {
  			var value1 = cubicle3Data[i].measure.Switch3;
  			var value2 = cubicle3Data[i+1].measure.Switch3;
  			var timestamp1 = cubicle3Data[i].timestamp;
  			var timestamp2 = cubicle3Data[i+1].timestamp;
  			if(value1 === "0" && value2 === "1") {
  				combinedArrIssues.push([ 'Cubicle 3', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  		}
  		
  		var cubicle1Count = 0;
		var cubicle2Count = 0;
		var cubicle3Count = 0;
		var soapCount = 0;
		var rubbishCount = 0;
		var paperCount = 0;
		var smellCount = 0;
		var floorCount = 0;
		
		var soapTotalDowntime = 0;
		var rubbishTotalDowntime = 0;
		var paperTotalDowntime = 0;
		var smellTotalDowntime = 0;
		var floorTotalDowntime = 0;
		
		combinedArrIssues.map((issue) => {
			switch(issue[0]) {
				case "Cubicle 1":
					cubicle1Count++;
					break;
				case "Cubicle 2":
					cubicle2Count++;
					break;
				case "Cubicle 3":
					cubicle3Count++;
					break;
				case "Low Soap Level":
					soapCount++;
					soapTotalDowntime += (issue[3] - issue[2]);
					break;
				case "Full Rubbish Bin":
					rubbishCount++;
					rubbishTotalDowntime += (issue[3] - issue[2]);
					break;
				case "Low Toilet Paper":
					paperCount++;
					paperTotalDowntime += (issue[3] - issue[2]);
					break;
				case "Foul Smell":
					smellCount++;
					smellTotalDowntime += (issue[3] - issue[2]);
					break;
				case "Wet Floor":
					floorCount++;
					floorTotalDowntime += (issue[3] - issue[2]);
					break;
			}
		})
		
		var soapAverageResponseDuration = millisToMinutesAndSeconds(soapTotalDowntime/soapCount);
		var rubbishAverageResponseDuration = millisToMinutesAndSeconds(rubbishTotalDowntime/rubbishCount);
		var paperAverageResponseDuration = millisToMinutesAndSeconds(paperTotalDowntime/paperCount);
		var smellAverageResponseDuration = millisToMinutesAndSeconds(smellTotalDowntime/smellCount);
		var floorAverageResponseDuration = millisToMinutesAndSeconds(floorTotalDowntime/floorCount);
		var overallAverageResponseDuration = millisToMinutesAndSeconds((soapTotalDowntime/soapCount + rubbishTotalDowntime/rubbishCount + paperTotalDowntime/paperCount + smellTotalDowntime/smellCount + floorTotalDowntime/floorCount)/5)
		
		var soapAverageResponseDurationMs = soapTotalDowntime/soapCount;
		var rubbishAverageResponseDurationMs = rubbishTotalDowntime/rubbishCount;
		var paperAverageResponseDurationMs = paperTotalDowntime/paperCount;
		var smellAverageResponseDurationMs = smellTotalDowntime/smellCount;
		var floorAverageResponseDurationMs = floorTotalDowntime/floorCount;
		var overallAverageResponseDurationMs = (soapTotalDowntime/soapCount + rubbishTotalDowntime/rubbishCount + paperTotalDowntime/paperCount + smellTotalDowntime/smellCount + floorTotalDowntime/floorCount)/5;
  		
  		if (combinedArrIssues.length !== 0) {
  			google.charts.load("current", {packages:["timeline"]});
			google.charts.setOnLoadCallback(drawChartDay);
			function drawChartDay() {
			  	var container = document.getElementById('2hourchart');
				var chart2 = new google.visualization.Timeline(container);
				var dataTable2 = new google.visualization.DataTable();
				dataTable2.addColumn({ type: 'string', id: 'Position' });
				dataTable2.addColumn({ type: 'string', id: 'Name' });
				dataTable2.addColumn({ type: 'date', id: 'Start' });
				dataTable2.addColumn({ type: 'date', id: 'End' });
			    dataTable2.addRows(combinedArrIssues);
				
		    	chart2.draw(dataTable2);
			}
  		}
  		
  		google.charts.load('current', {'packages':['treemap']});
    		google.charts.setOnLoadCallback(drawChart);
	    	function drawChart() {
	      		var container = document.getElementById('treemap_chart2');
	        	var averageIssueCount = (soapCount + rubbishCount + paperCount + smellCount + floorCount) / 5;
		        var data = google.visualization.arrayToDataTable([
		          ['Issue', 'Parent', 'Number of Issues', 'Issue increase/decrease (color)'],
		          ['Total Issues', null, 0, 0],
		          ['Low Soap','Total Issues', soapAverageResponseDurationMs, soapAverageResponseDurationMs - overallAverageResponseDurationMs],
		          ['Full Rubbish Bin','Total Issues', rubbishAverageResponseDurationMs, rubbishAverageResponseDurationMs - overallAverageResponseDurationMs],
		          ['Low Toilet Paper', 'Total Issues', paperAverageResponseDurationMs, paperAverageResponseDurationMs - overallAverageResponseDurationMs],
		          ['Foul Smell', 'Total Issues', smellAverageResponseDurationMs, smellAverageResponseDurationMs - overallAverageResponseDurationMs],
		          ['Wet Floor', 'Total Issues', floorAverageResponseDurationMs, floorAverageResponseDurationMs - overallAverageResponseDurationMs],
		          //['Cubicle 1', 'Total Usages', cubicle1Count, 0],
		          //['Cubicle 2', 'Total Usages', cubicle2Count, 0],
		          //['Cubicle 3', 'Total Usages', cubicle3Count, 0]
		        ]);
		        var tree = new google.visualization.TreeMap(document.getElementById('treemap_chart2'));
		        var options = {
		          minColor: '#009688',
			      midColor: '#f7f7f7',
			      maxColor: '#ee8100',
		          headerHeight: 25,
		          fontColor: 'black',
		          showScale: true,
		          showTooltips: true,
			      generateTooltip: showFullTooltip,
		          maxDepth: 2,
		          fontSize: 15,
		          title: "Status Summary",
		        };
		        tree.draw(data, options);
		        function showFullTooltip(row, size, value) {
				    return '<p>HIHIHI</p>';
				  }
	      }
	} else { 
		var daySoapArr = await getSoapLevelChartData(24);
		for(var i=0; i<daySoapArr.length-1; i++) {
  			var soapLevel = daySoapArr[i].measure.level;
  			var soapLevel2 = daySoapArr[i+1].measure.level;
  			var timestamp1 = daySoapArr[i].timestamp;
  			var timestamp2 = daySoapArr[i+1].timestamp;
  			if(i === daySoapArr.length-2 && soapLevel2 === "0") {
  				combinedArrIssues.push(['Low Soap Level', '', new Date(timestamp2), new Date()]);
  			}
  			else if(soapLevel === "0" && soapLevel2 === "1") {
  				combinedArrIssues.push(['Low Soap Level', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  			else if(soapLevel === "0" && soapLevel2 === "0") {
  				combinedArrIssues.push(['Low Soap Level', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  		}
  		
	    var dayRubbishArr = await getRubbishBinIsFullChartData(24);
	    for(var i=0; i<dayRubbishArr.length-1; i++) {
  			var rubbishLevel = dayRubbishArr[i].measure.RubbishLevel;
  			var rubbishLevel2 = dayRubbishArr[i+1].measure.RubbishLevel;
  			var timestamp1 = dayRubbishArr[i].timestamp;
  			var timestamp2 = dayRubbishArr[i+1].timestamp;
  			if(i === dayRubbishArr.length-2 && rubbishLevel2 === "0") {
  				combinedArrIssues.push(['Full Rubbish Bin', '', new Date(timestamp2), new Date()]);
  			}
  			else if(rubbishLevel === "0" && rubbishLevel2 === "1") {
  				combinedArrIssues.push([ 'Full Rubbish Bin', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  			else if(rubbishLevel === "0" && rubbishLevel2 === "0") {
  				combinedArrIssues.push(['Full Rubbish Bin', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  		}
  		
	    var dayToiletPaperArr = await getToiletPaperAvailabilityChartData(24);
	    for(var i=0; i<dayToiletPaperArr.length-1; i++) {
  			var toiletPaperAvailability = dayToiletPaperArr[i].measure.Availability;
  			var toiletPaperAvailability2 = dayToiletPaperArr[i+1].measure.Availability;
  			var timestamp1 = dayToiletPaperArr[i].timestamp;
  			var timestamp2 = dayToiletPaperArr[i+1].timestamp;
  			if(i === dayToiletPaperArr.length-2 && toiletPaperAvailability2 === "1") {
  				combinedArrIssues.push(['Low Toilet Paper', '', new Date(timestamp2), new Date()]);
  			}
  			else if(toiletPaperAvailability === "1" && toiletPaperAvailability2 === "0") {
  				combinedArrIssues.push([ 'Low Toilet Paper', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  			else if(toiletPaperAvailability === "1" && toiletPaperAvailability2 === "1") {
  				combinedArrIssues.push(['Low Toilet Paper', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  		}
  		
	    var dayAirQualityArr = await getAirQualityLevelChartData(24);
	    for(var i=0; i<dayAirQualityArr.length-1; i++) {
  			var airQuality1 = dayAirQualityArr[i].measure.QualityLevel;
  			var airQuality2 = dayAirQualityArr[i+1].measure.QualityLevel;
  			var timestamp1 = dayAirQualityArr[i].timestamp;
  			var timestamp2 = dayAirQualityArr[i+1].timestamp;
  			if (i === dayAirQualityArr.length-2 && airQuality2 === "0") {
  				combinedArrIssues.push(['Foul Smell', '', new Date(timestamp2), new Date()]);
  			}
  			else if(airQuality1 === "0" && airQuality2 === "1") {
  				combinedArrIssues.push([ 'Foul Smell', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  			else if(airQuality1 === "0" && airQuality2 === "0") {
  				combinedArrIssues.push(['Foul Smell', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  		}
  			
	    var dayWetFloorArr = await getFloorWetnessChartData(24);
	    for(var i=0; i<dayWetFloorArr.length-1; i++) {
  			var floorWetness = dayWetFloorArr[i].measure.WaterLevel;
  			var floorWetness2 = dayWetFloorArr[i+1].measure.WaterLevel;
  			var timestamp1 = dayWetFloorArr[i].timestamp;
  			var timestamp2 = dayWetFloorArr[i+1].timestamp;
  			if(i === dayWetFloorArr.length-2 && floorWetness2 === "1") {
  				combinedArrIssues.push(['Wet Floor', '', new Date(timestamp2), new Date()]);
  			}
  			else if(floorWetness === "1" && floorWetness2 === "0") {
  				combinedArrIssues.push([ 'Wet Floor', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  			else if(floorWetness === "1" && floorWetness2 === "1") {
  				combinedArrIssues.push(['Wet Floor', '', new Date(timestamp1), new Date(timestamp2)]);
  			}
  		}
  		
  		var cubicle1Data = await getOccupancyDataCubicle1(24);
		for(var i=0; i<cubicle1Data.length-1; i++) {
  			var value1 = cubicle1Data[i].measure.Switch;
  			var value2 = cubicle1Data[i+1].measure.Switch;
  			var timestamp1 = cubicle1Data[i].timestamp;
  			var timestamp2 = cubicle1Data[i+1].timestamp;
  			if(value1 === "0" && value2 === "1") {
  				combinedArrIssues.push([ 'Cubicle 1', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  		}
  		
	    var cubicle2Data = await getOccupancyDataCubicle2(24);
	    for(var i=0; i<cubicle2Data.length-1; i++) {
  			var value1 = cubicle2Data[i].measure.Switch2;
  			var value2 = cubicle2Data[i+1].measure.Switch2;
  			var timestamp1 = cubicle2Data[i].timestamp;
  			var timestamp2 = cubicle2Data[i+1].timestamp;
  			if(value1 === "0" && value2 === "1") {
  				combinedArrIssues.push([ 'Cubicle 2', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  		}
  		
	    var cubicle3Data = await getOccupancyDataCubicle3(24);
	    for(var i=0; i<cubicle3Data.length-1; i++) {
  			var value1 = cubicle3Data[i].measure.Switch3;
  			var value2 = cubicle3Data[i+1].measure.Switch3;
  			var timestamp1 = cubicle3Data[i].timestamp;
  			var timestamp2 = cubicle3Data[i+1].timestamp;
  			if(value1 === "0" && value2 === "1") {
  				combinedArrIssues.push([ 'Cubicle 3', '', new Date(timestamp1), new Date(timestamp2) ]);
  			}
  		}
  		
  		var cubicle1Count = 0;
		var cubicle2Count = 0;
		var cubicle3Count = 0;
		var soapCount = 0;
		var rubbishCount = 0;
		var paperCount = 0;
		var smellCount = 0;
		var floorCount = 0;
		
		var soapTotalDowntime = 0;
		var rubbishTotalDowntime = 0;
		var paperTotalDowntime = 0;
		var smellTotalDowntime = 0;
		var floorTotalDowntime = 0;
		
		combinedArrIssues.map((issue) => {
			switch(issue[0]) {
				case "Cubicle 1":
					cubicle1Count++;
					break;
				case "Cubicle 2":
					cubicle2Count++;
					break;
				case "Cubicle 3":
					cubicle3Count++;
					break;
				case "Low Soap Level":
					soapCount++;
					soapTotalDowntime += (issue[3] - issue[2]);
					break;
				case "Full Rubbish Bin":
					rubbishCount++;
					rubbishTotalDowntime += (issue[3] - issue[2]);
					break;
				case "Low Toilet Paper":
					paperCount++;
					paperTotalDowntime += (issue[3] - issue[2]);
					break;
				case "Foul Smell":
					smellCount++;
					smellTotalDowntime += (issue[3] - issue[2]);
					break;
				case "Wet Floor":
					floorCount++;
					floorTotalDowntime += (issue[3] - issue[2]);
					break;
			}
		})
		
		var soapAverageResponseDuration = millisToMinutesAndSeconds(soapTotalDowntime/soapCount);
		var rubbishAverageResponseDuration = millisToMinutesAndSeconds(rubbishTotalDowntime/rubbishCount);
		var paperAverageResponseDuration = millisToMinutesAndSeconds(paperTotalDowntime/paperCount);
		var smellAverageResponseDuration = millisToMinutesAndSeconds(smellTotalDowntime/smellCount);
		var floorAverageResponseDuration = millisToMinutesAndSeconds(floorTotalDowntime/floorCount);
		var overallAverageResponseDuration = millisToMinutesAndSeconds((soapTotalDowntime/soapCount + rubbishTotalDowntime/rubbishCount + paperTotalDowntime/paperCount + smellTotalDowntime/smellCount + floorTotalDowntime/floorCount)/5)
		
		var soapAverageResponseDurationMs = soapTotalDowntime/soapCount;
		var rubbishAverageResponseDurationMs = rubbishTotalDowntime/rubbishCount;
		var paperAverageResponseDurationMs = paperTotalDowntime/paperCount;
		var smellAverageResponseDurationMs = smellTotalDowntime/smellCount;
		var floorAverageResponseDurationMs = floorTotalDowntime/floorCount;
		var overallAverageResponseDurationMs = (soapTotalDowntime/soapCount + rubbishTotalDowntime/rubbishCount + paperTotalDowntime/paperCount + smellTotalDowntime/smellCount + floorTotalDowntime/floorCount)/5;
	
  		
		if (combinedArrIssues.length !== 0) {
			google.charts.load("current", {packages:["timeline"]});
			google.charts.setOnLoadCallback(drawChartDay);
			function drawChartDay() {
			  	var container = document.getElementById('24hourchart');
				var chart2 = new google.visualization.Timeline(container);
				var dataTable2 = new google.visualization.DataTable();
				dataTable2.addColumn({ type: 'string', id: 'Position' });
				dataTable2.addColumn({ type: 'string', id: 'Name' });
				dataTable2.addColumn({ type: 'date', id: 'Start' });
				dataTable2.addColumn({ type: 'date', id: 'End' });
			    dataTable2.addRows(combinedArrIssues);
				
				var options ={
					colors: ['#4285f4', '#db4437', '#f4b400', '#3e4596', '#ab47bc', '#2f353a', '#2f353a', '#2f353a']
					//colors: ['#fece2e', '#ff9d02', '#ff7601', '#e24800', '#cc2103', '#2f353a', '#2f353a', '#2f353a']
					//colors: ['#cc2103', '#e24800', '#ff7601', '#ff9d02', '#fece2e', '#2f353a', '#2f353a', '#2f353a']
				}
		    	chart2.draw(dataTable2, options);
			}
			
			google.charts.load('current', {'packages':['treemap']});
    		google.charts.setOnLoadCallback(drawChart);
	    	function drawChart() {
	      		var container = document.getElementById('treemap_chart24');
	        	var averageIssueCount = (soapCount + rubbishCount + paperCount + smellCount + floorCount) / 5;
		        var data = google.visualization.arrayToDataTable([
		          ['Issue', 'Parent', 'Number of Issues', 'Issue increase/decrease (color)'],
		          ['Total Issues', null, 0, 0],
		          ['Low Soap','Total Issues', soapAverageResponseDurationMs, soapAverageResponseDurationMs - overallAverageResponseDurationMs],
		          ['Full Rubbish Bin','Total Issues', rubbishAverageResponseDurationMs, rubbishAverageResponseDurationMs - overallAverageResponseDurationMs],
		          ['Low Toilet Paper', 'Total Issues', paperAverageResponseDurationMs, paperAverageResponseDurationMs - overallAverageResponseDurationMs],
		          ['Foul Smell', 'Total Issues', smellAverageResponseDurationMs, smellAverageResponseDurationMs - overallAverageResponseDurationMs],
		          ['Wet Floor', 'Total Issues', floorAverageResponseDurationMs, floorAverageResponseDurationMs - overallAverageResponseDurationMs],
		          //['Cubicle 1', 'Total Usages', cubicle1Count, 0],
		          //['Cubicle 2', 'Total Usages', cubicle2Count, 0],
		          //['Cubicle 3', 'Total Usages', cubicle3Count, 0]
		        ]);
		        var tree = new google.visualization.TreeMap(document.getElementById('treemap_chart24'));
		        var options = {
		          minColor: '#66ff99',
			      midColor: '#f7f7f7',
			      maxColor: '#ff5050',
		          headerHeight: 25,
		          fontColor: 'black',
		          showScale: true,
		          showTooltips: true,
			      generateTooltip: showFullTooltip,
		          maxDepth: 2,
		          fontSize: 15,
		          title: "Status Summary",
		        };
		        tree.draw(data, options);
		        function showFullTooltip(row, size, value) {
				    return '<p>HIHIHI</p>';
				  }
	      }
		}
	}
	
	document.getElementById("cubicle1Count2").innerHTML = cubicle1Count + " users";
	document.getElementById("cubicle2Count2").innerHTML = cubicle2Count + " users";
	document.getElementById("cubicle3Count2").innerHTML = cubicle3Count + " users";
	document.getElementById("cubicleAllCount2").innerHTML = cubicle1Count + cubicle2Count + cubicle3Count + " users";
	
	document.getElementById("soapCount2").innerHTML = soapCount + " issues";
	document.getElementById("rubbishCount2").innerHTML = rubbishCount + " issues";
	document.getElementById("paperCount2").innerHTML = paperCount + " issues";
	document.getElementById("smellCount2").innerHTML = smellCount + " issues";
	document.getElementById("floorCount2").innerHTML = floorCount + " issues";
	document.getElementById("totalIssueCount2").innerHTML = soapCount + rubbishCount + paperCount + smellCount + floorCount + " issues";
    
    document.getElementById("soapAverageResponseDuration2").innerHTML = soapAverageResponseDuration;
	document.getElementById("rubbishAverageResponseDuration2").innerHTML = rubbishAverageResponseDuration;
	document.getElementById("paperAverageResponseDuration2").innerHTML = paperAverageResponseDuration;
	document.getElementById("smellAverageResponseDuration2").innerHTML = smellAverageResponseDuration;
	document.getElementById("floorAverageResponseDuration2").innerHTML = floorAverageResponseDuration;
	document.getElementById("overallAverageResponseDuration2").innerHTML = overallAverageResponseDuration;
	
	document.getElementById("cubicle1Count24").innerHTML = cubicle1Count + " users";
	document.getElementById("cubicle2Count24").innerHTML = cubicle2Count + " users";
	document.getElementById("cubicle3Count24").innerHTML = cubicle3Count + " users";
	document.getElementById("cubicleAllCount24").innerHTML = cubicle1Count + cubicle2Count + cubicle3Count + " users";
	
	document.getElementById("soapCount24").innerHTML = soapCount + " issues";
	document.getElementById("rubbishCount24").innerHTML = rubbishCount + " issues";
	document.getElementById("paperCount24").innerHTML = paperCount + " issues";
	document.getElementById("smellCount24").innerHTML = smellCount + " issues";
	document.getElementById("floorCount24").innerHTML = floorCount + " issues";
	document.getElementById("totalIssueCount24").innerHTML = soapCount + rubbishCount + paperCount + smellCount + floorCount + " issues";
    
    document.getElementById("soapAverageResponseDuration24").innerHTML = soapAverageResponseDuration;
	document.getElementById("rubbishAverageResponseDuration24").innerHTML = rubbishAverageResponseDuration;
	document.getElementById("paperAverageResponseDuration24").innerHTML = paperAverageResponseDuration;
	document.getElementById("smellAverageResponseDuration24").innerHTML = smellAverageResponseDuration;
	document.getElementById("floorAverageResponseDuration24").innerHTML = floorAverageResponseDuration;
	document.getElementById("overallAverageResponseDuration24").innerHTML = overallAverageResponseDuration;
}, 3000)