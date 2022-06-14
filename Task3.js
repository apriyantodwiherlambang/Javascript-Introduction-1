const printSegitiga = 5;
const cek = typeof printSegitiga;

if (cek === "number"){
    for(let i = printSegitiga; i >= 1; i--){
        let output = "";
        for(let j = 1; j <= i; j++ ){
            output = output + j;
        }
        console.log(output)
    }
}  else {
    console.log("Data Harus Number!");
}