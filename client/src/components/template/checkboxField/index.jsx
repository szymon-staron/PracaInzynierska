import "./style.scss";
import React from 'react';



export const CheckboxField = ({ name, value, onchange, label }) => {


    return (
        < div className="checkbox__wrapper">
            <input className="checkbox__input"
                {...{ type: "checkbox", name, id: name, value, onchange }}

            />
            <label htmlFor={name}
                className="checkbox__label">{label}
            </label>
        </div >
    )
}

