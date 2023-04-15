# Summary Global State Management and Data Fetching

## Global State
Pengelolaan state global dalam React adalah pendekatan yang digunakan untuk mengelola dan membagi data atau keadaan aplikasi secara global di seluruh komponen React. Dalam aplikasi React yang lebih besar dan kompleks,  diperlukan solusi pengelolaan state yang lebih terstruktur untuk  aplikasi tetap mudah dikelola.

## Library Global State yang sering digunakan

### Jotai

Jotai adalah pustaka pengelolaan state atomik untuk aplikasi React yang bertujuan untuk menyederhanakan pengelolaan state dengan menggabungkan kemudahan penggunaan dan fleksibilitas. 
``` jsx
import { atom } from 'jotai';

const counterAtom = atom(0);
import React from 'react';
import { Provider, useAtom } from 'jotai';
import { counterAtom } from './atoms';

function Counter() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default function App() {
  return (
    <Provider>
      <Counter />
    </Provider>
  );
}
```
masih banyak juga library global state yang digunakan juga seperti `Recoil`, `Redux` dan `zustand`.

## Data Fetching
Data fetching adalah proses mengambil atau memuat data dari sumber eksternal, seperti API atau basis data Dalam konteks pengembangan aplikasi, data fetching sering digunakan untuk memperoleh data yang dibutuhkan untuk ditampilkan .

### Contoh Penggnaan Library Data Fetching SWR

``` jsx
import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};

function App() {
  const { data, error } = useSWR('https://api.example.com/data', fetcher);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```
