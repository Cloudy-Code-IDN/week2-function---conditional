function konversiNilai(nilai) {
    if (nilai >= 85 && nilai <= 100) {
      console.log(`grade A`);
    } else if (nilai >= 70 && nilai <= 84) {
      console.log(`grade B`);
    } else if (nilai >= 55 && nilai <= 69) {
      console.log(`grade C`);
    } else if (nilai >= 40 && nilai <= 54) {
      console.log(`grade D`);
    } else if (nilai >= 0 && nilai <= 39) {
      console.log(`grade E`);
    }
  }
  
  konversiNilai(59); // grade C
  konversiNilai(85); // grade A
  konversiNilai(59); // grade C
  
  function konversiNilai2(nilai) {
    switch (true) {
      case nilai >= 85:
        console.log(`grade A`);
        break;
      case nilai >= 70:
        console.log(`grade B`);
        break;
      case nilai >= 55:
        console.log(`grade C`);
        break;
      case nilai >= 40:
        console.log(`grade D`);
        break;
      case nilai >= 0:
        console.log(`grade E`);
        break;
    }
  }
  
  konversiNilai2(85); // grade A
  konversiNilai2(50); // grade D
  
  
  
  