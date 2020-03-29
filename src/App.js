import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StudentCard from './Components/StudentCard'
import StudentList from './Components/StudentList'
import InputForm from './Components/InputForm';
import { useSelector, useDispatch } from 'react-redux';
import { StudentActions } from './redux/store'
import { bindActionCreators } from 'redux';

export default () => {

  const actions = bindActionCreators(StudentActions, useDispatch());
  useEffect(() => {
    actions.getStudents()
  }, [])

  return (
    <div>
      <h2>Students</h2>
      <StudentList />
      <InputForm />
    </div>
  )
}