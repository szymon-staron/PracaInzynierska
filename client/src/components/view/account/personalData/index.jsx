import React, { useEffect } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { PersonalDataSchema } from "../../../../db";
import { Field } from "components/template/field";
import { useForm } from "react-hook-form";
import { client } from "api";

export const PersonalData = () => {
    const { user, token } = useSelector((state) => state.auth);

    const { register, handleSubmit, watch, reset } = useForm();

    useEffect(() => {
        reset(user);
    }, []);

    const onSubmit = async (data) => {
        try {
            const { result } = await client("users/update", token, data);
            if (result) {
                reset(data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const personalData = PersonalDataSchema.map((el, index) => (
        <div className="eachData">
            <Field key={index} {...{ ...el, register, watch }} />
        </div>
    ));
    return (
        <div>
            <h1 className="register__title">Dane użytkownika</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="personalData__fieldset">
                    {personalData}
                    <div className="register_button">
                        <button>Edytuj</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};
