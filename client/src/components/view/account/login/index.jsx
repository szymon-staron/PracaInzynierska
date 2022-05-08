import { React } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { history } from 'utils/history';
import {
    loginRequest,
    loginSuccess,
    setToken,
    userLoaded,
} from '../../../../store/auth/authSlice';
import { Field } from '../../../template/field';
import { loginSchema } from 'db';
import { client } from 'api';

import './style.scss';

export const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, watch } = useForm();
    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        dispatch(loginRequest());
        const { token } = await client('users/login', '', {
            email: data.email,
            password: data.password,
        });
        if (token) {
            dispatch(setToken(token));
            dispatch(loginSuccess());
            const { result } = await client('users/validate-Token', token);

            if (result) {
                navigate('/account/user');
                dispatch(userLoaded(result));
            }
        }
        reset();
    };

    const loginForm = loginSchema.map((el, index) => (
        <Field key={index} {...{ ...el, register, watch }} />
    ));

    return (
        <div className="login">
            <h1 className="login__title">Zaloguj się</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="login__fieldset">
                    {loginForm}
                    <button type="submit">Zaloguj się!</button>
                    <button type="button" className="register__link">
                        <NavLink to="/account/register">
                            Nie masz konta? Zarejestruj się!
                        </NavLink>
                    </button>
                </fieldset>
            </form>
        </div>
    );
};
