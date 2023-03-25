import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container my-4">
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="mb-3">
          <label htmlFor="inputFirstName" className="form-label">
            First Name
          </label>
          <input
            {...register('firstName', {
              required: 'Harus di Isi',
              minLength: {
                value: 3,
                message: 'Minimal 3 karakter',
              },
            })}
            type="text"
            className="form-control"
            id="inputFirstName"
          />
          <div id="emailHelp" className="form-text text-danger">
            {errors?.firstName?.message}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputFirstName" className="form-label">
            Last Name
          </label>
          <input
            {...register('lastName', {
              required: 'Harus di Isi',
              minLength: {
                value: 3,
                message: 'Minimal 3 karakter',
              },
            })}
            type="text"
            className="form-control"
            id="inputLastName"
          />
          <div id="emailHelp" className="form-text text-danger">
            {errors?.lastName?.message}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail1" className="form-label">
            Email address
          </label>
          <input
            {...register('email', {
              required: 'Email harus diisi',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email tidak valid',
              },
            })}
            type="text"
            className="form-control"
            id="inputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-danger">
            {errors?.email?.message}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            {...register('password', {
              required: 'Password harus diisi',
              minLength: {
                value: 8,
                message: 'Password harus memiliki panjang minimal 8 karakter',
              },
            })}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <div className="form-text text-danger">{errors?.password?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            {...register('confirmPassword', {
              required: 'Confirm Password harus diisi',
              validate: (value) => value === password.current || 'Password tidak cocok',
            })}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <div className="form-text text-danger">{errors?.confirmPassword?.message}</div>
        </div>
        <Button className="btn btn-primary">Register</Button>
        <Button className="btn btn-light">
          <Link to="/login">Login</Link>
        </Button>
      </form>
    </div>
  );
}
