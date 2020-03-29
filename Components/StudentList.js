import React, { useEffect } from 'react';
import StudentCard from './StudentCard';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

const StudentList = () => {

    const students = useSelector(state => state.students);
    const dispatch = useDispatch();

    const getStudents = async () => {
        const result = await axios.get(`http://localhost/api/students`)
        console.log(result)
        dispatch({ type: 'GET_STUDENTS', students: result.data })

    }

    useEffect(() => {
        getStudents()
    }, [])

    console.log(students)

    if (!students || !students.length)
        return (<h2 onClick={getStudents}>No One </h2>)

    return (
        <div className='studentlist-container'>
            {
                students.map((studentlist, index) => (
                    <div key={index} >
                        <StudentCard  {...student} />
                    </div>
                ))
            }
        </div>

    )
}

export default StudentList;