import { FAILl_REQUEST, GET_REQUEST, SUCCESS_REQUEST, URL } from "../constants/fetchDataConstants"

const fetchData = ()=> async(disptch) => {
    disptch({type: GET_REQUEST});
    try {
       const response = await axios.get(URL);
       disptch({
        type: SUCCESS_REQUEST,
        payload: response.data
       })
        
    } catch (error) {
        disptch({
            type: FAILl_REQUEST,
            payload: error.message 
        })
    }
}
export default fetchData