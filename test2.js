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
        teks += "+";
    }

    teks += "\n"
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
                    teks += "=";
                }
            }
            teks += "+";
            teks += "\n";
        }
    });

    teks += "|"; 
    teks += "\n";
    // console.log(lengthArray % max)
    for (let i = 0; i < lengthArray % max; i++) {
        teks += "+";
        for (let j = 0; j < longEl; j++) {
            teks += "=";
        }
    }
    teks += "+";
    return teks;
}


console.log(table([1090092, 79996, 7655, 777, 876, 8866, 97, 788, 89, 9, 888839, 8882, 88, 234, 234, 4, 23434, 23423, 39004553223, 3900453239, 3900453299, 234234, 2342], 5));