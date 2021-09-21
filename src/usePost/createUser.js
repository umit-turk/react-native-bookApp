import {useState} from 'react';
import axios from 'axios';

function createPost(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const [createUser, setCreateUser] = useState(null)

    const create = async (url, apiData) => {
        try {
            setLoading(true);
            console.log(apiData);
            const {data: responseData} = await axios.post(url, apiData);
            setCreateUser(responseData);
            setLoading(false)
        } catch (error) {
            console.log("create 1", error);
            setError(error)
            setLoading(false)
        }
    }
    return {loading, error, create, createUser}
}
export default createPost;