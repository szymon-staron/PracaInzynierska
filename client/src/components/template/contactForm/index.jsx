import React from 'react';
import classNames from 'classnames';
import './style.scss';

export const ContactForm = ({ type, label, name, contact, watch }) => {
    const notEmpty = watch(name);
    return (

        <div className="form__div">
            <input
                name={name}
                id={name}
                className="form__input"
                type={type}
                value={contact.value}
                {...contact(name)}
            />
            <label
                htmlFor={name}
                className={classNames('form__label', { form__notEmpty: notEmpty })}
            >
                {label}
            </label>
        </div>
    );
};
