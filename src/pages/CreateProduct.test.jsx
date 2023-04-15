import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import store from '../store';
import Form from '../components/createProduct/Form';
import { BrowserRouter } from 'react-router-dom';

describe('Form', () => {
  test('validates  product name input', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>
    );

    const productName = screen.getByTestId('product-name-input');
    fireEvent.change(productName, { target: { value: 'test' } });
    expect(screen.getByTestId('product-name-input').value).toBe('test');
  });
  test('product name wajib di isi', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>
    );

    const productName = screen.getByTestId('product-name-input');
    fireEvent.change(productName, { target: { value: '' } });

    fireEvent.submit(screen.getByTestId('form'));
    expect(screen.getByTestId('name-error').textContent).toBe('Product harusnya wajib di isi');
  });
  test('product name tidak mengandung simbol', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>
    );
    const productName = screen.getByTestId('product-name-input');
    fireEvent.change(productName, { target: { value: 'test@test' } });
    expect(screen.getByTestId('name-error').textContent).toBe('Product name harus tidak mengandung simbol');
  });
  test('product name maksimal 25 huruf', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>
    );
    const productName = screen.getByTestId('product-name-input');
    fireEvent.change(productName, { target: { value: 'teks ini sangat panjang sekali tidak boleh lebih 25' } });
    expect(screen.getByTestId('name-error').textContent).toBe('Product name tidak boleh lebnih 25 karakter');
  });
});
