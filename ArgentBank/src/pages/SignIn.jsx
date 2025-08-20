import Field from "../components/Field";
import Button from "../components/Button";
import { FIELD_TYPES } from "../utils/fieldTypes";
import { BUTTON_TYPES } from "../utils/buttonsTypes";
import Form from "../containers/Form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function SignIn() {
    return (
        <main className='main bg-dark'>
            <section className='sign-in__content'>
                <FontAwesomeIcon icon={faUserCircle} className='sign-in__icon' />
                <h1>Sign In</h1>
                <Form onSubmit={(e) => onSubmit(e)}>
                    <Field
                        type={FIELD_TYPES.INPUT_TEXT}
                        label='Username'
                        id='username'
                        name='username'
                        className='input__wrapper'
                        required
                    />
                    <Field
                        type={FIELD_TYPES.INPUT_PASSWORD}
                        label='Password'
                        id='password'
                        name='password'
                        className='input__wrapper'
                        required
                    />
                    <Field
                        type={FIELD_TYPES.INPUT_CHECKBOX}
                        label='Remember me'
                        id='remember-me'
                        name='remember-me'
                        className='input__remember'
                    />
                    <Button
                        type={BUTTON_TYPES.SUBMIT}
                        className='sign-in__button'
                        children='Sign In'
                    />
                    {loginError ? (
                        <p className='login-error'>Identifiant ou mot de passe érroné.</p>
                    ) : null}
                </Form>
            </section>
        </main>
    );
}

export default SignIn;