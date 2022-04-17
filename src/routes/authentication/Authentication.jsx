import React from 'react'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import SignInForm from '../../components/sign-in-form/SignInForm'
import './Authentication.scss'

const Authentication = () => {
    return <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
    </div>
}

export default Authentication
