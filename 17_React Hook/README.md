# Summary React Hook

## React Hook

Sebelum React versi 16.8, pengembang dapat handle state dan fitur React lainnya hanya menggunakan komponen kelas. Namun dengan versi 16.8, React memperkenalkan pola baru yang disebut ` Hooks `. Dengan React Hooks, kita dapat menggunakan state, dan fitur React lainnya, dalam function komponen. Ini memberdayakan pengembang untuk melakukan pemrograman function di React.


## React Hook yang sering digunakan

- `useState` : Hook useState pada React memungkinkan Anda memiliki variabel state pada function komponen. Anda dapat menyertakan nilai awal state pada fungsi ini, dan ia akan mengembalikan sebuah variabel dengan nilai state saat ini (tidak selalu sama dengan nilai awal) dan fungsi lain untuk memperbarui nilai tersebut.
``` jsx
const [count.setCount] = useState(0);
```
- Hook useEffect merupakan gabungan yang halus yang berarti memberikan efek samping pada komponen React seperti  lifecycle componentDidMount, componentDidUpdate, dan componentWillUnmount.
``` jsx
useEffect(() => { 
console.log("I Only run once (When the component gets mounted)") 
```

## Custom Hook 
Custom Hook adalah fitur pada React yang memungkinkan pengguna untuk membuat fungsi-fungsi yang dapat digunakan kembali dalam komponen-komponen yang berbeda. 
