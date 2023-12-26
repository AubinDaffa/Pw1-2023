function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "AubinDaffa" && password === "student-nf23") {
        alert("Login Berhasil");
        window.location.href = "success.html";
    } else {
        alert("Username atau Password salah,Coba lagi.");
    }
}