//debouncer 
export function debouncer( func , timeout ) {
  var timeoutID , timeout = timeout || 200;
  return function () {
      var scope = this , args = arguments;
      clearTimeout( timeoutID );
      timeoutID = setTimeout( function () {
          func.apply( scope , Array.prototype.slice.call( args ) );
      } , timeout );
  }
}  


////fade in 
export function unfade(element, initialOp) {
  var op = InitialOp || 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
}




/*########################################################
###         Background Image load event            #####
#######################################################*/

export function getBgUrl(el) {
  var bg = "";
  if (el.currentStyle) { // IE
      bg = el.currentStyle.backgroundImage;
  } else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
      bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
  } else { // try and get inline style
      bg = el.style.backgroundImage;
  }
  return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
}

/*-------- How to use ------------
var image = document.createElement('img');
image.src = getBgUrl(mainBannerBgImg);
image.onload = function () {
    alert('Loaded!');
};
-----------------------------------*/