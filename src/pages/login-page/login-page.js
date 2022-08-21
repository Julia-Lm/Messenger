import React from 'react';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../../components/loader/loader';

import './login-page.scss';

export const LoginPage = () => {
    const auth = getAuth();
    const { push } = useHistory();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loader />
    }

    const onSubmit = data => {
        handleLogin();
    }

    const handleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const users = await firebase.auth().signInWithPopup(provider);
        push('/');
    }

    return (
        <div className="login-page">
            <div className="login-button">
                <button onClick={onSubmit}>
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}
