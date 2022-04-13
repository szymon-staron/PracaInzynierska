import { React } from 'react';
import { Field } from '../../../template/field';
import { useNavigate } from 'react-router';
import { registerSchema } from '../../../../db';
import { client } from 'api';
import { useForm } from 'react-hook-form';

import './style.scss';

export const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, watch } = useForm();

    const onSubmit = async (data) => {
        const { result } = await client('users/register', '', data);
        if (result) navigate('/account/login', { replace: true });
        reset();
    };

    const registerForm = registerSchema.map((el, index) => (
        <Field key={index} {...{ ...el, register, watch }} />
    ));
    return (
        <div className="register">
            <h1 className="register__title">Załóż konto</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="register__fieldset">
                    {registerForm}
                    <button>Wyślij</button>
                </fieldset>
            </form>
        </div>
    );
};
