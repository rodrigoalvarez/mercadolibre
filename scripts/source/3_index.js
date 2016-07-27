function qS(selector) { return document.querySelector(selector); };

var zoom = new ch.Zoom(qS('#product-image'));
zoom.loadImage();

var carousel = new ch.Carousel(qS('.product-carousel'), {"pagination": true});

var tooltip1 = new ch.Tooltip(qS('.product-tooltip1'), {
 'side': 'top',
 'align': 'center',
 'offsetY': -10
});
var tooltip2 = new ch.Tooltip(qS('.product-tooltip2'), {
 'side': 'top',
 'align': 'center',
 'offsetY': -10
});
var tooltip3 = new ch.Tooltip(qS('.product-tooltip3'), {
 'side': 'top',
 'align': 'center',
 'offsetY': -10
});
var tooltip4 = new ch.Tooltip(qS('.product-tooltip4'), {
 'side': 'top',
 'align': 'center',
 'offsetY': -10
});
var tooltip5 = new ch.Tooltip(qS('.product-tooltip5'), {
 'side': 'top',
 'align': 'center',
 'offsetY': -10
});
var tooltip6 = new ch.Tooltip(qS('.product-tooltip6'), {
 'side': 'top',
 'align': 'center',
 'offsetY': -10
});

var tabs = new ch.Tabs(qS(".product-data"));
