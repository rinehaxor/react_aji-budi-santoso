import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    // kode untuk menangani submit form
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <div className="mb-3">
          <input
            {...register('email', {
              required: true,
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email tidak valid',
              },
            })}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
              required: true,
              minLength: {
                value: 8,
                message: 'Harus memiliki 8 karakter',
              },
            })}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            className="form-control"
            id="password"
          />
          <div className="form-text text-danger">{errors?.password?.message}</div>
        </div>

        <Button className="btn btn-primary">Login</Button>
        <Button className="btn btn-light">
          <Link to="/register">Register</Link>
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
