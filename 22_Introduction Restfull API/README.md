# Summary Introduction Restfull API

## Restfull API
RESTful API (Representational State Transfer Application Programming Interface) adalah sebuah standar arsitektur web yang digunakan untuk mengirim dan menerima data antara client dan server.


## Format Data API

- `JSON`: Format data API JSON (JavaScript Object Notation) adalah format data yang sangat umum digunakan dalam RESTful API
``` JSON
{
   "nama": "John Doe",
   "umur": 30,
   "alamat": {
       "jalan": "Jl. Sudirman No. 10",
       "kota": "Jakarta"
   },
   "hobi": ["membaca", "berenang", "mendaki gunung"]
}
```
- `XML` : Format data API XML (Extensible Markup Language) adalah format data lain yang digunakan dalam RESTful API. XML adalah format data yang lebih kompleks dan struktural dibandingkan dengan JSON.
``` XML
<data>
   <nama>John Doe</nama>
   <umur>30</umur>
   <alamat>
      <jalan>Jl. Sudirman No. 10</jalan>
      <kota>Jakarta</kota>
   </alamat>
   <hobi>membaca</hobi>
   <hobi>berenang</hobi>
   <hobi>mendaki gunung</hobi>
</data>

```

## HTTP Response Code Paling Sering Muncul

- `200` :Kode 200 menandakan bahwa request berhasil, dan server telah mengirimkan respons yang diharapkan ke client.
- `201` :Kode 200 menandakan bahwa request berhasil, dan server telah mengirimkan respons yang diharapkan ke client.
- `400` :kode status 400 antara lain adalah data yang tidak lengkap, data yang tidak valid, atau format data yang tidak sesuai dengan yang diharapkan oleh server.
- `404` :Kode status 404 menunjukkan bahwa terdapat kesalahan pada sisi client dalam melakukan request, dan bukan pada sisi server.
- `401` : Kode status 401 diikuti dengan pesan error yang menjelaskan bahwa akses ke sumber daya yang diminta tidak diizinkan atau tidak dapat dilakukan oleh client karena tidak memiliki akses yang cukup. 
- `405` :  Kode status 405 biasanya digunakan untuk menunjukkan bahwa client menggunakan method HTTP yang salah atau tidak diizinkan oleh server untuk mengakses sumber daya yang diminta.
- `500` :Kode status 500 biasanya digunakan untuk menunjukkan bahwa terdapat masalah pada sisi server dalam memproses request yang diterima dari client.
