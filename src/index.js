import './sass/styles.scss';
import 'waypoints/lib/noframework.waypoints.min.js';
import {getBgUrl} from './js/libraries/tools.js';
import * as myAnimationOnScroll from './js/organisedPartials/animationOnScrollPartial';

var waypoint = new Waypoint({
    element: document.querySelector('body'),
    handler: function() {
      console.log("kutte kamine :D :D :D")
    }
})