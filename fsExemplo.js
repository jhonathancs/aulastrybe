const fs = require('fs')
 
try {  
  fs.unlinkSync('/tmp/hello')
} catch (ex) {
  console.log(ex)
}
 
console.log('successfully deleted /tmp/hello');