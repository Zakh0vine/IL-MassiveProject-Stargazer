Assalamualaikum Warahmatullahi Wabarakatuh, terima kasih kepada mentor - mentor Infinite Learning yang memandu kami dalam pembuatan project dan rekan - rekan team website yang telah berkerja sama dengan baik. Saya harap catatan ini dapat membantu untuk memahami project yang telah kami kembangkan.

Project ini dikembangkan dengan tujuan membantu mengelola dan memanajemen obat pada apotek independen dimana pada kasus biasanya apotek independen masih mengandalkan pengelolaan secara manual dan berdasarkan daya ingat karyawan atau pemilik apotek sendiri. Project ini dikembangkan oleh dua team yaitu team mobile dan team website.
Project ini dikembangkan secara dinamis dimana team mobile membuat aplikasi untuk melakukan input data obat baru dan obat keluar bedasarkan kadaluarsa, rusak, atau habis. Sedangkan website ditujukan untuk mengelola data obat yang telah di input dari aplikasi mobile menggunakan fitur dashboard, unduh laporan, filter dan riwayat, fifo, dan fefo.
Kami team website (Stargazer) Mengupayakan sebaik mungkin untuk mengembangkan project ini. Berikut penjelasannya :

Untuk menjalankan project bagian website ini dipersilahkan dengan melakukan clone pada repository ini.
Setelahnya melakukan direktori ke bagian masing - masing menggunakan terminal ke backend "cd backend" dan frontend "cd webdroid"
Setelah melakukan direktory masing - masing silahkan untuk melakukan instalasi dependesi dengan cara "npm install" pada terminal backend dan "yarn install" pada webdroid
Berikutnya setelah selesai menginstall dependensi silahkan install database webdroid.sql pada folder backend/database dengan cara menggunakan XAMPP atau MySQL Workbench
Setelah menginstal database silahkan aktifkan server backend di terminal dengan memanggil "npm run dev" sekaligus dibagian terminal frontend dengan memanggil "yarn dev"
Jangan lupa untuk mengaktifkan Apache dan MySQL untuk menjalankan database.
Kemudian gunakan Ip localhost pada frontend maka project telah berjalan. Anda dapat melakukan register akun kemudian login akun tersebut.

Karena bagian website ini berfungsi sebagai pengelola data obat dari mobile maka data obat tersebut tidak dapat diinputkan langsung dari website karena bagian mobile belum terhubung ke server website. Untuk itu agar dapat melakukan input data dapat dengan menggunakan postman.
Di postman silahkan memanggil API POST "http://localhost:4923/api/v1/obat" untuk melakukan input data obat berdasarkan format yang sesuai dengan database. Dan untuk memanggil data berdasarkan fifo atau fefo dapat memanggil dengan API GET "http://localhost:4923/api/v1/fifofefo?orderType=fifo" unutk fifo dan
"http://localhost:4923/api/v1/fifofefo?orderType=fefo" untuk fefo. Namun sebelum itu pastikan melakukan POST login "http://localhost:4923/api/v1/login" pada postman agar mendapatkan token masuk dengan memasukan email dan pass yang terdaftar di database. setelah mendapatkan token silahkan input token pada API yang akan dipanggil, Contoh :

POST "http://localhost:4923/api/v1/login"
Input : 
{
  "email": "asep@gmail.com",
  "password": "asep"
}
Output Token pada Cookies
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTcwMzY4NDk5MywiZXhwIjoxNzAzNzcxMzkzfQ.gXU69ATeaRT7AbltekdvNSyW991LZOv7GkEkop_Lb9I"

Kemudian kirimkan token yang ada pada api fifo untuk mendapatkan data obat berdasarkan fifo 
GET "http://localhost:4923/api/v1/fifofefo?orderType=fifo"
Input:
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTcwMzY4NDk5MywiZXhwIjoxNzAzNzcxMzkzfQ.gXU69ATeaRT7AbltekdvNSyW991LZOv7GkEkop_Lb9I"
}
Output :
{
  {
    "Semua data obat berdasarkan fifo"
  }
}

untuk mencoba user yang sudah memiliki data anda dapat login menggunakan akun berikut
"email": "asep@gmail.com",
"password": "asep"

Kekurangan peoject ini adalah bagian fitur fifo dan fefo yang mana backend fifofefo belum dihubungkan kebagian frontend. Kemudian bagian notifikasi belum dilimit agar menampilkan notifikasi berdasarkan beberapa hari dan hari itu. Fungsi lain berjalan dengan baik.

Sekian dari kami, mohon maaf dan terima kasih sebesar - besarnya.

Wassalamualaikum Warahmatullahi Wabarakatuh. Salam coder
