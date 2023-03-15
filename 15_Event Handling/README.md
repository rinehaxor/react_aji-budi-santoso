# Summary Event Handling

## Apa itu State

State pada React JS adalah suatu objek yang digunakan untuk menyimpan dan memanipulasi data pada sebuah komponen. State hanya bisa diakses dan dimanipulasi oleh komponen itu sendiri, tidak bisa diakses oleh komponen lain.

#### Contoh Penggunaan State

```jsx
import React, { useState } from 'react';

function Example() {
  // Deklarasi variabel state baru yang kita sebut "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anda menekan sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik saya</button>
    </div>
  );
}
```

## Perbedaan Stateful dan Stateless

- Stateful adalah komponen yang dapat menyimpan dan mengelola state dalam aplikasi web.
- Stateless adalah komponen yang tidak memiliki state. Stateless hanya menerima props sebagai input .

#### Contoh Penggunaan Stateful

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Hitungan: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Tambah 1</button>
      </div>
    );
  }
}

export default Counter;
```

#### Contoh Penggunaan Stateless

```jsx
import React from 'react';

function Greeting(props) {
  return <h1>Halo, {props.nama}!</h1>;
}

export default Greeting;
```

## Event Handler React yang sering digunakan

- `onClick`: digunakan ketika pengguna mengklik elemen tertentu, seperti tombol.
- `onChange` : digunakan ketika nilai pada elemen form input berubah, seperti pada input teks.
- `onSubmit` : digunakan ketika form dikirim, seperti pada saat pengguna mengklik tombol "Submit" pada form.
