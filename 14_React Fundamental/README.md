# Summary React Fundamental

## Apa itu JSX

React memiliki fungsi render . Fungsi render menentukan output HTML dari komponen React. JSX (Ekstensi JavaScript), adalah ekstensi Bereaksi yang memungkinkan penulisan 
kode JavaScript yang terlihat seperti HTML. Dengan kata lain, JSX adalah sintaks mirip HTML yang digunakan oleh React yang memperluas ECMAScript sehingga sintaks mirip 
HTML dapat berdampingan dengan kode JavaScript/React.

#### Contoh Penggunaan JSX

```jsx
import React, { Component } from 'react';  
class App extends Component{  
   render(){  
      return(  
         <div>  
            <h1>JavaTpoint</h1>  
          <h2>Training Institutes</h2>  
            <p>This website contains the best CS tutorials.</p>  
         </div>  
      );  
   }  
}  
export default App;  
```
#### Output
![image](https://user-images.githubusercontent.com/71266163/223425499-1a9d7604-0aa5-4d83-8b88-ebd83edb8cf1.png)


## React lifecycle
React Lifecycle merupakan serangkaian metode atau fungsi yang dipanggil oleh React untuk mengontrol dan menangani proses rendering komponen.

- Mounting: Tahap mounting terjadi ketika sebuah komponen pertama kali dibuat atau dimasukkan ke dalam DOM.
- Updating: Tahap updating terjadi ketika sebuah komponen mengalami perubahan prop atau state.
- Unmounting: Tahap unmounting terjadi ketika sebuah komponen dihapus dari DOM. 

## Styling React 

- `CSS biasa`: Kita dapat menggunakan CSS biasa dengan menuliskan file CSS terpisah dan mengimportnya ke dalam file komponen React.
- `CSS Modules` :  CSS Modules adalah teknik styling yang memungkinkan kita untuk mengakses kelas CSS sebagai objek di dalam file JavaScript. Contoh penggunaannya adalah `className = {style.card}` dengan `style` adalah nama css module yang sudah di import dan `card` adalah nama komponen.
- `CSS Inline` :  Selain itu, kita juga dapat menuliskan CSS secara inline menggunakan atribut style. contoh penggunaanya adalah `style={{paddingBottom:10}}` dengan peraturan react menggunakan tanda `{{}}` secara dua kali untuk react mengetahui bahwa itu style .
