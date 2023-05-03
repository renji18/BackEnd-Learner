const Student = require('../models/students')

const getAllStudents = async(req, res) =>{
  try {
    const allData = await Student.find()
    res.status(200).send(allData)
  } catch (error) {
    console.log(error);
  }
}

const createNewStudent = async(req, res)=>{
  try {
    const document = new Student(req.body)
    awaitData = await document.save()
    res.status(200).send(awaitData)
  } catch (error) {
    console.log(error);
  }
}

const getSingleStudent = async(req, res)=>{
  try {
    const {studentID} = req.params
    if(!studentID){
      return res.status(200).send("No student found for the following ID")
    }
    const singleData = await Student.findById({_id: studentID})
    res.status(200).send(singleData)
  } catch (error) {
    res.status(404).send(error)
  }
}

const deleteStudent = async(req, res)=>{
  try {
    const {studentID} = req.params
    if(!studentID){
      return res.status(200).send("No student found for the following ID")
    }
    const singleData = await Student.findByIdAndDelete({_id:studentID})
    res.status(200).json({msg: 'The following data is deleted', item: singleData})
  } catch (error) {
    res.status(404).send(error)    
  }
}

const updateStudent = async(req, res)=>{
  try {
    const {studentID} = req.params
    if(!studentID){
      return res.status(200).send("No student found for the following ID")
    }
    const updateData = await Student.findByIdAndUpdate({_id:studentID}, req.body, {new:true})
    res.status(200).json({msg: 'The following data is updated', item: updateData})
  } catch (error) {
    res.status(404).send(error)    
  }
}

module.exports = {
  getAllStudents,
  createNewStudent,
  updateStudent,
  deleteStudent,
  getSingleStudent,
}