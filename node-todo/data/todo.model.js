var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  priority: {
    type: Number,
    required: true,
    default: 3,
    min : 1,
    max : 5
  }
},{
    versionKey: false
});

mongoose.model('Todo', todoSchema);