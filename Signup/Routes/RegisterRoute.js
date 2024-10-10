import express from 'express'
import { registerUser } from '../Controller/RegistrationController.js'

const router=express.Router();


router.post('/registerUser',registerUser) // post user 

export default router;