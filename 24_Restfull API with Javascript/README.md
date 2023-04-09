# Restfull API with Javasript

## HTTP Request Method Umum yang sering digunakan

- `GET` : Digunakan untuk mengambil data dari server. GET biasanya digunakan untuk membaca data atau informasi dari server.
- `POST` : digunakan untuk mengirimkan data ke server. POST umumnya digunakan untuk menambahkan data baru ke server atau mengubah data yang sudah ada.
- `PUT` : PUT digunakan untuk mengganti seluruh  data yang baru atau mengubah bagian dari data yang sudah ada.
- `DELETE` : DELETE digunakan untuk menghapus data yang tidak diperlukan dari server.

## Contoh HTTP Request

`Axios` adalah sebuah library JavaScript yang digunakan untuk melakukan HTTP request pada browser atau pada server menggunakan Node.js. Library ini menyediakan cara yang lebih mudah dan sederhana untuk melakukan request pada server, baik dengan menggunakan XMLHttpRequest (XHR) atau Fetch API.

## Contoh Penggunaan HTTP Request

- `GET` :
``` jsx
const getAllData = async () => {
    const res = await fetch('https://642bc710208dfe25471f3f59.mockapi.io/products');
    const data = await res.json();
    setData(data);
  };
```
- `POST` :
``` jsx
const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}`, data);
      console.log(response.data);
      reloadData();
    } catch (error) {
      console.error(error);
  
    }
```
- `PUT` :
``` jsx
const updateProduct = async (data) => {
    try {
      const response = await axios.put(`${BASE_URL}/${currentProduct.id}`, data);
      console.log(response.data);
      setEditing(false);
      setCurrentProduct(null);
      reloadData();
    } catch (error) {
      console.error(error);
    }
  };
```
- `DELETE`:
``` jsx
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      reloadData();
    } catch (error) {
      console.error(error);
    }
  };
```
