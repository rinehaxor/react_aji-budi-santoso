# Summary React Routing

## Routes
Router React adalah salah satu fitur  React yang digunakan untuk menangani navigasi antarhalaman (routing) pada aplikasi web.

- SPA (Single Page Application)
SPA adalah aplikasi web yang hanya memiliki satu halaman utama yang memuat seluruh konten aplikasi.
- MPA (Multi Page Application)
 MPA adalah aplikasi web yang terdiri dari beberapa halaman yang berbeda. Setiap kali pengguna menavigasi ke halaman yang berbeda, server akan memuat ulang seluruh halaman tersebut
 
## Use URL Params

"URL Params" adalah parameter yang dimasukkan ke dalam URL dan digunakan untuk mengirim informasi atau nilai dari satu halaman ke halaman lain pada aplikasi web. Penggunaan URL Params memungkinkan pengembang untuk membuat aplikasi web yang lebih dinamis dan interaktif dengan menyesuaikan konten pada halaman berdasarkan nilai parameter yang diberikan pada URL.

## React Hook Routing

"useParams" adalah hook pada React Router yang digunakan untuk mengambil nilai parameter dari URL pada komponen React. Ketika pengguna menavigasi ke halaman yang berbeda dengan parameter yang berbeda pada URL, "useParams" akan mengambil nilai parameter tersebut dan membuatnya tersedia dalam bentuk objek yang dapat digunakan dalam komponen React.
``` jsx
const params = useParams();
  const productId = params.productId;
  ```
  
  
