/* Shapes */
var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: false,
  path: '../elumni_comingsoon.json'
});

animItem.addEventListener('DOMLoaded', function(){
  animItem.setSpeed(0.7);
  animItem.playSegments( [1,55], true );
});