import {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function usePost() {
  const dispatch = useDispatch()
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const post = async (url, apiData) => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.post(url, apiData);
      console.log("datalar", responseData)
      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.log('usePost hata', error);
      setError(error);
      setLoading(false);
    }
  };
 
  return {data, loading, error, post};
}
export default usePost;