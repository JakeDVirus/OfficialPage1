import 'animate.css/source/_base.css';
import 'animate.css/source/sliding_entrances/slideInRight.css';
import '../../sass/styles.scss';

import 'waypoints/lib/noframework.waypoints.min.js';

import * as myAnimationOnScroll from '../organisedPartials/animationOnScrollPartial';
import { myOnScroll1 } from '../organisedPartials/onScrollEvents';
import * as myGeneral from '../general';


//onScroll
window.onscroll = myOnScroll1;