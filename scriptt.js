document.addEventListener('DOMContentLoaded', () => {
    // --- Fungsionalitas Login ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email_login').value;
            const password = document.getElementById('password_login').value;

            // Validasi Dasar
            if (email === "" || password === "") {
                alert("Mohon lengkapi Email dan Kata Sandi.");
                return;
            }

            // SIMULASI: Di lingkungan nyata, kirim data ini ke server (Backend)
            console.log("LOGIN ATTEMPT:", { email, password });
            alert(`Login berhasil (Simulasi)! Selamat datang, ${email}!`);

            // Ganti ini dengan pengalihan ke halaman dasbor setelah sukses
            // window.location.href = 'index.html';
        });
    }

    // --- Fungsionalitas Register ---
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nama = document.getElementById('nama_lengkap').value;
            const email = document.getElementById('email_reg').value;
            const password = document.getElementById('password_reg').value;
            const konfPassword = document.getElementById('konfirmasi_password').value;

            // Validasi Kata Sandi
            if (password !== konfPassword) {
                alert("Konfirmasi Kata Sandi tidak cocok!");
                return;
            }

            // SIMULASI: Di lingkungan nyata, kirim data ini ke server
            console.log("REGISTER ATTEMPT:", { nama, email, password });
            alert(`Pendaftaran berhasil (Simulasi)! Silakan login menggunakan email: ${email}`);

            // Arahkan pengguna ke halaman login
            window.location.href = 'login.html';
        });
    }

    // --- Fungsionalitas Kontak ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nama = document.getElementById('nama_kontak').value;
            const email = document.getElementById('email_kontak').value;
            const message = document.getElementById('message').value;

            // Validasi Dasar
            if (nama === "" || email === "" || message === "") {
                alert("Semua kolom wajib diisi!");
                return;
            }

            // SIMULASI: Data dikirim (di dunia nyata akan menggunakan API)
            console.log("CONTACT MESSAGE SENT:", { nama, email, message });
            alert("Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.");
            contactForm.reset(); // Mengosongkan formulir
        });
    }
});