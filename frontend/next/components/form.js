import sendForm from "@/lib/api/api";
import delve from "dlv";
import {validForm} from "@/lib/validate";
import React, {useState} from "react";
import notifications from '@/styles/notific.module.css';


export function Form({inputs, button, handleSent, action}) {
    const [textNotific, setErrorNotific] = useState(null);

    async function handleSendClick(e) {
        e.preventDefault();
        const button = e.target;
        button.disabled = true;
        const form
            = e.target.closest("form");
        try {
            const { data, status, errors } = validForm(form);
            if (status) {
                const res = await sendForm(data, form.action);
                if (res.errors) {
                    throw new Error(res.errors)
                }
                handleSent(true);
                return true;
            }
            button.disabled = false;
            setErrorNotific({ field: errors[0].field, text: errors[0].textError });
        } catch (e) {
            button.disabled = false;
            alert(e.message);
        }
    }

    function handlOnKey(e) {
        setErrorNotific(null);
    }

    const renderedInputs = inputs.map((input, index) => {
        let nameInput = delve(input, "nameInput");
        if(nameInput === 'text') {
            return (
                <div className={`form__input-wrapper form-item form-text ${nameInput ?? ''} ${notifications.text}`}>
                    {
                        (textNotific && nameInput === textNotific.field) ?
                            <Notifications text={textNotific.text}/> : null

                    }
                    <textarea
                            className="pop-up__review"
                            name="text"
                            placeholder={input.placeholder}
                            required={input.required}
                            onKeyUp={handlOnKey}
                    ></textarea>
                </div>
            )
        }

        return (
            <div className={`form__input-wrapper form-item form-text ${nameInput ?? ''}`}>
                {
                    (textNotific && nameInput === textNotific.field) ?
                        <Notifications text={textNotific.text}/> : null

                }
                {<input className="form__input wm-input-default"
                       name={nameInput}
                       placeholder={input.placeholder}
                       type="text"
                       size="1"
                       maxLength="100"
                       required={input.required}
                       onKeyUp={handlOnKey}
                />}
            </div>
        )
    })
    return (
        <form className="form" method="post" action={action}>
            {renderedInputs}
            <div className="form__button-wrapper form-submit">
                <button onClick={handleSendClick} className="pulse__full form__button wm-input-default" type="submit" id={button.url ?? ''}>
                    {button.label ?? ''}
                </button>
            </div>
        </form>
    )
}

function Notifications({text}) {
    return (
        <ul className={`${notifications.position} ${notifications.animation} ${notifications.after}`}>
            <li className={notifications.notifications_item}>
                <i className="material-icons">{text ?? '...'}</i>
            </li>
        </ul>
    )
}