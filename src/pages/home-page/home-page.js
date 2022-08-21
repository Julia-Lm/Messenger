import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from 'components/header/header';
import { Chat } from 'components/chat/chat';
import { getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../../components/loader/loader';

import './home-page.scss';

export const HomePage = () => {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(setUser({
                username: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                id: user.uid,
                token: user.accessToken,
            }));
        }

    }, [user])


    if (loading) {
        return <Loader />
    }

    if (user) {
        return (
            <div className="home-page">
                <Header />
                <Chat />
            </div >
        )
    }

    return (
        <Redirect to={'/login'} />
    )



}


