#Fimple React Practicum

![alt text](https://patika-cohorts-prod.s3-eu-central-1.amazonaws.com/cohorts/fimple-react-practicum/9aiPrheejW3rfaXYW-cohorts-cover)

Proje Fimple ve Patika is birliginde gerceklesen React Practicum kapsaminda verilen projedir.

Proje genel olarak kullanicilarin kredi geri odeme tutarlarini hesaplamasi ve taksit tutarlarinin kullaniciya gosterilmesi uzerinedir.

<br>
<br>

# Icindekiler

- [Uygulama Isterleri](#uygulama-isterleri)
- [Uygulama Oncesi Hazirlik](#uygulama-oncesi-hazirlik)
- [Uygulama Icerigi](#uygulama-icerigi)
- [Uygulamanin Calistirilmasi](#uygulamanin-calistirilmasi)

<br>
<br>

# Uygulama Isterleri

1. Form araciligi ile kullanicidan kredi bilgileri alinacak

2. Kar formulu kullanilarak hesaplama yapilacak

3. Geri odeme plani bir tabloda gosterilecek.

4. ReactJs kullanilacak

<br>
<br>

# Uygulama Oncesi Hazirlik

- **Uygulama icinde kullanilan yapilar:** component,context,router,react-bootstrap

<br>
<br>
<br>

# Uygulama Icerigi

- Projede kullanici kredi icin gerekli bilgileri girdikten sonra bir geri odeme plani tablosu olusturabilir.

<br>

- Oncelikle kullanicidan bilgilerin alanicagi bir form yapisi olusturulmustur. Bu form yapisi ile kullanicidan alinan veriler bir state olarak saklanir.
  <br>

- Form ile alinan verilerin butun componentler tarafindan erisilebilir olmasi icin bir context yapisi olusturulmustur. Bu yapi icerisinde hesaplamalar icin gerekli olan bilgiler tutulur ve disariya acilir.
  <br>

- Form icerisinde kullanici submit islemi yaptiginda context icerisinde tanimli olan fonksiyon tetiklenir ve veriler context`e kaydedilir. Ayrica submit isleminden sonra kullanici otomatik olarak geri odeme tablosunun bulundugu sayfaya yonlendirilir.
  <br>

- Kullanici odeme tablosunun bulundugu sayfaya geldiginde girdigi veriler uzerinden hesaplanan odeme tutarlarini gorebilir. Bu bilgiler asagida oldugu gibi basliklar altinda tablo seklinde gosterilir.

| Taksit No | Taksit Tutari | Ana Para | Kalan Ana Para | Kar Tutari | KKDF | BSMV |
| --------- | ------------- | -------- | -------------- | ---------- | ---- | ---- |

<br>

- Tablo verilerinin hesaplanmasi icin `helper` dosyasi icinde bir hesaplam fonksiyonu kullanilmistir.

<br>

- Projede `App.test.js` icerisinde tablo verileri ile ilgili testler yazilmistir.
  <br>
  <br>
  <br>

# Uygulamanin Calistirilmasi

1. Proje GitHub uzerinden clone olarak local ortama alinir.
   <br>
2. Proje icinde terminal uzerinden `npm install` kullanirarak paketler yuklenir.
   <br>
3. Paketler yuklendikten sonra yine terminal uzerinden `npm start` ile projeyi baslatabilirsini.
   <br>
4. Projede yazilan testleri `npm run test` ile calistirabilirsiniz.
