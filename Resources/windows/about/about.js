Ti.include('../windows.js');

win.addEventListener('open', function(e) {
	
	view.backgroundColor = "white";
	
	var lblAboutText = Ti.UI.createLabel({
		id: "lblAboutText",
		text: "About this application"
	});
	
	var button = Ti.UI.createButton({
		id: "btnBackToWelCome",
		title: "back to welcome"
	});

	button.addEventListener('click', function(e){
		Ti.App.fireEvent("switchWindow", {to: "welcome", from: "about"});
	});

	view.add(lblAboutText);
	view.add(button);
	win.add(view);	

});