Ti.include('../windows.js');
Ti.include('../../lib/location_tracking/location_updater.js');
Ti.include('../../lib/location_tracking/location_plotter.js');

Ti.Geolocation.purpose = "Lol";

var locationUpdater = new LocationUpdater(3000);
var locationPlotter = null;


win.addEventListener('open', function(e) {
	
	view.backgroundColor = "white";

	var button = Ti.UI.createButton({
		id: "btnGoWelcome",
		title: "go welcome",
		top: 0,
		left: 0
	});

	button.addEventListener('click', function(e){
		Ti.App.fireEvent("switchWindow", {to: "welcome", from: "tracker"});
	});


	mapview = Titanium.Map.createView({
	    mapType: Titanium.Map.STANDARD_TYPE,
	    animate:true,
	    regionFit:true,
	    userLocation:true,
		height: 300
	});
	

	locationPlotter = new LocationPlotter(locationUpdater, mapview, 4000);

	
	view.add(button);	
	view.add(mapview);
	
	win.add(view);	
});

win.addEventListener('focus', function(e) {
});