import axios from 'axios';

export const apiCall = async()=>{
    const resp = await axios({
        url:'http://jsonplaceholder.typicode.com/todos/1',
        method:"GET",
        // header:{
        //     'Authorization': 'dfff'
        // }
    });

    console.log(resp)
    if(resp.statusCode === 200){
        //rest code
        return resp.data;
    } else {
       return {}
    }
}


