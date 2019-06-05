// app/models/courses-taken.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our courses model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Course', {
    name : {type : String, default: ''}
});