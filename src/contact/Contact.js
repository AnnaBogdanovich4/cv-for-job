import containerStyle from "./../common/styles/Container.module.css"
import {useForm, ValidationError} from '@formspree/react';
import style from "./Contact.module.css"

export const Contact = () => {
    const [state, handleSubmit] = useForm("xayzpqgn");
    if (state.succeeded) {
        return <div className={style.message}><p>Thanks for joining!</p></div>;
    }
    return (
        <div className={style.contacts} id="contacts">
            <div className={`${containerStyle.container} ${style.container}`}>
                <h3>Contact</h3>
                {/*    <form action="mailto:bogdanovicanna4@gmail.com" method="post"*/}
                <form onSubmit={handleSubmit} className={style.form}>
                    {/*action="https://formspree.io/f/xayzpqgn"*/}
                    {/*method="post"*/}
                    {/*enctype="text/plain" className={style.form}>*/}
                    <input type="text" name="username" placeholder="Name" required/>
                    <input type="tel" name="phone" placeholder="Phone"/>
                    <input type="email" id="email" className={'style.email'} name="email" placeholder="E-mail"/>
                    <textarea placeholder="Message" name="message" id="message"> Message </textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>
                    <button type='submit' disabled={state.submitting}>Send message</button>
                </form>
            </div>
        </div>
    )
}


