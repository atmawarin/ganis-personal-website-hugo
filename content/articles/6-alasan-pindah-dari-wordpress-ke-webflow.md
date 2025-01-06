---
title: "6 Alasan Pindah Dari Wordpress ke Webflow"
description: "Putus dengan Wordpress, jadian dengan Webflow."
cover: /images/articles/webflow-window.png
date: 2019-10-05
tags: ["design"]
---

Merawat medium bernama **website pribadi** yang bisa dikontrol sendiri, dibuat sendiri, dipublish sendiri, merupakan salah satu hal yang paling cerdik yang pernah saya lakukan. Dari situ saya belajar coding, eksperimen tipografi, dan juga menulis. Punya website pribadi bagi saya sangat manjur untuk mengasah skill, mempertemukan saya dengan orang-orang baik dan juga membuka jendela bagi karir professional saya.

Untuk platform, saya sudah coba macam-macam. Mulai di 2008 dari platform blogging yang bernama Multiply (sudah punah sepertinya), saya pindah dan mencoba Wordpress, ExpressionEngine, Jekyll, hingga pure no CMS dengan modal Codekit app di Mac, sebelum akhirnya settle kembali di Wordpress.

Komitmen pekerjaan membuat saya tidak bisa meluangkan terlalu banyak waktu di sini, terlebih sejak memutuskan pensiun dari coding di Agustus 2018, sehingga saya sempat berpikir akan selamanya menggunakan Wordpress.

Namun, ternyata muncul teknologi baru yang mencuri perhatian. Sejak pertengahan September lalu saya berkenalan dengan platform bernama [Webflow](https://webflow.com/) dari salah satu client dan memutuskan untuk mencobanya buat website personal saya sendiri. Cocok ternyata! Cuma butuh 1 minggu untuk melakukan migrasi dan its been super fun!

Di post kali ini saya akan mencoba membantu menjelaskan tentang

1. Apa itu WebFlow
2. Pros and consnya
3. Pengalaman saya pindah dari Wordpress ke Webflow,

# Apa itu WebFlow?
{{< figure src="/images/articles/webflow-window.png" caption="Tampilan dashboard dari webflow" >}}

Hampir semua orang yang sudah pernah membangun blog akan paham, apa itu Wordpress. Tapi Webflow sepertinya masih jadi hal baru buat beberapa orang.

Webflow buat saya adalah ibarat [Balsamiq](https://balsamiq.com/wireframes/) untuk membangun Website. Sama seperti Balsamiq, kamu bisa mendrag and drop daftar common element seperti container, section, image, heading, dll ke dalam canvas. Tapi alih-alih mendapatkan wireframe dan gambar statis, yang kamu dapatkan adalah true halaman HTML.

**Webflow memungkinkan kamu mendesain websites tanpa harus koding** (halo pensiun coding). Setelah menentukan desain di setiap halaman, kamu kemudian bisa mulai membangun desain di tiap halaman. Mengubah text on the fly. Dan membuat model CMS sendiri – kalau ingin punya konten dinamis seperti blog.

Berbeda dengan Wordpress di mana umumnya kamu perlu menyiapkan website host sendiri. Semua yang ada di Webflow sudah all in one. Hosting, staging, SSL, CDN, editor, semuanya ada di platform mereka. Dan WebFlow juga cukup berbaik hati untuk menyediakan opsi mengeksport halaman yang kamu buat jadi HTML, CSS dan JS, sehingga kamu tidak harus terkunci total di ekosistem mereka.

# Bukan Webflow VS Wordpress
Sebelum saya membahas alasan kenapa saya pindah dari Wordpress ke Webflow, perlu saya garis bawahi bahwa saya tidak merasa Webflow superior dari Wordpress.

Flexibilitas Worpress menurut saya secara general masih tetap menjadikannya **standar emas bagi small medium business dan perorangan**. Ada sebabnya kenapa Wordpress berjaya dan memotori lebih dari 34% website di internet.

Walaupun dianggap bukan platform “serius” di startup industry di Indonesia, it actually works and deserve better reputation. Di SoftwareSeni kami pernah beberapa kali melakukan “Corporate Innovation” program, di mana dalam 2 bulan, kami mengembangkan product secara rapid untuk melakukan test terhadap hipotesa product market fit client, dan Wordpress merupakan salah satu platform yang paling cepat untuk mendevelop MVP. Dengan resource Auttomatic dan Matt Mullenweg di belakangnya, Wordpress masih akan berjaya dan its not going to change any time soon.

Ada daftar panjang antrian kelebihan Wordpress dibanding Webflow yang saya tidak akan bahas satu satu di sini. Wordpress is pretty cool 👌.

Untuk personal website saya sendiri, Webflow lebih intuitive karena saya lebih dekat ke Front End daripada Back End. Buat orang lain, belajar Webflow bisa jadi agak lebih sulit daripada Wordpress karena untuk bisa fasih di dalamnya kamu butuh pengetahuan minimal tentang HTML dan CSS.

Ok. Now thats wrapped. Mari kita bahas beberapa alasan kenapa saya memutuskan untuk migrasi dari Wordpress ke Webflow :

# First Class Layout Editor

Ada banyak platform bertaburan di pasar sat ini yang menyediakan kemampuan untuk membuat layout tanpa coding hanya dengan drag and drop editor. Wordpress punya [Elementor](https://elementor.com/), kemudian ada pemain besar lain seperti [Wix](https://www.wix.com/), [Squarespace](https://www.squarespace.com/), dan lain-lainnya yang menawarkan solusi ini. Beberapa nama besar ini sudah memulai jalur mereka lebih dulu dari Wordpress, tapi menurut saya untuk drag and drop visual editor, tidak ada yang sebaik Webflow dalam hal kontrol dan kecepatan.

### Kontrol Presisi
Webflow hampir memiliki semua tag yang kamu perlukan untuk membuat elemen mulai dari section, container, div, image, text, heading, form, dll, dan memberikan granular control kepada tiap elemen tersebut.

Untuk control itu, mulai dari hal terkecil, katakanlah membuat layout 2 kolom. Di visual editor lainnya. Membuat kolom adalah sebatas menentukan berapa jumlah row. Sementara dengan Webflow kamu punya flexibilitas hampir seperti coding manual. Mau membuat kolom dengan standard kolom? Bisa. Dengan flexbox? Bisa. Mau dengan CSS grid? Bisa.

Di halaman website ini misalnya. Saya bereksperimen dengan FlexBox, CSS Grid, dan terkadang simple float, tergantung halamannya.

{{< figure src="/images/articles/webflow-preview.png" caption="Hello flexbox control!!" >}}

Cara Webflow untuk cascade view dari desktop, ke tablet, ke mobile juga super cerdik. Its not mobile first, tapi memberikan kamu kendali untuk mendefine setiap break point.

### Kecepatan di Dalam Interface
Walaupun dihujani dengan fitur. Saya cukup takjub dengan kecepatan interface di Webflow. Bernavigasi antara satu halaman ke halaman lain bisa terjadi cukup cepat dan jarang terjadi lagging. Fungsi penting seperti drag and drop juga mulus dengan animasi yang halus.

Tidak hanya transisi antar halaman. Hampir tidak ada waktu yang berarti ketika melakukan perpindahan dari mode database CMS ke mode editing layout misalnya juga cukup cepat.

Dan satu lagi. Semua yang kita lakukan akan otomatis di save oleh Webflow hampir dalam detik itu juga ketika perubahan dilakukan.

> Pro Tip :

>Ctrl + E mengijinkan kamu untuk dapat melakukan navigasi dengan cepat. Cukup dengan memencet keystroke ini kemudian typing “Home” misalnya, akan membawa kamu ke halaman home. Typing “section” akan menunjukkan element tag yang bisa kamu drag ke DOM atau ke halaman edit. Its super powerfule shortcut yang jadi salah satu alasan saya sangat menyukai Webflow.

### First Class Deployment & Backup
Melakukan **deployment** ke staging dan production di Webflow benar-benar effortless buat saya. Words should not do justice. Coba lihat di bawah ini bagaimana melakukan deployment di Webflow. Insanely fast!

{{< figure src="/images/articles/publish-preview.gif" caption="Deployment can't come faster than this." >}}

Untuk pilihan roll back sendiri Webflow punya semacam **Time Machine** yang akan mengambil snapshot project – database dan file. Kamu bebas lompat ke belakang dan ke depan, bahkan membuka secara detail apa yang ada di tiap versi. Fitur ini sangat berguna untuk melakukan debugging. Kamu bisa melihat dan membandingkan 2 konfigurasi yang berbeda, tanpa harus melakukan total restore.

{{< figure src="/images/articles/backup-window.png" caption="Backup interface di Webflow" >}}

# Secepat Kuda
Webflow is super fast. Dan bagi saya, terasa lebih cepat dari Wordpress standard.

Karena Webflow mencoba untuk mendekati standard coding dan tidak oversimplify processnya seperti yang dilakukan Elementor misalnya, hasil HTML outputnya cukup bersih. Dan dari HTML yang bersih inilah, lahir kecepatan kuda.

Contohnya halaman homepage saya di bawah ini :

{{< figure src="/images/articles/page-performance.png" caption="Web performance">}}

3.1s, page size 1.94 mb, dan 44 request **tanpa saya melakukan optimisasi manual** adalah hasil yang sangat sangat impressif. Apalagi ditambah dengan feature **FREE CDN** dan pilihan untuk minify assets, Webflow out of the box sudah ada di mode lari kencang.

# Mudah Membuat Konten Dinamis Custom
Untuk fungsi Content Management System, memang Wordpress sudah mahsyur dengan halaman postnya. Membuat post blog sangat nyaman dan aman dilakukan. Tapi kalau kamu ingin membuat konten dinamis untuk post selain blog di Wordpress – contoh misalnya ingin membuat [Reading List](https://www.atmawarin.com/reading) dengan 4 field sederhana (judul, penulis, gambar cover dan review singkat) tanpa Brooooooo!!!!!! cukup sulit!

Secara default, settingan custom field disembunyikan oleh Wordpress. Kemudian untuk dapat bisa mencontrol custom field lebih mudah lagi, kamu harus menginstall plugin dulu, dan melakukan manual konfigurasi theme untuk memasukkan custom field.

Untuk ukuran CMS yang sudah berumur 10 tahun lebih. Menurut saya ini adalah kelemahan terbesar Wordpress.

Webflow di lain pihak. Punya kemampuan untuk membuat CMS yang cukup powerful dan mudah digunakan. Mirip dengan ExpressionEngine atau Craft. Kamu bisa mendefine channel berisi custom field dan kamu kemudian bisa mencantolkan channel tersebut ke berbagai macam halaman yang kamu inginkan – all without need to write a single code.

{{< figure src="/images/articles/cms-preview.png" caption="Membangun custom field di Webflo" >}}

Yang lebih impressive lagi. Webflow sudah punya beberapa template custom field standard yang umumnya dibuat orang. Ada portfolio, blog, clients, team members, events, dll. Kamu bisa mengambil salah satu contohnya kemudian melakukan modifikasi sesuka hati.

### Komparasi Dokumentasi
Dokumentasi di Webflow itu ciamik. Untuk belajar Webflow ada semacam university course yang bisa diambil secara gratis bagi orang yang ingin belajar Webflow. Durasi dari videonya juga pendek dan cepat, dan secara general sangat mudah dipahami.

Yang asik lagi, Webflow mencoba mengembed dokumentasi ke dalam dashboard. Jadi ketika kamu sedang membangun halaman di dalam Webflow, kemudian tiba-tiba ingin tahu bagaimana cara “Membuat CSS Grid” misalnya. Tidak perlu membuka halaman baru, cukup mengklik tombol “Tutorial” yang ada di pojok kiri bawah.

{{< figure caption="/images/articles/video-embed.jpg" caption="Video tutorial yang mudah diakses" >}}

Kalau ada fitur yang baru (dan fitur baru lumayan sering muncul), Webflow akan memberikan notifikasi kepada penggunanya.

### Harga
Oke bagian terakhir. Harga.

Untuk standard CMS Webflow ini lumayan mahal. Biaya yang rata-rata akan kamu keluarkan untuk berlangganan Webflow (sekaligus hosting) untuk setahun adalah sekitar 2,7 juta. Sebagai komparasi, untuk bisa menghost website Wordpress selama setahun, kita bisa melakukannya dengan modal 200 ribu saja.

Having said that. Kalau kamu serius tentang kecepatan dan performa site – nggak host di shared hosting tapi VPN. Ingin melakukan kustomisasi yang lebih granular di Wordpress layaknya Webflow. Wordpress bisa jadi hampir semahal Webflow, atau bahkan lebih mahal daripada Webflow.

Contohnya ini adalah cost beneran yang saya keluarkan untuk bisa hosting website wordpress dengan custom domain dibanding dengan Webflow.

# Wordpress 1 Tahun
Theme Purchase : $59 – [Meks](https://mekshq.com/theme/typology/)

Cache Plugin : $49 - [Rocket](https://wp-rocket.me/)

Drag and Drop : $49 - [Elementor](https://elementor.com/)

Hosting : $100 – [Webfaction](https://www.webfaction.com/)

SSL Certificate : $15 – [Namecheap](https://www.namecheap.com/)

**Total Cost : $272 atau Rp 3,841,564**

# Webflow 1 Tahun

Theme Purchase : $79

CMS Hosting : $192

**Total Cost : $271 atau Rp 3,827,441.**

Lebih mahal Wordpress! Dan ini kita masih belum menghitung biaya yang kita keluarkan untuk beli FTP server yang layak, editor yang cepat kayak Sublime, dan juga CDN.

# Giddy!
Sudah cukup lama saya tidak merasakan sedikit giddy untuk teknologi baru, seperti yang saya dapatkan ketika mulai mengulik Webflow.

Ketika saya memutuskan untuk pensiun coding di Agustus 2018, its a little bit emotional decision karena saya berpikir “so long eksperimen typography”.

Webflow tidak hanya mengijinkan saya untuk bereksperimen membuat website dan tipografi lagi. Tapi juga lebih dari itu. Ia juga membantu saya untuk memahami konsep yang cukup baru seperti CSS Grid dan FlexBox layout, dan teknologi atau trend baru yang muncul akhir-akhir ini

Salah satu contohnya adalah bagian ini di website saya :

Gambar ini aslinya adalah gambar warna. Tapi saya bisa membuatnya jadi grayscale, dengan bereksperimen dengan CSS filter yang ada di Webflow.

Masih ada banyak yang belum saya explore di sini, yang membuat saya berpikir, after all this year, I still can learn how to build a better web.