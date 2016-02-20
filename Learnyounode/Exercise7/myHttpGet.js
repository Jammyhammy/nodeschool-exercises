var http = require('http')

var HttpGetter = function () {}

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
    })}

module.exports = new HttpGetter()
