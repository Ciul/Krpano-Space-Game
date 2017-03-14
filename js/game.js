window.addEvent('domready', function() {
	
	createTour('game.swf');
});


window.addEvent('load', function() {
	
	
});



function log() {
	if(!!console) {
		Array.each(arguments, function(arg) {
			console.log(arg);
		});
	}
}

function createTour(swf, xml) {
	if(!!swf) {
		var viewerOptions = {swf: swf, target: 'pano_canvas', id: 'krpanoObj'};
		if(!!xml) { Object.merge(viewerOptions, {xml: xml}); }
		
		viewer = createPanoViewer(viewerOptions);
		viewer.addParam('allowScriptAccess', true);
		viewer.embed();
	}
}