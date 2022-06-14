const mtk = -1;
const bahasaIndonesia = 5;
const bahasaInggris = 10;
const ipa =  15;
const data = mtk || bahasaIndonesia || bahasaInggris || ipa;

if (typeof data !== 'number') { // validasi semua nilai harus bertipe data number
    console.log("Semua nilai harus number dan semua nilai tidak boleh kosong");
} else if (data < 0 || data > 100) { // validasi range nilai harus 0 - 100
    console.log("Range semua nilai 0 - 100");
} else {
    // Menghitung nilai rata-rata
    const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    console.log(`Rata-rata = ${rataRata}`);

    // Menentukan grade
    const grade = rataRata >= 90 ? "A" : rataRata >= 80 ? "B" : rataRata >= 70 ? "C" : rataRata >= 60 ? "D" : "E";
    console.log(`Grade = ${grade}`);
}