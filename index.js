
function konversiNilai(nilaiakhir) {
    if (nilaiakhir <= 39) {
        return console.log('E') 
    } else if(nilaiakhir <= 54) {
        return console.log('D')
    } else if(nilaiakhir <= 69) {
        return console.log('C')
    } else if(nilaiakhir <= 84) {
        return console.log('B')
    } else {
        console.log('A')
    }
}

konversiNilai(30)


function konversiNilai(nilaiakhir) {
    switch(true) {
        case nilaiakhir <= 39:
            return console.log('E')
        case nilaiakhir <= 54:
            return console.log('D')
        case nilaiakhir <= 69:
            return console.log('C')
        case nilaiakhir <= 84:
            return console.log('B')
        default:
            return console.log('A')


    }
}
konversiNilai(60)