import React from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { studentActions } from '../src/Redux/store'
import { bindActionCreators } from 'redux';

const StudentCard = props => {
    const form = useSelector(state => state.form)
    const actions = bindActionCreators(studentActions, useDispatch());
    const deleteStudent = async () => {
        const result = await axios.delete(`http://localhost:8080/api/students/${props.id}`)
        actions.deleteStudent(props.id)
    }
    const updateStudent = async () => {
        const result = await axios.put(`http://localhost:8080/api/students/${props.id}`,form)
        actions.updateStudent(props.id, form)
        
    }
    return (
        <div className='studentcard-container'>
            <div className='studentcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='studentcard-gpa'>{props.gpa}</p>
                <p className='studentcard-name'>{props.name}</p>
                <p className='studentcard-surname'>{props.surname}</p>
            </div>
            <div className='studentcard-actions'>
                <div onClick={updateStudent}>Update</div>
                <div onClick={deleteStudent}>Delete</div>
                {
                    console.log(props.id)
                }
            </div>
        </div>

    )
}

export default StudentCard;