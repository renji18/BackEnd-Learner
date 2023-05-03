const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://localhost:27017/studentsAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log(`Database connection established`);
}).catch((e)=>{
  console.log(`No connection because of ${e}`);
})
