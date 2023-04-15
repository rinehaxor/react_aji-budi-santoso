import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function FormComponent() {
  const [formData, setFormData] = useState([{ id: '' }]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    setFormData([...formData, { ...data, id: formData.length + 1 }]);
  };

  const handleDelete = (index) => {
    const newData = [...formData]; // membuat salinan array formData
    newData.splice(index, 1); // menghapus data dari array newData
    setFormData(newData); // memperbarui state formData dengan newData yang sudah dihapus
  };

  const handleEdit = (index) => {
    const newData = [...formData]; // membuat salinan array formData
    const editedData = newData[index]; // mendapatkan data yang akan diedit berdasarkan index
    reset(editedData); // mereset form dan mengisi dengan data yang akan diedit
    newData.splice(index, 1); // menghapus data yang akan diedit dari array newData
    setFormData(newData); // memperbarui state formData dengan newData yang sudah diedit
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('firstName', {
            required: 'Email harus diisi',
            mode: { onchange: 'onChange' },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: 'nama tidak valid',
            },
          })}
        />
        <div id="emailHelp" className="form-text text-danger">
          {errors?.firstName?.message}
        </div>
        <input {...register('lastName')} />

        <input {...register('radio')} type="radio" value="A" />
        <input {...register('radio')} type="radio" value="B" />
        <button type="submit">Submit</button>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product Name</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, id) => (
            <tr key={id}>
              <td>
                {' '}
                <Link className="text-decoration-none" to={`/${data.id}`}>
                  {data.id}
                </Link>
              </td>
              <td> {data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.radio}</td>

              <td>
                <button onClick={() => handleDelete(id)}>Delete</button>
                <button onClick={() => handleEdit(id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
        {formData.map((data, index) => (
          <li key={index}>
            {data.firstName} {data.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}
