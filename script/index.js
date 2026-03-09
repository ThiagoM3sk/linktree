const data = new Date();
const year = data.getFullYear();
document.getElementById("year").innerHTML = year;

function copyEmail() {
    const email = "thiago.mesk@outlook.com";
    navigator.clipboard.writeText(email);
    alert("E-mail copiado para a área de transferência!");
}