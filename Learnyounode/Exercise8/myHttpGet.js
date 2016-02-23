var bl = require('bl')
var hr = require('hyperquest')


var HttpGetter = function () {}

HttpGetter.prototype.httpget = function(theUrl) {
    hr(theUrl).pipe(bl(function(err, data) {
      var theOut = data.toString()
      console.log(theOut.length)
      console.log(theOut)
    }))}
/*

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

module.exports = new HttpGetter()
