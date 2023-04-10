# Summary GrqphQL

## Pengertian GrphQL

GraphQL adalah sebuah bahasa query untuk API (Application Programming Interface) yang memungkinkan client untuk mengirimkan permintaan dengan struktur yang spesifik untuk mendapatkan data yang dibutuhkan dari server.

## Platform Pengembangan GraphQL

Hasura adalah sebuah platform pengembangan aplikasi yang berbasis pada GraphQL. Platform ini memungkinkan pengguna untuk membangun aplikasi web dan mobile yang cepat dan efisien dengan menggunakan GraphQL sebagai bahasa query untuk API.

## Contoh Penggunaan Query GraphQL

`Query`

```graphql
query MyQuery {
  user {
    id
    name
    created_at
  }
}
```

`Mutation`

```graphql
mutation MyMutation {
  insert_user_one(object: { created_at: "2023\\04\\08", email: "vanis@gmail.com", id: "2", password: "vanispassowrd", name: "vanis" }) {
    id
  }
}
```
