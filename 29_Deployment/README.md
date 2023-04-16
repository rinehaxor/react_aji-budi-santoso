# Deployment

## Pengertian Deployment
Deploy adalah proses mengunggah dan menjalankan aplikasi atau perangkat lunak pada lingkungan server atau infrastruktur yang sesuai, seperti server web, cloud, atau platform sebagai layanan (PaaS). Tujuan dari proses deploy adalah untuk memastikan aplikasi atau perangkat lunak dapat diakses dan digunakan oleh pengguna akhir atau klien.

## Penyedia Deployment
- Heroku: Platform sebagai layanan (PaaS) yang memudahkan pengembang untuk membangun, menjalankan, dan mengelola aplikasi dalam berbagai bahasa pemrograman, seperti Node.js, Ruby, Java, Python, dan lainnya.

- Netlify: Layanan hosting dan deployment untuk aplikasi web statis dan front-end yang memiliki integrasi dengan berbagai sistem kontrol versi, seperti Git, dan mendukung teknologi seperti JAMstack.

- Vercel: Platform yang dirancang khusus untuk aplikasi web berbasis React, Next.js, dan Node.js yang menawarkan deploy otomatis dari repositori Git dan berbagai fitur untuk meningkatkan kinerja aplikasi.

## Cara Deploy Vercel
- Buat akun Vercel: Kunjungi situs web Vercel (https://vercel.com) dan buat akun menggunakan GitHub, GitLab, atau Bitbucket, atau dengan alamat email Anda.

- Tambahkan repositori GitHub: Setelah masuk ke akun Vercel, klik tombol "New Project" pada dasbor. Pada langkah ini, Vercel akan meminta izin untuk mengakses repositori Anda di GitHub. Berikan izin yang diperlukan.

- Pilih repositori: Setelah memberikan izin, Anda akan melihat daftar repositori yang tersedia. Pilih repositori yang ingin Anda deploy dan klik tombol "Import". Vercel akan mengimpor repositori dan mengenali jenis proyek yang digunakan (misalnya, Next.js atau React).

- Konfigurasi deploy: Pada langkah ini, Anda dapat menyesuaikan pengaturan seperti nama proyek, variabel lingkungan, dan pengaturan tambahan lainnya. Setelah selesai, klik tombol "Deploy" untuk memulai proses deploy.

- Tunggu hingga proses deploy selesai: Vercel akan mem-build dan melakukan deploy aplikasi Anda. Setelah selesai, Anda akan diberikan URL aplikasi yang telah di-deploy.

- Otomatisasi deploy: Setelah aplikasi di-deploy, Vercel akan secara otomatis mengintegrasikan dengan repositori GitHub Anda. Setiap kali Anda melakukan push ke repositori atau menggabungkan (merge) pull request, Vercel akan mem-build dan mendeploy aplikasi secara otomatis.
