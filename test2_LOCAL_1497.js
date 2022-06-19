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
        teks += "+";
    }

    teks += "\n"
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
                    teks += "=";
                }
            }
            teks += "+";
            teks += "\n";
        }
    });
    teks += "|"                                                          
    teks += "\n"                                                         
    for (let i = 0; i < panjangArray % val; i++) {
        teks += "+";
        for (let s = 0; s < panjang; s++) {
            teks += "=";
        }
    }
    teks += "+";
    return teks;
}


console.log(tableDynamic([12, 79996, 7655, 777, 876, 8866, 97, 788
    , 89, 9, 888839, 8882, 88, 234, 234,4,23434,23423,3453234,234234,2342], 8));