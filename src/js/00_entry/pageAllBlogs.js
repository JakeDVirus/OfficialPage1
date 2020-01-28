/********************************************
********           CSS            ***********
*********************************************/

//import 'animate.css/source/_base.css';
//import 'animate.css/source/sliding_entrances/slideInRight.css';

import '../../sass/styles.scss';




/********************************************
********       Javascript         ***********
*********************************************/

import 'waypoints/lib/noframework.waypoints.min.js';

//import * as myAnimationOnScroll from '../organisedPartials/animationOnScrollPartial';
import { myOnScroll1 } from '../organisedPartials/stickyNavBar';
import * as myGeneral from '../01_main/blogsAll';


//onScroll
window.onscroll = myOnScroll1; 