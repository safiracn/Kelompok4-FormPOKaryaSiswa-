// DATA PRODUK
const produkTerpilih = {
    nama: "Meja Belajar Pradipa",
    harga: 100000,
    gambar: "assets/images/meja belajar kotak.jpeg"
};

//AMBIL ELEMEN
const inputJumlah = document.getElementById('jumlah');
const displayTotal = document.getElementById('res-total');
const displayJumlah = document.getElementById('res-jumlah');

// HITUNG HARGA OTOMATIS
inputJumlah.addEventListener('input', function() {
    let qty = parseInt(inputJumlah.value) || 1;
    if (qty < 1) qty = 1;

    let total = qty * produkTerpilih.harga;

    displayJumlah.innerText = qty;
    displayTotal.innerText = "Rp " + total.toLocaleString('id-ID') + ",00";
});

// VALIDASI 
function submitFinal() {
    // Ambil nilai input
    const nama = document.getElementById('nama').value.trim();
    const noTelp = document.getElementById('noTelp').value.trim();
    const alamat = document.getElementById('alamat').value.trim();

    // Cek apakah ada yang kosong
    if (nama === "" || noTelp === "" || alamat === "") {
        alert("Gagal! Semua data harus diisi, tidak boleh ada yang kosong.");
        return;
    }

    // LOLOS VALIDASI
    alert("Sukses! Pesanan atas nama " + nama + " berhasil diproses.");
    console.log("Data Valid: Pesanan dikirim.");
}