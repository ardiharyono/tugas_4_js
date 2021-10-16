function tinggiBadan() {
  var x = 160;
  var y = 165;
  var z = 170;

  if (x > y) {
    if (x > z) {
    console.log("x adalah siswa tertinggi");
    } else {
      console.log("x adalah siswa tertinggi kedua");
    }
  } else {
    console.log("x adalah siswa terpendek");
  }

  if (y > z) {
    if (y > x) {
    console.log("y adalah siswa tertinggi");
    } else {
      console.log("y adalah siswa tertinggi kedua");
    }
  } else {
    if (y < z) {
      console.log("y adalah siswa tertinggi kedua");
    } else {
      console.log("y adalah siswa terpendek");
    }
  }

  if (z > y) {
    if (z > x) {
    console.log("z adalah siswa tertinggi");
    } else {
      console.log("z adalah siswa tertinggi kedua");
    }
  } else {
    console.log("z adalah siswa terpendek");
  }

}

tinggiBadan()
