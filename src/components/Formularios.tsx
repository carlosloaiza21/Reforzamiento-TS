import { useForm } from '../hooks/useForm';

export const Formularios = () => {

    const {onChange, state} = useForm({
        email: 'Carlos@fff.com',
        password: '1212121'
    });

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={state.email}
                onChange={({target})=>onChange(target.value,'email')}
            />

            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="password"
                value={state.password}
                onChange={({target})=>onChange(target.value,'password')}
            />

            <code>
                <pre>{JSON.stringify(state, null, 2)}</pre>
            </code>
        </>
    )
}
