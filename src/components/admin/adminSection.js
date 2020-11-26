import React, { setState, useState } from 'react';
import swal from 'sweetalert';
import { signIn } from '../../services/function';


const Adminis = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const login = async ({ email, password }) => {
        try {
            await signIn(email, password)
            swal({title: 'Bienvenido', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false}).then(value=>{window.location.href = 'admin/inicio'});
        } catch (error) {
            setError({
                error: error.message
            })
            swal("Datos incorrectos", "Contraseña o correo incorrectos", "error");
        }
    }
    return (
        <>
            <div className='container mt-4'>
                <form>

                    <h3 className='text-center'>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPass(event.target.value)} />
                    </div>

                </form>
                <button className="btn btn-dark btn-lg btn-block" onClick={() => {
                    //signUp('teste@gmail.com','1234567');
                    //signIn(email,pass);
                    login({email: email, password:pass}); 
                }}>Sign in</button>
            </div>
        </>
    );
}
export default Adminis;