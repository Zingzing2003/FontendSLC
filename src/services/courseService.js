import axios from '../axios'


// let getAllCourse = (inputId) => {
//     return axios.get(`api/get-all-course?id=${inputId}`)
// }
let getAllCourse = (inputId) => {
    return axios.get("api/get-all-courses")
}

export
{
    getAllCourse
}