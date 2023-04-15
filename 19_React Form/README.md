# summary React Form

## React Form

React Form adalah fitur yang memungkinkan untuk membuat form interaktif dengan mudah menggunakan JavaScript. Menggunakan React Form dapat membuat validasi form, menangani pengiriman data, dan memperbarui tampilan berdasarkan input pengguna.


## Controlled Component dan Uncontrolled Component

- Controlled component adalah elemen form yang dikontrol sepenuhnya oleh React. Nilai form ini disimpan dalam state dan hanya dapat diubah melalui setState() 
- uncontrolled component adalah elemen form yang dikontrol oleh browser. Nilai  form ini tidak disimpan dalam state dan dapat diakses melalui referensi DOM. 


## React Hook Form

React Hook Form adalah sebua library yang digunakan untuk membuat form pada react dan mempermudah dalam tahap pengembangan.

**Fiture React Hook Form**

- Built with performance, UX and DX in mind
- Embraces native HTML form validation
- Out of the box integration with UI libraries
- Small size and no dependencies
- Support Yup, Zod, AJV, Superstruct, Joi and others


### Contoh Penggunaan React Hook Form
Dengan mengimport library dan menggunakan userForm()

```jsx
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}```
