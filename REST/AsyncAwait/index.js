const express = require('express')
const app = express()
require('./db/connection')
const tasks = require('./router/router.js')

app.use(express.json())

app.use('/students', tasks)

// CREATE NEW STUDENT
// app.post('/students', (req, res) => {
//   const document = new Student(req.body)
//   document.save().then(()=>{
//     res.status(200).send(document)
//   }).catch((e)=>{
//     res.status(404).send(e);
//   })
// })

// app.post('/students', async (req, res) => {
//   try {
//     const document = new Student(req.body)
//     awaitData = await document.save()
//     res.status(200).send(awaitData)
//   } catch (error) {
//     console.log(error);
//   }
// })

// app.get('/students', async(req, res)=>{
//   try {
//     const allData = await Student.find()
//     res.status(200).send(allData)
//   } catch (error) {
//     console.log(error);
//   }
// })

// app.get('/students/:studentID', async(req, res)=>{
//   try {
//     const {studentID} = req.params
//     if(!studentID){
//       return res.status(200).send("No student found for the following ID")
//     }
//     const singleData = await Student.findById({_id: studentID})
//     res.status(200).send(singleData)
//   } catch (error) {
//     res.status(404).send(error)
    
//   }
// })

// app.delete('/students/:studentID', async(req, res)=>{
//   try {
//     const {studentID} = req.params
//     if(!studentID){
//       return res.status(200).send("No student found for the following ID")
//     }
//     const singleData = await Student.findByIdAndDelete({_id:studentID})
//     res.status(200).json({msg: 'The following data is deleted', item: singleData})
//   } catch (error) {
//     res.status(404).send(error)    
//   }
// })

// app.patch('/students/:studentID', async(req, res)=>{
//   try {
//     const {studentID} = req.params
//     if(!studentID){
//       return res.status(200).send("No student found for the following ID")
//     }
//     const updateData = await Student.findByIdAndUpdate({_id:studentID}, req.body, {new:true})
//     res.status(200).json({msg: 'The following data is updated', item: updateData})
//   } catch (error) {
//     res.status(404).send(error)    
//   }
// })


const port = 5000

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
})  