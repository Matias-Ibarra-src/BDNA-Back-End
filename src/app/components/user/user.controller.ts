import { User } from '../../models/user.model';
import userRepository from "../user/user.repository";

function getAllUsers(){
    return userRepository.getAllUsers();
}

function getUserById(id : String){
    return userRepository.getUserById(id);
}

function addUser(user : User){
    return userRepository.addUser(user);
}

export default {getAllUsers,getUserById,addUser};