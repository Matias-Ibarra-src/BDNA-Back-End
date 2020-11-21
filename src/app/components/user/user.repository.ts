import { User } from '../../models/user.model';
import model from './user.schema'


async function getAllUsers() : Promise<User[]> {
    return model.find();
}

function getUserById(id: String){
   return model.findOne({ _id : id});
}

function addUser( user: User){
    return model.create<User>(user);
}

export default { getAllUsers , getUserById, addUser};