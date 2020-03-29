import React from 'react';
import './InputForm.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

const InputForm = props => {

    const dispatch = useDispatch();

    const form = useSelector(state => state.form)
    const students = useSelector(state => state.students)

    const addStudent = async () => {

        await axios.post(`http://localhost:8080/api/students/`, form)

        dispatch({
            type: 'ADD_STUDENT', student: {
                id: students.length > 0 ? students[students.length - 1].id + 1 : 0,
                ...form
            }
        })
    }

    return (
        <div className='form-container'>
            <h2>Add student</h2>

                    <p>Name</p>
                            <input type="text" onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })} />
                    <p>Surname</p>
                            <input type="text" onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })} />
                    <p>GPA</p>
                            <input type="number" onChange={(e) => dispatch({ type: 'CHANGE_GPA', gpa: e.target.value })} />
                    <p>Image</p>
                            <input type="text" onChange={(e) => dispatch({ type: 'CHANGE_IMG', img: e.target.value })} /> <br />

                            <button onClick={addStudent}>CREATE</button>
        </div>
    )
}

export default InputForm