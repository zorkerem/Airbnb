import 'flexiblegs-bem';
import 'normalize.css';
import './scss/app.scss';

//lazyload
require('jquery-lazy/jquery.lazy');
require('./lazy-config');

//menu
require('./menu');

//datepicker
import '@chenfengyuan/datepicker/dist/datepicker.min.css'
import '@chenfengyuan/datepicker/dist/datepicker.min';
require('./date-config');



if (process.env.NODE_ENV !== 'production') {
	require('./index.html');
}

document.addEventListener('DOMContentLoaded', () => {



});
