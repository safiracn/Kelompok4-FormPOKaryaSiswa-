
// DATA PRODUK
const produkTerpilih = {
    nama: "Meja Belajar Pradipa",
    harga: 100000,
    gambar: "assets/images/meja belajar kotak.jpeg"
};

// ELEMEN HTML
const inputJumlah = document.getElementById('jumlah');
const displayTotal = document.getElementById('res-total');
const displayJumlah = document.getElementById('res-jumlah');


//HITUNG HARGA OTOMATIS 
if (inputJumlah) {
    inputJumlah.addEventListener('input', function() {
        let qty = parseInt(inputJumlah.value) || 1;
        if (qty < 1) qty = 1;

        let total = qty * produkTerpilih.harga;

        // Update tampilan jumlah dan total harga
        if (displayJumlah) displayJumlah.innerText = qty;
        if (displayTotal) displayTotal.innerText = "Rp " + total.toLocaleString('id-ID') + ",00";
    });
}

// VALIDASI & SUBMIT PESANAN
function submitFinal() {
    // Ambil elemen input
    const elNama = document.getElementById('nama');
    const elNoTelp = document.getElementById('noTelp');
    const elAlamat = document.getElementById('alamat');

    // Pastikan semua elemen ada di HTML
    if (!elNama || !elNoTelp || !elAlamat) {
        alert("Error: Salah satu ID input tidak ditemukan di HTML.");
        return;
    }

    // Ambil nilai input dan bersihkan spasi
    const nama = elNama.value.trim();
    const noTelp = elNoTelp.value.trim();
    const alamat = elAlamat.value.trim();
    
    // Aturan Huruf/Angka (Regex)
    const hanyaHuruf = /^[a-zA-Z\s]+$/;
    const hanyaAngka = /^[0-9]+$/;

    // Cek apakah ada yang kosong
    if (nama === "" || noTelp === "" || alamat === "") {
        alert("Gagal! Semua data harus diisi, tidak boleh ada yang kosong.");
        return;
    }

    // Validasi Nama Harus Huruf
    if (!hanyaHuruf.test(nama)) {
        alert("Gagal! Nama harus berupa huruf semua, tidak boleh ada angka atau simbol.");
        return;
    }

    // Validasi No Telp Harus Angka
    if (!hanyaAngka.test(noTelp)) {
        alert("Gagal! No Telepon harus berupa angka.");
        return;
    }

    // --- JIKA LOLOS VALIDASI (SUKSES) ---
    alert("Sukses! Pesanan atas nama " + nama + " berhasil diproses.");

    // --- FITUR CLEAR FORM (MENGOSONGKAN KOTAK) ---
    elNama.value = "";
    elNoTelp.value = "";
    elAlamat.value = "";
    inputJumlah.value = 1; // Kembalikan jumlah input ke 1

    // --- RESET TAMPILAN HARGA SECARA DINAMIS ---
    if (displayJumlah) displayJumlah.innerText = "1";
    if (displayTotal) {
        displayTotal.innerText = "Rp " + produkTerpilih.harga.toLocaleString('id-ID') + ",00";
    }

    console.log("Pesanan sukses dan form telah dibersihkan.");
}