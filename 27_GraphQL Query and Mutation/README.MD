# Summary GraphQL Query dan Mutaion

## Perbedaan Query dan Mutaion

Dalam GraphQL, terdapat dua operasi utama yang digunakan untuk berinteraksi dengan API: Query dan Mutation berikut perbedaannya

`Query` : 
- Query merupakan operasi baca dalam GraphQL.
- Fungsinya adalah untuk mengambil data dari server.
- Biasanya query digunakan saat Anda ingin meminta informasi dari server tanpa mengubah status data yang ada.
- Dalam sintaks GraphQL, query diawali dengan kata kunci query.

`Mutation` :
- Mutation merupakan operasi tulis dalam GraphQL.
- Fungsinya adalah untuk mengubah data di server, seperti menambah, mengubah, atau menghapus data.
- Mutation digunakan saat Anda ingin membuat perubahan pada data yang ada di server.
- Dalam sintaks GraphQL, mutation diawali dengan kata kunci mutation.

## Penyedia Layanan Platform  as a service

`Railway` :
- Railway adalah platform PaaS yang fokus pada kemudahan penggunaan dan pengembangan aplikasi berbasis cloud.
- Railway juga menyediakan integrasi dengan berbagai layanan tambahan, seperti basis data, penyimpanan, dan sistem antrian.
- Railway menawarkan berbagai paket harga, termasuk opsi gratis dengan sumber daya terbatas.

`Heroku` :
- Heroku adalah platform PaaS yang telah lama ada dan populer di kalangan pengembang.
- Heroku memungkinkan pengembang untuk membuat, menguji, dan melakukan deploy aplikasi berbasis cloud dengan cepat dan mudah.
- Pengembang dapat mengelola aplikasi, mengatur skalabilitas, dan memonitor kinerja melalui Heroku Dashboard.

## Penggunaan Mutaion dan Query

`Query`

``` jsx
query {
  listBarang {
    id
    nama
    harga
  }
}
```
`Mutaion`

``` jsx
mutaion
mutation {
  tambahBarang(nama: "Laptop", harga: 10000000) {
    id
    nama
    harga
  }
}

```
