//thanks to https://stackoverflow.com/a/5354536
function posY(elm) {
    var test = elm, top = 0;

    while(!!test && test.tagName.toLowerCase() !== "body") {
        top += test.offsetTop;
        test = test.offsetParent;
    }

    return top;
}
function viewPortHeight() {
    var de = document.documentElement;

    if(!!window.innerWidth)
    { return window.innerHeight; }
    else if( de && !isNaN(de.clientHeight) )
    { return de.clientHeight; }

    return 0;
}
function scrollY() {
    if( window.pageYOffset ) { return window.pageYOffset; }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}
function checkvisible( elm ) {
    var vpH = viewPortHeight(), // Viewport Height
        st = scrollY(), // Scroll Top
        y = posY(elm);

    return (y > (vpH + st));
}

var navs = document.getElementsByClassName('navs');
var sections = [];
for(let i=0;i<navs.length;i++){
  console.log(i);
  sections.push(document.getElementById(navs[i].hash.substr(1)));
}
document.addEventListener("scroll", function(){
  var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
  if(top < 50){
    for(let j=0;j<navs.length;j++){
      if(j==0){
        navs[0].classList.add('selected');
      }
      else{
        navs[j].classList.remove("selected");
      }
    }
    return;
  }
  for(let i=1;i<sections.length;i++){
    let sec = (sections[i]);
    if(top<posY(sec)){
      console.log('i', i);
      console.log('top', top);
      console.log('posY(sec)', posY(sec));
      for(let j=0;j<navs.length;j++){
        if(i==j){
          navs[j].classList.add('selected');
        }
        else{
          navs[j].classList.remove("selected");
        }
      }
      return;
    }
  }
});





function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
