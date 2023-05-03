// module-wrapper-function

// ( function(exports, require, module, __filename, __dirname){
//   const name = 'klkh'
//   console.log(name);
//   // module.exports = {}
// } )

( function(){
  console.log(a);
} )()

//even though a is in the same file, the wrapper is not accessing it
var a = 'vinod'

// getting filename and directoryname
console.log(__filename);
console.log(__dirname);