import axios from '../axios'


let getTopTeacher = (inputId) => {
    return axios.get(`api/get-top-teachers?id=${inputId}`)
}
let getAllTeachers=()=>{
    return axios.get("/api/get-all-teachers");
}
let getTopTeacherByUserId=(userId)=>{
    return axios.get(`/api/get-teacher-by-user-id?userId=${userId}`);
}
export
{
    getTopTeacher,getAllTeachers,getTopTeacherByUserId
}
