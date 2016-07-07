
//multiple events
var data = '';
req
  .on('data', function(chunk) {
      data += chunk;
  })
  .on('end', function() {
      console.log('POST data: %s', data);
  })
  
 
 
//Same as .once  
var onData = function(chunk) {
    console.log(chunk);
    req.removeListener(onData);
}  

req.on('data', onData);