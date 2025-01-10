import 'regenerator-runtime';
import '../../styles/style.css';
import '../../styles/style_index.css';
import main from '../../script/view/index';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
document.addEventListener('DOMContentLoaded', main);
