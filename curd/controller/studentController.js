import Student from "../model/Studentmodel.js";

//! Create a new Student

export const createStudent=async(req,res)=>{
    const {name,age,email}=req.body
    const newStudent=new Student({name,age,email});
    try {
        const saveStudent=await newStudent.save();
        res.status(201).json(saveStudent);        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//!Read all student

export const getStudents=async(req,res)=>{
    try {
        const students=await Student.find();
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

//! Get date of a particular student

export const getStudentById=async(req,res)=>{
    const {id}=req.params;
    try {
        const student=await Student.findById(id);
        if(!student){
            res.status(404).json({message:"Student not found"})
        }
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//! Delete a Student

export const deleteStudent=async(req,res)=>{
    const {id}=req.params;
    try{
        const student=await Student.findByIdAndDelete(id);
        if(!student){
            res.status(404).json({message:"Student not found"})
        }
        res.status(200).json({message:"Student Deleted Successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

//! Update a student Details

export const updateStudent=async(req,res)=>{
    const {id}=req.params;
    const {name,age,email}=req.body;
    try {
        const student=await Student.findByIdAndUpdate(id,{name,age,email});
        if(!student){
            res.status(404).json({message:"Student not found"})
        }
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}