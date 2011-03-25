var windows = {
	"welcome": Ti.UI.createWindow({
		url: "windows/welcome/welcome.js",
		visible: false
	}),
	"tracker": Ti.UI.createWindow({
		url: "windows/tracker/tracker.js",
		visible: false
	}),
	"about": Ti.UI.createWindow({
		url: "windows/about/about.js",
		visible: false
	})
};

Ti.App.addEventListener("switchWindow", function(e) {
	Ti.API.info("Switching to window: " + e.to + " from: " + e.from);
	
	windows[e.from].hide();
	windows[e.to].fireEvent("focus", {});
	windows[e.to].show();
});

// FIXME: automate
windows.welcome.open();
windows.about.open();
windows.tracker.open();

windows.welcome.show();



