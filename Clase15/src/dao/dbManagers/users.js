import {userModel} from '../models/users.js';

export default class Users{
    constructor(){
        console.log('Working users with DB');
    }

    getAll = async() =>{
        const users = await userModel.find();
        return users.map(user=>user.toObject()); //transformo a objeto plano
    }

    save = async(user)=>{
        const result = await userModel.create(user);
        return result;
    }
}