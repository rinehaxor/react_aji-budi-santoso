# Summary React  Testing 

## React Testing 
Pengujian React (React testing) adalah proses validasi kode dalam aplikasi React untuk memastikan bahwa komponen dan fitur aplikasi bekerja dengan benar dan sesuai dengan harapan.

## Jenis Pengujian di React

- unit (Unit testing):  proses pengujian komponen atau fungsi individu dalam aplikasi secara terisolasi. 
- integrasi (Integration testing) : proses pengujian interaksi antara beberapa komponen atau bagian dari aplikasi untuk memastikan bahwa mereka bekerja dengan baik bersama. 
-  end-to-end (End-to-end testing): end-to-end adalah proses pengujian aplikasi secara menyeluruh, dari awal hingga akhir, dalam lingkungan yang meniru pengalaman pengguna sebenarnya.


## Contoh Penggunaan React Testing dengan Library Vitest

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

``` jsx
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../src/Counter';

test('Counter component works correctly', () => {
  const { getByText } = render(<Counter />);
  const button = getByText('Increment');

  expect(getByText('Count: 0')).toBeInTheDocument();
  userEvent.click(button);
  expect(getByText('Count: 1')).toBeInTheDocument();
});
```
