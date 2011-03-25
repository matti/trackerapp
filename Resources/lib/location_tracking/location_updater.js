var LocationUpdater = function(interval) {
	var instance = this;

	this.currentCoordinates = null;
	
	this.updateInterval = setInterval(function() {
		Ti.Geolocation.getCurrentPosition(function(e) {
			instance.currentCoordinates = e.coords;
		});
		
	}, interval);	
};