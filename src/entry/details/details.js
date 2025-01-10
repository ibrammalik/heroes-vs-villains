import 'regenerator-runtime';
import '../../styles/style.css';
import '../../styles/style_details.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleNodes, faDna, faEye, faKhanda,
} from '@fortawesome/free-solid-svg-icons';
import main from '../../script/view/details';

library.add(faKhanda, faDna, faEye, faCircleNodes);
dom.watch();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

document.addEventListener('DOMContentLoaded', main);
