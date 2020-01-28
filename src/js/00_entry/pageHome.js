import 'animate.css/source/_base.css';
import 'animate.css/source/sliding_entrances/slideInRight.css';
import '../../sass/styles.scss';

import 'waypoints/lib/noframework.waypoints.min.js';

import * as myAnimationOnScroll from '../partials/forHome/animationOnScrollPartial';
import { myOnScroll1 } from '../partials/stickyNavBar';
import * as myGeneral from '../01_main/general';


//onScroll
window.onscroll = myOnScroll1; 
// , './src/js/00_root/tempHeader.js' 