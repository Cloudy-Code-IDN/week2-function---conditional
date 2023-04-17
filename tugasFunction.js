function konversiNilai(x)
{
    if(x >= 85){
        return "A";
    } else if (x >= 72){
        return "B";
    } else if (x >= 60){
        return "C";
    } else if (x >= 45){
        return "D";
    } else {
        return "E";
    }
}

let input = konversiNilai(100)
console.log(input);