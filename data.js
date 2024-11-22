const namaSaya = "Muhammad Ziqri Farezal";
let usiaSaya = 18;

function generateBiodata() {
    if (usiaSaya > 10 && usiaSaya < 20) {
        console.log ("Anda Merupakan Remaja");
    } else if (usiaSaya > 20) {
        console.log ("Anda Sudah Tuirr")
    } else {
        console.log ("Anda Masih Anak Anak")
    }
}

console.log(`Nama anda adalah ${namaSaya} dan usia saya ${usiaSaya} tahun`);
generateBiodata()
