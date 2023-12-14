export class InputHandler {
  constructor() {
    this.lastKey = "";
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w":
          this.lastKey = "PRESS w";
          break;
        case "s":
          this.lastKey = "PRESS s";
          break;
        case "a":
          this.lastKey = "PRESS a";
          break;
        case "d":
          this.lastKey = "PRESS d";
          break;
        case " ":
          this.lastKey = "PRESS space";
      }
    });
    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "w":
          this.lastKey = "RELEASE w";
          break;
        case "s":
          this.lastKey = "RELEASE s";
          break;
        case "a":
          this.lastKey = "RELEASE a";
          break;
        case "d":
          this.lastKey = "RELEASE d";
          break;
        case " ":
          this.lastKey = "RELEASE space";
          break;
      }
    });
  }
}
