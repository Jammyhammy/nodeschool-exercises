/*var bl = require('bl')
var hr = require('hyperquest')


function GetURL(theUrl) {
  return function(callback) {
    hr(theUrl).pipe(bl(function(err, data) {
      var theOut = data.toString()
      callback()
    }))
  }
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
HttpGetter.prototype.httpget = function(theUrl) {
    http.get(theUrl.toString(), function(res) {
             res.setEncoding('utf8')
             res.on("data", function(data) {
                    console.log(data)
                    })
            res.on("error", function(e) {
              console.log("Error:" + e.message)
            })
            }).on('error', function(e){
      console.log("Error: " + e.message)
    })}*/
// Require the http module in node.
var http = require('http')



// Constructor for async juggling object.

var HttpGetter = function () {
  //internal reference to this object, since sometimes this does not work in private functions.
  var self = this

  // Properties
  this.urllist = process.argv.slice(2)
  this.pending = self.urllist.length
  this.hamster = []

  function juggleAsync(url, done, position) {
    http.get(url.toString(), function(res) {
      res.setEncoding('utf8')
      var data = []
      res.on('data', function(string){
        data.push(string)
      })
      res.on('end', function() {
        self.hamster[position] = data.join('')
        done()
      })
    })
  }

  // Print out the urls when all pending callbacks are finished.
  function GetURLDone(){
    if (--self.pending !== 0) return
    console.log(self.hamster.join('\n'))
  }

  this.Launch = function () {
    for(var i=0; i < self.urllist.length; i++){
      // Looks like setImmediate is required in this case.
        setImmediate(function(index){
          juggleAsync(self.urllist[index], GetURLDone, index)
        },i)
    }
  }

  }





module.exports = new HttpGetter()
