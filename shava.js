// 1. DATA PRODUK
const produkTerpilih = {
    nama: "Meja Belajar Pradipa",
    harga: 100000,
    gambar: "assets/images/meja belajar kotak.jpeg"
};

// 2. AMBIL ELEMEN
const inputJumlah = document.getElementById('jumlah');
const displayTotal = document.getElementById('res-total');
const displayJumlah = document.getElementById('res-jumlah');

// 3. FUNGSI HITUNG HARGA OTOMATIS
inputJumlah.addEventListener('input', function() {
    let qty = parseInt(inputJumlah.value) || 1;
    if (qty < 1) qty = 1;

    let total = qty * produkTerpilih.harga;

    displayJumlah.innerText = qty;
    displayTotal.innerText = "Rp " + total.toLocaleString('id-ID') + ",00";
});

// 4. FUNGSI VALIDASI & SUBMIT
function submitFinal() {
    // Ambil nilai input
    const nama = document.getElementById('nama').value.trim();
    const noTelp = document.getElementById('noTelp').value.trim();
    const alamat = document.getElementById('alamat').value.trim();
    
    // REGEX untuk validasi (Aturan Huruf/Angka)
    const hanyaHuruf = /^[a-zA-Z\s]+$/;
    const hanyaAngka = /^[0-9]+$/;

    // A. Cek apakah ada yang kosong
    if (nama === "" || noTelp === "" || alamat === "") {
        alert("Gagal! Semua data harus diisi, tidak boleh ada yang kosong.");
        return;
    }

    // B. Validasi Nama (Harus Huruf)
    if (!hanyaHuruf.test(nama)) {
        alert("Gagal! Nama harus berupa huruf semua, tidak boleh ada angka atau simbol.");
        return;
    }

    // C. Validasi No Telp (Harus Angka)
    if (!hanyaAngka.test(noTelp)) {
        alert("Gagal! No Telepon harus berupa angka.");
        return;
    }

    // D. JIKA SEMUA LOLOS VALIDASI
    alert("Sukses! Pesanan atas nama " + nama + " berhasil diproses.");
    console.log("Data Valid: Pesanan dikirim.");
}