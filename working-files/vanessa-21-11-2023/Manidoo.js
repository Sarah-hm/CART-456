class Manidoo {
  constructor(x, y, size, i) {
    // option 1
    if (i === "0") {
      this.changeToGreen();
    } else if (i === "1") {
      this.changeToSquare();
    } else if (i === "2") {
      this.growBigger();
    } else {
      console.log("this is not a registered manidoo");
    }

    // option 2
    switch (i) {
      case "0":
        this.changetoGreen();
        break;
      case "1":
        this.changeToSquare();
        break;
      case "2":
        this.growBigger();
        break;
      default:
        console.log("thi is not a registered manidoo");
    }
  } // constructor finish

  changeToGreen() {
    // change the manidoo to green
  }

  changeToSquare() {
    //
  }

  growBigger() {}
}
