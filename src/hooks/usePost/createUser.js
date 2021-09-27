import {useState} from 'react';
import axios from 'axios';

function createPost(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const [createUser, setCreateUser] = useState(null)

    const create = async (url, apiData) => {
        try {
            setLoading(true);
            const {data: responseData} = await axios.post(url, apiData);
            setCreateUser(responseData);
            setLoading(false);
          } catch (error) {
            console.log('createUser hata', error);
            setError(error);
            setLoading(false);
        }
    }
    return {loading, error, create, createUser}
}
export default createPost;