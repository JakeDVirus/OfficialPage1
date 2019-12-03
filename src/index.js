import './sass/styles.scss';
//import 'waypoints';
import 'waypoints/lib/noframework.waypoints.min.js';

var waypoint = new Waypoint({
    element: document.querySelector('body'),
    handler: function() {
      console.log("kutte kamine :D :D :D")
    }
})