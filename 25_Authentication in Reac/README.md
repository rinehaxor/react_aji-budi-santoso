# Summary Authenticatication in React

## Authtication React

Authentication pada React adalah proses verifikasi pengguna untuk memastikan bahwa pengguna yang melakukan akses ke suatu fitur atau sumber daya memiliki hak akses yang sah.

## Library untuk Mendapatkan Cookies
Library JS Cookies bekerja dengan cara menyimpan data pada komputer pengguna dalam bentuk file teks kecil yang disebut cookies. Cookies ini dapat digunakan untuk menyimpan informasi seperti preferensi pengguna, data login, dan lain-lain.

## Penggunaan Local Storage untuk Auth

Local storage dapat digunakan sebagai alternatif penyimpanan sementara pada browser untuk membangun fitur authentication pada aplikasi web.

`Contoh Penggunaan`

``` jsx

 const onSubmit = (data) => {
    if (data.email === 'admin@gmail.com' && data.password === 'admin123') {
      localStorage.setItem('user', 'userToken');
      navigate('/product');
    } else {
      setLoginError('Email atau password salah');
    }
  };
```
