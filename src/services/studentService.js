import axios from '../axios'


let getAllStudents = (inputId) => {
    return axios.get(`api/get-all-students?id=${inputId}`)
}
let deleteStudent = (studentId) => {
    return axios.delete(`/api/delete-student?id=${studentId}`);
}
let editStudent = (studentId) => {
    return axios.delete(`/api/delete-student?id=${studentId}`);
}
let getStudentByClassId= (classId)=>{
    return axios.get(`/api/get-student-by-class-id?id=${classId}`)
}
export
{
    getAllStudents,deleteStudent,getStudentByClassId,
    editStudent
}