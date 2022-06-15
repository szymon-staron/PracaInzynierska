import * as React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { PersonalDataSchema } from '../../../../db';
import { Field } from 'components/template/field';
import { useForm } from 'react-hook-form';

export const PersonalData = () => {
    const { user } = useSelector((state) => state);
    console.log(user.details.name);
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = () => { console.log("Zmiana danych"); };



    const personalData = PersonalDataSchema.map((el, index) => (
        <div className='eachData'><Field key={index} {...{ ...el, register, watch }} /></div>
    ))
    return (
        <div>
            <h1 className="register__title">Dane użytkownika</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="personalData__fieldset">
                    {personalData}
                    <div className='register_button'>
                        <button>Edytuj</button></div>
                </fieldset>
            </form></div>



    );
};