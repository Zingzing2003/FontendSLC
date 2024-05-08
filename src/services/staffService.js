import axios from '../axios';
let getAllStaff=()=>{
    return axios.get("/api/get-all-staff");
}
export{
    getAllStaff
}