import axios from "axios"

const userUrl = 'http://localhost:8080/users';
class UserService{
    fetchUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUserById(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    updateUserById(user){
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }


}
export default new UserService();