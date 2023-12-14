export const states = { STANDING_LEFT: 0, STANDING_RIGHT: 1 };

export class State {
  constructor(state) {
    this.state = state;
  }
}
class StandingLeftState extends State {
  constructor(player) {
    super("STANDING LEFT");
    this.player = player;
  }
    enter() {
this.player.frameY = 1;
    }
    hadleInput(input) {
        if(input === "PRESS right") 
}
class StandingRightState extends State {
    constructor(player) {
      super("STANDING RIGHT");
      this.player = player;
    }
    enter() {
        this.player.frameY = 0;
    }
    hadleInput(input) {
        if(input === "PRESS left") 
    }
}

//timestamp
