var L1BoxingRing2Tier = 0;
var L3SocialKitchenTier = 0;
var L3DiscussionZoneTier = 0;
var threshold = 12;

function getL1BoxingRing() {
    $.ajax({
    type: "GET",
    url: "https://is439g4.firebaseio.com/noise_realtime.json?orderBy=%22location%22&equalTo=%22L1BoxingRing%22&limitToLast=3",
    dataType: 'json'
    }).done(function(data) {
  		if (data) {
  			var L1BoxingRingTier = 0;
  			for (var k in data){
			    if (typeof data[k] !== 'function') {
		    		if (data[k].noise < threshold) {
						L1BoxingRingTier = 0;
					}
					else {
						if (L1BoxingRingTier < 3) {
							L1BoxingRingTier++;
						}
						switch (L1BoxingRingTier) {
						 	case 0:
						 		document.getElementById("Lvl1_The_Arena_1").className = "tier1 l1_boxing_ring hidden";
						 		document.getElementById("Lvl1_The_Arena_2").className = "tier2 l1_boxing_ring hidden";
						 		document.getElementById("Lvl1_The_Arena_3").className = "tier3 l1_boxing_ring hidden";
						 		break;
						 	case 1:
						 		document.getElementById("Lvl1_The_Arena_1").className = "tier1 l1_boxing_ring";
						 		document.getElementById("Lvl1_The_Arena_2").className = "tier2 l1_boxing_ring hidden";
						 		document.getElementById("Lvl1_The_Arena_3").className = "tier3 l1_boxing_ring hidden";
						 		break;
						 	case 2:
						 		document.getElementById("Lvl1_The_Arena_1").className = "tier1 l1_boxing_ring hidden";
						 		document.getElementById("Lvl1_The_Arena_2").className = "tier2 l1_boxing_ring";
						 		document.getElementById("Lvl1_The_Arena_3").className = "tier3 l1_boxing_ring hidden";
						 		break;
						 	case 3:
						 		document.getElementById("Lvl1_The_Arena_1").className = "tier1 l1_boxing_ring hidden";
						 		document.getElementById("Lvl1_The_Arena_2").className = "tier2 l1_boxing_ring hidden";
						 		document.getElementById("Lvl1_The_Arena_3").className = "tier3 l1_boxing_ring";
						 		break;
						}
					}
			    }
			}
  		}
  });
}

function getL1BoxingRing2() {
    $.ajax({
    type: "GET",
    url: "https://is439g4.firebaseio.com/noise_realtime.json?orderBy=%22location%22&equalTo=%22L1BoxingRing2%22&limitToLast=3",
    dataType: 'json'
    }).done(function(data) {
  		if (data) {
  			for (var k in data){
			    if (typeof data[k] !== 'function') {
			         if (data[k].noise < threshold) {
			         	L1BoxingRing2Tier = 0;
			         }
			         else {
			         	if (L1BoxingRing2Tier < 3) {
			         		L1BoxingRing2Tier++;
			         	}
			         }
			    }
			}
  		}
  });
}

function getL3SocialKitchen() {
    $.ajax({
    type: "GET",
    url: "https://is439g4.firebaseio.com/noise_realtime.json?orderBy=%22location%22&equalTo=%22L3SocialKitchen%22&limitToLast=3",
    dataType: 'json'
    }).done(function(data) {
  		if (data) {
  			for (var k in data){
			    if (typeof data[k] !== 'function') {
			         if (data[k].noise < threshold) {
			         	L3SocialKitchenTier = 0;
			         }
			         else {
			         	if (L3SocialKitchenTier < 3) {
			         		L3SocialKitchenTier++;
			         	}
			         }
			    }
			}
  		}
  });
}

function getL3SocialKitchen2() {
    $.ajax({
    type: "GET",
    url: "https://is439g4.firebaseio.com/noise_realtime.json?orderBy=%22location%22&equalTo=%22L3SocialKitchen2%22&limitToLast=3",
    dataType: 'json'
    }).done(function(data) {
  		if (data) {
  			var L3SocialKitchen2Tier = 0;
  			var sortable = [];
			for (var k in data) {
				if (typeof data[k] !== 'function') {
			    	sortable.push(data[k]);
				}
			}
			sortable.sort(function(a, b) {
				if (a.timestamp < b.timestamp) {
					return -1;
				}
				if (a.timestamp > b.timestamp) {
					return 1;
				}
				if (a.timestamp === b.timestamp) {
					return 0;
				}
			});
  			
  			sortable.map((data) => {
  				if (data.noise < threshold) {
					L3SocialKitchen2Tier = 0;
				}
				else {
					if (L3SocialKitchen2Tier < 3) {
						L3SocialKitchen2Tier++;
					}
					switch (L3SocialKitchen2Tier) {
					 	case 0:
					 		document.getElementById("Lvl3_Social_Kitchen_1").className = "tier1 l3_social_kitchen2 hidden";
					 		document.getElementById("Lvl3_Social_Kitchen_2").className = "tier2 l3_social_kitchen2 hidden";
					 		document.getElementById("Lvl3_Social_Kitchen_3").className = "tier3 l3_social_kitchen2 hidden";
					 		break;
					 	case 1:
					 		document.getElementById("Lvl3_Social_Kitchen_1").className = "tier1 l3_social_kitchen2";
					 		document.getElementById("Lvl3_Social_Kitchen_2").className = "tier2 l3_social_kitchen2 hidden";
					 		document.getElementById("Lvl3_Social_Kitchen_3").className = "tier3 l3_social_kitchen2 hidden";
					 		break;
					 	case 2:
					 		document.getElementById("Lvl3_Social_Kitchen_1").className = "tier1 l3_social_kitchen2 hidden";
					 		document.getElementById("Lvl3_Social_Kitchen_2").className = "tier2 l3_social_kitchen2";
					 		document.getElementById("Lvl3_Social_Kitchen_3").className = "tier3 l3_social_kitchen2 hidden";
					 		break;
					 	case 3:
					 		document.getElementById("Lvl3_Social_Kitchen_1").className = "tier1 l3_social_kitchen2 hidden";
					 		document.getElementById("Lvl3_Social_Kitchen_2").className = "tier2 l3_social_kitchen2 hidden";
					 		document.getElementById("Lvl3_Social_Kitchen_3").className = "tier3 l3_social_kitchen2";
					 		break;
					}
				}
  			})
		    			

  		}
  });
}

function getL3DiscussionZone() {
    $.ajax({
    type: "GET",
    url: "https://is439g4.firebaseio.com/noise_realtime.json?orderBy=%22location%22&equalTo=%22L3DiscussionZone%22&limitToLast=3",
    dataType: 'json'
    }).done(function(data) {
  		if (data) {
  			var L3DiscussionZoneTier = 0;
  			for (var k in data){
			    if (typeof data[k] !== 'function') {
		    		if (data[k].noise < threshold) {
						L3DiscussionZoneTier = 0;
					}
					else {
						if (L3DiscussionZoneTier < 3) {
							L3DiscussionZoneTier++;
						}
						switch (L3DiscussionZoneTier) {
						 	case 0:
						 		document.getElementById("Lvl3_Discussion_Room_1").className = "tier1 l3_discussion_zone hidden";
						 		document.getElementById("Lvl3_Discussion_Room_2").className = "tier2 l3_discussion_zone hidden";
						 		document.getElementById("Lvl3_Discussion_Room_3").className = "tier3 l3_discussion_zone hidden";
						 		break;
						 	case 1:
						 		document.getElementById("Lvl3_Discussion_Room_1").className = "tier1 l3_discussion_zone";
						 		document.getElementById("Lvl3_Discussion_Room_2").className = "tier2 l3_discussion_zone hidden";
						 		document.getElementById("Lvl3_Discussion_Room_3").className = "tier3 l3_discussion_zone hidden";
						 		break;
						 	case 2:
						 		document.getElementById("Lvl3_Discussion_Room_1").className = "tier1 l3_discussion_zone hidden";
						 		document.getElementById("Lvl3_Discussion_Room_2").className = "tier2 l3_discussion_zone";
						 		document.getElementById("Lvl3_Discussion_Room_3").className = "tier3 l3_discussion_zone hidden";
						 		break;
						 	case 3:
						 		document.getElementById("Lvl3_Discussion_Room_1").className = "tier1 l3_discussion_zone hidden";
						 		document.getElementById("Lvl3_Discussion_Room_2").className = "tier2 l3_discussion_zone hidden";
						 		document.getElementById("Lvl3_Discussion_Room_3").className = "tier3 l3_discussion_zone";
						 		break;
						}
					}	
			    }
			}
  		}
  });
}

window.setInterval(function(){ 
	getL1BoxingRing();
	getL1BoxingRing2();
	getL3SocialKitchen();
	getL3SocialKitchen2();
	getL3DiscussionZone();
}, 3000);