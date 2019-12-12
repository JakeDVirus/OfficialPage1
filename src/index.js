//css
import 'animate.css/source/_base.css';
import 'animate.css/source/sliding_entrances/slideInRight.css';
import './sass/styles.scss';

import 'waypoints/lib/noframework.waypoints.min.js';

import * as myAnimationOnScroll from './js/organisedPartials/animationOnScrollPartial';
import { myOnScroll1 } from './js/organisedPartials/onScrollEvents';
import * as myGeneral from './js/general';


//onScroll
window.onscroll = myOnScroll1;