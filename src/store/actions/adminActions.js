import actionTypes from './actionTypes';
import { toast } from 'react-toastify'
import {
    getAllCodeService, creatNewUser,
    getAllUsers, saveInfoDoctor, 
    getAllSpecialty, getAllClinic
} from '../../services/userService'
import{getAllStudents, deleteStudent, editStudent}  from '../../services/studentService'
import{ getTopTeacher, getAllTeachers}  from '../../services/teacherService';
import{ getAllCourse}  from '../../services/courseService';

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {

        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService('GENDER')
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (e) {
            dispatch(fetchGenderFailed())
            console.log('check fetchGenderStart err: ', e)
        }
    }
}

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {

        try {
            let res = await getAllCodeService('POSITION')
            if (res && res.errCode === 0) {
                console.log('check res.data: ', res.data)
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed())
            }
        } catch (e) {
            dispatch(fetchPositionFailed())
            console.log('check fetchPositionStart err: ', e)
        }
    }
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {

        try {
            let res = await getAllCodeService('ROLE')
            if (res && res.errCode === 0) {
                console.log('check res.data: ', res.data)
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (e) {
            dispatch(fetchRoleFailed())
            console.log('check fetchRoleStart err: ', e)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const createNewUserRedux = (data) => {
    return async (dispatch, getState) => {

        try {
            let res = await creatNewUser(data)
            if (res && res.errCode === 0) {
                toast.success('Creat a new user success!')
                dispatch(saveUserSuccess())
                dispatch(fetchAllStudentStart())
            } else {
                dispatch(saveUserFailed())
            }
        } catch (e) {
            dispatch(saveUserFailed())
            toast.error('Error!')
            console.log('check saveUserFailed err: ', e)
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const fetchAllStudentStart = () => {
    return async (dispatch, getState) => {

        try {
            let res = await getAllStudents('ALL');
            if (res && res.errCode === 0) {
                dispatch(fetchAllStudentSuccess(res.students.reverse()))
            } else {
                dispatch(fetchAllStudentFailed())
            }
        } catch (e) {
            dispatch(fetchAllStudentFailed())
            console.log('check fetchAllStudentStart err: ', e)
        }
    }
}

export const fetchAllStudentSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_STUDENT_SUCCESS,
    data: data,
})

export const fetchAllStudentFailed = () => ({
    type: actionTypes.FETCH_ALL_STUDENT_FAILED
})

export const fetchDeleteStudentStart = (id) => {
    return async (dispatch, getState) => {

        try {
            let res = await deleteStudent(id)
            if (res && res.errCode === 0) {
                toast.success('Delete Student success!', {
                    theme: 'dark'
                })
                dispatch(fetchDeleteStudentSuccess())
                dispatch(fetchAllStudentStart())
            } else {
                toast.error('Delete Student failed!')
                dispatch(fetchDeleteStudentFailed())
            }
        } catch (e) {
            toast.error('Delete Student failed!')
            dispatch(fetchAllStudentFailed())
            console.log('check fetchDeleteStudentStart err: ', e)
        }
    }
}

export const fetchDeleteStudentSuccess = () => ({
    type: actionTypes.EDIT_STUDENT_SUCCESS,
})

export const fetchDeleteStudentFailed = () => ({
    type: actionTypes.EDIT_STUDENT_FAILED
})

export const fetchEditStudentStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editStudent(data)
            if (res && res.errCode === 0) {
                toast.success('Edit Student success!')
                dispatch(fetchEditStudentSuccess())
                dispatch(fetchAllStudentStart())
            } else {
                toast.error('Edit user failed!')
                dispatch(fetchEditStudentFailed())
            }
        } catch (e) {
            toast.error('Edit Student failed!')
            dispatch(fetchAllStudentFailed())
            console.log('check fetchEditStudentStart err: ', e)
        }
    }
}

export const fetchEditStudentSuccess = () => ({
    type: actionTypes.EDIT_STUDENT_SUCCESS,
})

export const fetchEditStudentFailed = () => ({
    type: actionTypes.EDIT_STUDENT_FAILED
})

// export const loadTopDoctors = () => {
//     return async (dispatch, getState) => {
//         try {
//             let res = await getTopDoctorHomeService()
//             if (res && res.errCode === 0) {
//                 dispatch({
//                     type: actionTypes.lOAD_TOP_DOCTOR_SUCCESS,
//                     data: res.data
//                 })
//             } else {
//                 dispatch({
//                     type: actionTypes.lOAD_TOP_DOCTOR_FAILED,
//                 })
//             }
//         } catch (e) {
//             console.log('lOAD_TOP_DOCTOR_FAILED: ', e)
//             dispatch({
//                 type: actionTypes.lOAD_TOP_DOCTOR_FAILED,
//             })
//         }
//     }
// }

// export const getALLDoctors = () => {
//     return async (dispatch, getState) => {
//         try {
//             let res = await getAllDoctor()
//             if (res && res.errCode === 0) {
//                 dispatch({
//                     type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
//                     data: res.data
//                 })
//             } else {
//                 dispatch({
//                     type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
//                 })
//             }
//         } catch (e) {
//             console.log('FETCH_ALL_DOCTORS_FAILED: ', e)
//             dispatch({
//                 type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
//             })
//         }
//     }
// }


export const loadTopTeacher = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopTeacher()
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.lOAD_TOP_TEACHER_SUCCESS,
                    data: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.lOAD_TOP_TEACHER_FAILED,
                })
            }
        } catch (e) {
            console.log('lOAD_TOP_TEACHER_FAILED: ', e)
            dispatch({
                type: actionTypes.lOAD_TOP_TEACHER_FAILED,
            })
        }
    }
}

export const getALLTeachers = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllTeachers()
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_TEACHER_SUCCESS,
                    data: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_TEACHER_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_ALL_TEACHER_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALL_TEACHER_FAILED,
            })
        }
    }
}

export const fetchInfoDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveInfoDoctor(data)
            if (res && res.errCode === 0) {
                toast.success('Save Info Doctor succeed!')
                dispatch({
                    type: actionTypes.FETCH_INFO_DOCTORS_SUCCESS,
                })
            } else {
                toast.error('Save Info Doctor failed!')
                dispatch({
                    type: actionTypes.FETCH_INFO_DOCTORS_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_INFO_DOCTORS_FAILED: ', e)
            toast.error('Save Info Doctor failed!')
            dispatch({
                type: actionTypes.FETCH_INFO_DOCTORS_FAILED,
            })
        }
    }
}

export const fetchAllcodeSchedule = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('TIME')
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_SUCCESS,
                    data: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_FAILED,
            })
        }
    }
}

export const getRequiredDoctorInfo = () => {
    return async (dispatch, getState) => {

        try {
            let resPrice = await getAllCodeService('PRICE')
            let resPayment = await getAllCodeService('PAYMENT')
            let resProvince = await getAllCodeService('PROVINCE')
            let resSpecialty = await getAllSpecialty()
            let resClinic = await getAllClinic()


            if (resPrice && resPayment && resProvince && resSpecialty && resClinic &&
                resPrice.errCode === 0 && resPayment.errCode === 0 && resProvince.errCode === 0 &&
                resSpecialty.errCode === 0 && resClinic.errCode === 0
            ) {
                let data = {
                    resPrice: resPrice.data,
                    resPayment: resPayment.data,
                    resProvince: resProvince.data,
                    resSpecialty: resSpecialty.data,
                    resClinic: resClinic.data
                }
                dispatch(getRequiredDoctorInfoSuccess(data))
            } else {
                dispatch(getRequiredDoctorInfoFailed())
            }
        } catch (e) {
            dispatch(getRequiredDoctorInfoFailed())
            console.log('check getRequiredDoctorInfo err: ', e)
        }
    }
}

export const getRequiredDoctorInfoSuccess = (data) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFO_SUCCESS,
    data
})

export const getRequiredDoctorInfoFailed = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFO_FAILED
})

// export const getHandbookHome = () => {
//     return async (dispatch, getState) => {
//         try {
//             let res = await getHandbookHomeService('9')
//             if (res && res.errCode === 0) {
//                 dispatch({
//                     type: actionTypes.FETCH_HANDBOOK_HOME_SUCCESS,
//                     data: res.data
//                 })
//             } else {
//                 dispatch({
//                     type: actionTypes.FETCH_HANDBOOK_HOME_FAILED,
//                 })
//             }
            
//         } catch (e) {
//             console.log('FETCH_HANDBOOK_HOME_FAILED: ', e)
//             dispatch({
//                 type: actionTypes.FETCH_HANDBOOK_HOME_FAILED,
//             })
//         }
//     }
// }



export const getCourse = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCourse();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_HANDBOOK_HOME_SUCCESS,
                    data: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_HANDBOOK_HOME_FAILED,
                })
            }
            
        } catch (e) {
            console.log('FETCH_HANDBOOK_HOME_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_HANDBOOK_HOME_FAILED,
            })
        }
    }
}