import { React } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { Field } from '../../template/field';
import './style.scss';
import { ContactDataSchema } from '../../../db';
import { useForm } from 'react-hook-form';

export const Contact = () => {
    const { register, handleSubmit, reset, watch } = useForm();

    const contactDataSchema = ContactDataSchema.map((el, index) => (
        <Field key={index} {...{ ...el, register, watch }} />
    ));
    return <div>
        <section className='adress'>
            <h1>Dane kontaktowe</h1>
            <h4>Numer telefonu: 12 123 12 12 </h4>
            <h4>Adres mailowy: Sklep@Zrolkami.Pl </h4>
            <h4>Adres: ul.Rolkowa 12 Warszawa</h4>
            <h4>Godziny otwarcia: Pn-Pt: 10-20, Sob:11-14</h4>
        </section>
        <div className='contact'>
            <h2 className="contact__title">Formularz kontaktowy</h2>
            <fieldset className="contact__fieldset">
                {contactDataSchema}
                <button>Wyślij</button>
            </fieldset></div>
    </div>;
};
