import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from 'components/header/header';
import { Chat } from 'components/chat/chat';
import { Context } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../../components/loader/loader';

import './home-page.scss';

export const HomePage = () => {
    const { auth } = useContext(Context);
    const [user, loading] = useAuthState(auth);


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

/*

export const HomePage = () => {
    //const { isAuth, email } = useAuth();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loader />
    }

    if (user) {
        return (
            <div className="home-page">
                <Header />
                <>
                    <h1>Welcome home</h1>
                </>


            </div >
        )
    }

    return (
        <Redirect to={'/login'} />
    )

}
*/
