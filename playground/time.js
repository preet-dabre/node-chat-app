var moment = require('moment');
// January 1st 1970 at midnight

// var now = new Date();
// console.log(now.getMonth());


var date = moment();
date.subtract(100, 'year');

console.log(moment());
