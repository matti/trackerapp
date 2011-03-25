var LocationPlotter = function(locationUpdater, mapview, interval) {
	var instance = this;
	
	this.locationUpdater = locationUpdater;
	this.mapview = mapview;
	
	this.plotInterval = setInterval(function() {
		var currentLatitude = parseFloat(locationUpdater.currentCoordinates.latitude);
		var currentLongitude = parseFloat(locationUpdater.currentCoordinates.longitude);
		
		var myLocationAnnotation = Titanium.Map.createAnnotation({
			latitude: currentLatitude,
			longitude: currentLongitude,
			title: "YOU",
			myid: 1
		});
		
		instance.mapview.addAnnotation(myLocationAnnotation);		
		instance.mapview.setLocation({
			latitude: myLocationAnnotation.latitude, longitude: myLocationAnnotation.longitude, 
			latitudeDelta:0.01, longitudeDelta:0.01
		});
			
	}, interval);
	
};