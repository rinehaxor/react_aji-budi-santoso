import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.email === 'admin@gmail.com' && data.password === 'admin123') {
      localStorage.setItem('user', 'userToken');
      navigate('/product');
    } else {
      setLoginError('Email atau password salah');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <div className="mb-3">
          <input
            {...register('email', {
              required: 'Email wajib diisi',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email tidak valid',
              },
            })}
            type="email"
            className="form-control"
            id="email"
          />
          <div className="form-text text-danger">{errors?.email?.message}</div>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            {...register('password', {
              required: 'Password wajib diisi',
              minLength: {
                value: 8,
                message: 'Harus memiliki 8 karakter',
              },
            })}
            type="password"
            className="form-control"
            id="password"
          />
          <div className="form-text text-danger">{errors?.password?.message}</div>
        </div>
        {loginError && (
          <div className="alert alert-danger" role="alert">
            {loginError}
          </div>
        )}
        <Button className="btn btn-primary">Login</Button>
        <Button className="btn btn-light">
          <Link to="/register">Register</Link>
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
