import express from 'express';
import userModel from './models/users.js'
import mongoose from 'mongoose';


const enviroment = async () => {
    try {
        await mongoose.connect('mongodb+srv://noelialavilla19:Candado19@clusterclase14.nxtg9ud.mongodb.net/clase16?retryWrites=true&w=majority');
        const response = await userModel.find({first_name:'Alex'}).explain('executionStatus');
    } catch (error) {
        console.log(error);
    }
}

app.listen(8080);