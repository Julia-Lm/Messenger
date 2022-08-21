import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';
import { getAuth } from "firebase/auth";

import './header.scss';

export const Header = () => {
    const { push } = useHistory();
    const dispatch = useDispatch();
    const auth = getAuth();

    return (
        <header className="home-page__header header">
            <div className="header__container">
                <button
                    onClick={() => {
                        dispatch(removeUser());
                        auth.signOut();
                        push('/login');
                    }}
                >
                    Sign out
                </button>
            </div>

        </header>
    );
}