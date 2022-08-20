import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth } from "firebase/auth";

import './header.scss';

export const Header = () => {
    const { push } = useHistory();
    const auth = getAuth();

    return (
        <header className="home-page__header header">
            <div className="header__container">
                <button
                    onClick={() => {
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