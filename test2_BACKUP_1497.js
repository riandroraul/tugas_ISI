<<<<<<< HEAD
function tableDynamic(arraySatu, val) {
    const hasilMax = Math.max.apply(null, arraySatu); 
    const panjang = `${hasilMax}`.length
    const panjangArray = arraySatu.length; 
    const akhirTable = Math.floor(panjangArray / val); 
    let teks = "+";
    let f = val; 
    for (let i = 0; i < val; i++) {
        for (let s = 0; s < panjang; s++) {
             teks += "="; 
        } 
=======
function table(arr, max) {
    let nilaiMax = Math.max.apply(undefined, arr); // nilai max dari tiap2 elemen arr (number)
    let longEl = nilaiMax.toString().length; // elemen yang paling panjang pada arr (string)
    let lengthArray = arr.length; // panjang array
    // const lastTable = Math.floor(lengthArray / max); 
    let teks = "+";
    for (let i = 0; i < max; i++) {
        for (let j = 0; j < longEl; j++) {
             teks += "="; 
        }
>>>>>>> 83f159260b46bac3e35027e9fa58137b363d1b20
        teks += "+";
    }

    teks += "\n"
<<<<<<< HEAD
    arraySatu.forEach(function (x, y) {
    teks += "|"
    for (let l = 0; l < panjang - `${x}`.length; l++) {
        teks += "*";
        }
        teks += `${x}`;
        if ((y + 1) % val == 0) {
            teks += "|"
            teks += "\n";
            for (let i = 0; i < f; i++) {
                teks += "+";
                for (let j = 0; j < panjang; j++) {
=======
    arr.forEach(function(el, index) {
        // el => tiap2 elemen pada array (number)
        teks += "|"
        for (let i = 0; i < longEl - el.toString().length; i++) {
            teks += "*";
        }
        teks += el;
        if ((index + 1) % max == 0) { // jika sisa bagi index dengan max == 0
            teks += "|";
            teks += "\n";
            for (let i = 0; i < max; i++) {
                teks += "+";
                for (let j = 0; j < longEl; j++) {
>>>>>>> 83f159260b46bac3e35027e9fa58137b363d1b20
                    teks += "=";
                }
            }
            teks += "+";
            teks += "\n";
        }
    });
<<<<<<< HEAD
    teks += "|"                                                          
    teks += "\n"                                                         
    for (let i = 0; i < panjangArray % val; i++) {
        teks += "+";
        for (let s = 0; s < panjang; s++) {
=======
    teks += "|"; 
    teks += "\n";
    // console.log(lengthArray % max)
    for (let i = 0; i < lengthArray % max; i++) {
        teks += "+";
        for (let j = 0; j < longEl; j++) {
>>>>>>> 83f159260b46bac3e35027e9fa58137b363d1b20
            teks += "=";
        }
    }
    teks += "+";
    return teks;
<<<<<<< HEAD
=======
    // console.log(nilaiMax)
    // return lengthArray
>>>>>>> 83f159260b46bac3e35027e9fa58137b363d1b20
}


console.log(table([1090092, 79996, 7655, 777, 876, 8866, 97, 788, 89, 9, 888839, 8882, 88, 234, 234, 4, 23434, 23423, 39004553223, 3900453239, 3900453299, 234234, 2342], 5));