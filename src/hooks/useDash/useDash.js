import { useState } from "react";
import axios from "axios";
import Config from 'react-native-config';


function useDash(){
    const [books, setBooks] = useState([]);
   

    const getBook =  () => {
        axios.get(Config.DASH_URL + "/dash").then(({data}) => setBooks(data.book.data))
    }

    

    return {books, getBook}

}

export default useDash;