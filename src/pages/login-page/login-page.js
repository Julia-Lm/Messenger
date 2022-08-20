import React, { useContext } from 'react';
import { Context } from '../../index';
import firebase from 'firebase/compat/app';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../../components/loader/loader';

import './login-page.scss';

export const LoginPage = () => {

    const { auth } = useContext(Context);
    const { push } = useHistory();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loader />
    }

    const handleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        push('/');
    }

    return (
        <div className="login-page">
            <div className="login-button">
                <button onClick={handleLogin}>
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}
