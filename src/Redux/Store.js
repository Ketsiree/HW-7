import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const initialFrom = {
    name: '',
    surname: '',
    gpa: 0,
    img: ''

}

export const studentActions = {
    getStudentsSuccess: students => ({
        type: 'GET_STUDENTS_SUCCESS', students
    }),
    getStudentsFailed: () => ({ type: 'GET_STUDENTS_FAILED' }),
    getStudents: () => async (dispatch) => {
        try {
            console.log('get student new')
            const response = await axios.get(`http://localhost:8000/api/students`)
            const responseBody = await response.data;
            console.log('response: ', responseBody)
            dispatch({ type: 'GET_STUDENTS_SUCCESS', students: responseBody });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'GET_STUDENTS_FAILED' });
        }
    },
    
    addStudent: (students, form) => ({
        type: 'ADD_STUDENT', students: {
            id: students.length > 0 ? students[students.length - 1].id + 1 : 0,
            ...form
        }
    }),
    deleteStudent: (id) => ({ type: 'DELETE_STUDENT', id: id }),
    updateStudent: (id, form) => ({ type: 'UPDATE_STUDENT', id: id, student: { ...form, id: id } })
}


export const formActions = {
    changeName: (name) => ({ type: 'CHANGE_NAME', name: name }),
    changeName: (surname) => ({ type: 'CHANGE_SURNAME', surname: surname }),
    changeGpa: (gpa) => ({ type: 'CHANGE_GPA', gpa: gpa }),
    changeImg: (img) => ({ type: 'CHANGE_IMG', img: img })
}

const studentReducer = (students = [], action) => {
    switch (action.type) {
        case 'GET_STUDENT':
            return action.students
        case 'ADD_STUDENT':
            return [...students, action.students]
        case 'DELETE_STUDENT':
            return students.filter((student) => +student.id !== +action.id)
        case 'UPDATE_STUDENT':
            return students.map((student, index) => {
                if (+student.id === +action.id) {
                    return action.student;
                }
                else {
                    return student;
                }
            })
        case 'GET_STUDENTS_SUCCESS':
            console.log('action: ', action.students)
            return action.students
        case 'GET_STUDENTS_FAILED':
            console.log('action: Failed')
            return action.students

    }
    return students;
}

const formReducer = (data = initialForm, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...data,
                name: action.name 
            }
        case 'CHANGE_SURNAME':
            return {
                ...data,
                name: action.surname 
            }
        case 'CHANGE_GPA':
            return {
                ...data,
                gpa: action.gpa
            }
        case 'CHANGE_IMG':
            return {
                ...data,
                img: action.img 
            }
        default: return data;
    }
}
const reducers = combineReducers({
    student: studentReducer,
    form: formReducer
})

export const store = createStore(reducers, applyMiddleware(logger, thunk));