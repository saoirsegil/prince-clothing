import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopUp } from '../../components/utils/firebase'

const SignIn = () => {
    
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return <div>
        <h1>This is Sign-In Page</h1>
        <button onClick={logGoogleUser}>Sign-In with Google  Popup</button>
    </div>
}

export default SignIn