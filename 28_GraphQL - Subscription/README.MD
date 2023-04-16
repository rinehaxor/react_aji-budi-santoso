# Summary GraphQL - Subscription

## Websocket

WebSocket adalah protokol komunikasi yang memungkinkan interaksi dua arah antara klien dan server melalui koneksi yang tetap (persistent) dan real-time. WebSocket dirancang untuk bekerja di atas koneksi TCP dan merupakan alternatif yang efisien dibandingkan dengan polling HTTP yang lebih tua.

## Subscription GrqphQL

Subscription dalam GraphQL adalah mekanisme yang memungkinkan klien untuk menerima notifikasi real-time dari server setiap kali ada perubahan data atau event tertentu terjadi. Subscription menggunakan protokol WebSocket untuk menjaga koneksi tetap antara klien dan server, sehingga server dapat mengirimkan data kepada klien secara langsung setiap kali ada perubahan yang relevan.

## Penggunakan Subscription GraphQL

```jsx
const BARANG_DITAMBAH = gql`
  subscription {
    barangDitambah {
      id
      nama
      harga
    }
  }
`;
function BarangDitambah() {
  const { data, loading, error } = useSubscription(BARANG_DITAMBAH);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      Barang baru: {data.barangDitambah.nama}, Harga: {data.barangDitambah.harga}
    </div>
  );
}
```
