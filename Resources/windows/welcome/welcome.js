Ti.include('../windows.js');

win.addEventListener('open', function(e){
	
	var button = Ti.UI.createButton({
		id: "btnStart",
		title: "Start!"
	});

	button.addEventListener('click', function(e){
		Ti.App.fireEvent("switchWindow", {to: "tracker", from: "welcome"});
	});
	
	view.add(button);
	win.add(view);
});

