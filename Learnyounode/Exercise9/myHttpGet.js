var bl = require('bl')
var hr = require('hyperquest')


function GetURL(theUrl) {
  return function(callback) {
    hr(theUrl).pipe(bl(function(err, data) {
      var theOut = data.toString()
      callback()
    }))
  }
}

var HttpGetter = function () {
  this.argsIndex = 2
  this.argsEnd = (process.argv.length - this.argsIndex)
  this.hamster = []
}


HttpGetter.prototype.httpget = function(theUrl) {
    hr(theUrl).pipe(bl(function(err, data) {
      var theOut = data.toString()
      console.log(theOut)
    }))
  }

module.exports = new HttpGetter()
