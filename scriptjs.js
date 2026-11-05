// Fungsi untuk penjumlahan
function tambah() {
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);
    let total = a + b;
    document.getElementById("hasil").innerText = total;
}

// Fungsi untuk pengurangan (Tugas Mandiri)
function kurang() {
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);
    let total = a - b;
    document.getElementById("hasil").innerText = total;
}

// Fungsi untuk perkalian (Tugas Mandiri)
function kali() {
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);
    let total = a * b;
    document.getElementById("hasil").innerText = total;
}

// Fungsi untuk pembagian (Tugas Mandiri)
function bagi() {
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);
    let total = a / b;
    document.getElementById("hasil").innerText = total;
}