// Function untuk menghitung luas persegi
function hitungLuas() {
    event.preventDefault(); // Mencegah halaman refresh saat submit form
    var sisi = parseFloat(document.getElementById('sisi-luas').value);
    var luas = sisi * sisi;
    document.getElementById('output-luas').textContent = luas;
  }
  
  // Function untuk menghitung keliling persegi
  function hitungKeliling() {
    event.preventDefault(); // Mencegah halaman refresh saat submit form
    var sisi = parseFloat(document.getElementById('sisi-keliling').value);
    var keliling = 4 * sisi;
    document.getElementById('output-keliling').textContent = keliling;
  }
  
  // Event listener saat tombol Hitung Luas ditekan
  document.getElementById('luas-form').addEventListener('submit', hitungLuas);
  
  // Event listener saat tombol Hitung Keliling ditekan
  document.getElementById('keliling-form').addEventListener('submit', hitungKeliling);
  