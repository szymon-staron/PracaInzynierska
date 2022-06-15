import { useState } from 'react';
import classNames from 'classnames';
import { PurchaseHistory } from '../../../template'
import './style.scss';
import { PersonalData } from '../personalData';

export const User = () => {
    const [activePage, setActivePage] = useState('');

    const handleOpenOption = (option) => setActivePage(option);

    return (
        <div className="container">
            <div className="accountPage">
                <h3>Konto użytkownika</h3>
                <div className="userPanel">
                    <ul className="list">
                        <li
                            className={classNames('link', { active: activePage === 'data' })}
                            onClick={() => handleOpenOption('data')}
                        >
                            Dane użytkownika
                        </li>
                        <li
                            className={classNames('link', {
                                active: activePage === 'history',
                            })}
                            onClick={() => handleOpenOption('history')}
                        >
                            Historia zamówień
                        </li>
                        <li className="link">Wyloguj się</li>
                    </ul>
                    <div
                        className={classNames('option', { show: activePage === 'data' })}
                    >
                        <PersonalData />
                    </div>
                    <div
                        className={classNames('option', { show: activePage === 'history' })}
                    >
                        <PurchaseHistory />
                    </div>
                </div>
            </div>
        </div>
    );
};
