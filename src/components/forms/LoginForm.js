import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const LoginForm = ({ onSubmit }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit({ username, password });
    };

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card shadow p-4'>
                        <h2 className='text-center mb-4'>Login</h2>

                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label className='form-label'>Username</label>
                                <input type='text' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Password</label>
                                <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                            <p className='mb-3>'>Don't have an account? <Link to='/register'>Register</Link></p>
                            <button type='submit' className='btn btn-primary w-100'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;