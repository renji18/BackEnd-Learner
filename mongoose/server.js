const mongoose = require('mongoose')
const validator = require('validator')
const { default: isEmail } = require('validator/lib/isEmail')

// Connection creation and creates a new Database
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017/renji", {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{console.log('Connection successful...')})
  .catch((err)=>{console.log(err)})

const demoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },
  age: {
    type: Number,
    validate(value){
      if(value < 1){
        throw new Error('How the hell are you less than 1 yrs. old?')
      }
    }
  },
  dead: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  mail:{
    type: String,
    unique: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Bro, provide a valid email')
      }
    }
  }
})

const Demo = new mongoose.model('Demo', demoSchema)

const createDocument = async() => {
  try {
    
    const harry = new Demo({
      name: 'Harry',
      age: 50,
      dead: true,
      mail: "aadarshjha1401@gmail.com"
    })

    const aadarsh = new Demo({
      name: 'Aadarsh',
      age: 50,
      dead: true,
      mail: "afsdfasdfsaf@sdf.sdf"   // I don't know why but if there is an @ and a . after the @ then the validation is passed
    })

    const david = new Demo({
      name: 'David',
      age: 20,
      dead: true,
    })

    const json = new Demo({
      name: 'Json',
      age: 50,
      dead: true,
    })

    await Demo.insertMany([aadarsh, json, david, harry])

    // await harry.save()
    // await json.save()
    // await david.save()
    // await aadarsh.save()
  } catch (error) {
    console.log(error)
  }
}

const getDocuments = async() => {
  try {
    const elements = await Demo
      .find()
      // .find({$nor: [{dead:false}, {name: 'Harry'}]})       // and, or, nor, not
      // .find({age: {$gt: 49}})                  // greater than, less than
      // .find({dead: {$nin: [true, false]}})     // in and not in
      // .select({_id:0, name:1})
      // .count()
      // .sort({name:-1})      // sort, asce or desc  (1 or -1)

    console.log(elements);    
  } catch (error) {
    console.log(error);
  }
}

const updateDocument = async(_id) => {
  try {
    await Demo.findOneAndUpdate({name: 'Harry'}, {active: false, dead:true}, ()=>getDocuments())
    // await Demo.updateOne({_id}, {$set: {age: 40, active: true}})
  } catch (error) {
    console.log(error);
  }
}

const deleteDocument = async() => {
  try {
    await Demo.findOneAndDelete({name: 'Harry'})
    getDocuments()
  } catch (error) {
    console.log(error);
  }
}

// createDocument()
// updateDocument("63b8680613a2efcf9dae2039")
// deleteDocument()
// getDocuments()