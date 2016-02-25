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

function GetURLDone(){

}

var HttpGetter = function () {
  this.urllist = process.argv.slice(2)
  var urllength = Number(this.urllist.length)
  this.urllist.forEach(function(url) {console.log(url)
                                 console.log("Length:" + --(urllength))})
  this.hamster = []
}


HttpGetter.prototype.httpget = function(theUrl) {
    hr(theUrl).pipe(bl(function(err, data) {
      var theOut = data.toString()
      console.log(theOut)
    }))
  }

HttpGetter.prototype.httpget = function(theUrl) {
  hr(theUrl).pipe(bl(function(err, data) {
    var theOut = data.toString()
    console.log(theOut)
  }))
}

module.exports = new HttpGetter()
