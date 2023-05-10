
function konversiNilai(nilaiAkhir) {
    if (nilaiakhir >= 85 ) {
        return console.log('A') 
    } else if(nilaiakhir >= 70) {
        return console.log('B')
    } else if(nilaiakhir >= 55) {
        return console.log('C')
    } else if(nilaiakhir >= 40) {
        return console.log('D')
    } else {
        console.log('E')
    }
}

konversiNilai(52)


function konversiNilai(nilaiAkhir) {
    switch(true) {
        case nilaiAkhir >= 85:
            return console.log('A')
        case nilaiAkhir >= 70:
            return console.log('B')
        case nilaiAkhir >= 55:
            return console.log('C')
        case nilaiAkhir >= 40:
            return console.log('D')
        default:
            return console.log('E')


    }
}
konversiNilai(72)