window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Mengambil tinggi total halaman dan posisi scroll saat ini
  var docHeight = document.documentElement.scrollHeight;
  var scrollPosition = window.scrollY + window.innerHeight;

  // Menampilkan tombol jika sudah berada di bagian bawah halaman
  if (scrollPosition >= docHeight) {
    document.getElementById("scroll-btn").style.display = "block";
  } else {
    document.getElementById("scroll-btn").style.display = "none";
  }
}

// Fungsi untuk scroll ke atas saat tombol di klik
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}