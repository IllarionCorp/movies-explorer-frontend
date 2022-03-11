import Form from '../Form/Form';

export default function SignInFormInput(props) {
    return (
        <Form typeForm={props.typeForm} buttonText={props.buttonText} question={props.question} link={props.link} linkText={props.linkText}>
            <div className='form-inputs'>
                <p className='form-input-name'>E-mail</p>
                <input type='email' className='form-input' />
                <span className='form-input-error'>aaaaaaaa</span>
                <p className='form-input-name'>Пароль</p>
                <input type='password' className='form-input' />
                <span className='form-input-error'>aaaaaaaa</span>
            </div>
        </Form>
    );
}
