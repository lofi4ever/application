/* Scripts */
import './src/js/index.js';
/* !Scripts */

/* Styles */
import './src/scss/main.scss'; 
/* !Styles */

console.log('main js file4');

if (module.hot) {
  module.hot.accept('./src/js/index.js', function() {
    //callback
  });
  //module.hot.accept('./src/scss/main.scss');
}