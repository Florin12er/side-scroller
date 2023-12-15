export const states = {
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1,
  SITTING_LEFT: 2,
  SITTING_RIGHT: 3,
  RUNNING_LEFT: 4,
  RUNNING_RIGHT: 5,
  JUMP_LEFT: 6,
  JUMP_RIGHT: 7,
  FALLING_LEFT: 8,
  FALLING_RIGHT: 9,
};

export class State {
  constructor(state) {
    this.state = state;
  }
}

export class StandingLeftState extends State {
  constructor(player) {
    super("STANDING LEFT");
    this.player = player;
  }

  enter() {
    this.player.frameY = 1;
    this.player.speed = 0;
    this.player.maxFrame = 6;
  }

  hadleInput(input) {
    if (input === "PRESS d") this.player.setState(states.RUNNING_RIGHT);
    else if (input === "PRESS a") this.player.setState(states.RUNNING_LEFT);
    else if (input === "PRESS s") this.player.setState(states.SITTING_RIGHT);
    else if (input === "PRESS space") this.player.setState(states.JUMP_RIGHT);
  }
}

export class StandingRightState extends State {
  constructor(player) {
    super("STANDING RIGHT");
    this.player = player;
  }

  enter() {
    this.player.frameY = 0;
    this.player.speed = 0;
    this.player.maxFrame = 6;
  }

  hadleInput(input) {
    if (input === "PRESS a") this.player.setState(states.RUNNING_LEFT);
    else if (input === "PRESS d") this.player.setState(states.RUNNING_RIGHT);
    else if (input === "PRESS s") this.player.setState(states.SITTING_LEFT);
    else if (input === "PRESS space") this.player.setState(states.JUMP_LEFT);
  }
}

export class SittingLeft extends State {
  constructor(player) {
    super("SITTING LEFT");
    this.player = player;
  }

  enter() {
    this.player.frameY = 9;
    this.player.speed = 0;
    this.player.maxFrame = 4;
  }

  hadleInput(input) {
    if (input === "PRESS d") this.player.setState(states.SITTING_LEFT);
    if (input === "RELEASE s") this.player.setState(states.STANDING_LEFT);
  }
}

export class SittingRight extends State {
  constructor(player) {
    super("SITTING RIGHT");
    this.player = player;
  }

  enter() {
    this.player.frameY = 8;
    this.player.speed = 0;
    this.player.maxFrame = 4;
  }

  hadleInput(input) {
    if (input === "PRESS a") this.player.setState(states.SITTING_LEFT);
    if (input === "RELEASE s") this.player.setState(states.STANDING_RIGHT);
  }
}
export class RunningLeftState extends State {
  constructor(player) {
    super("RUNNING LEFT");
    this.player = player;
  }

  enter() {
    this.player.frameY = 7;
    this.player.speed = -this.player.maxSpeed;
    this.player.maxFrame = 8;
  }

  hadleInput(input) {
    if (input === "PRESS d") this.player.setState(states.RUNNING_RIGHT);
    else if (input === "RELEASE a") this.player.setState(states.STANDING_LEFT);
  }
}

export class RunningRightState extends State {
  constructor(player) {
    super("RUNNING RIGHT");
    this.player = player;
  }

  enter() {
    this.player.frameY = 6;
    this.player.speed = this.player.maxSpeed;
    this.player.maxFrame = 8;
  }

  hadleInput(input) {
    if (input === "PRESS a") this.player.setState(states.RUNNING_LEFT);
    else if (input === "RELEASE d") this.player.setState(states.STANDING_RIGHT);
    else if (input === "PRESS s") this.player.setState(states.SITTING_RIGHT);
  }
}
export class JumpLeftState extends State {
  constructor(player) {
    super("JUMP LEFT");
    this.player = player;
  }

  enter() {
    this.player.maxFrame = 6;
    this.player.frameY = 3;
   if (this.player.onGround()) this.player.vy -= 25;
   this.player.speed = -this.player.maxSpeed * 0.5;

  }

  hadleInput(input) {
    if (input === "PRESS d") this.player.setState(states.JUMP_RIGHT);
    else if (this.player.onGround()) this.player.setState(states.STANDING_LEFT);
    else if (this.player.vy > 0) this.player.setState(states.FALLING_RIGHT);
  }
}
export class JumpRightState extends State {
  constructor(player) {
    super("JUMP RIGHT");
    this.player = player;
  }

  enter() {
    this.player.maxFrame = 6;
    this.player.frameY = 2;
   if (this.player.onGround()) this.player.vy -= 25;
   this.player.speed = this.player.maxSpeed * 0.5;
  }

  hadleInput(input) {
    if (input === "PRESS a") this.player.setState(states.JUMP_LEFT);
    else if (this.player.onGround()) this.player.setState(states.STANDING_RIGHT);
    else if (this.player.vy > 0) this.player.setState(states.FALLING_LEFT);
  }
}
export class FallingLeftState extends State {
  constructor(player) {
    super("FALLING LEFT");
    this.player = player;
  }

  enter() {
    this.player.frameY = 6;
    this.player.frameY = 5;
  }

  hadleInput(input) {
    if (input === "PRESS d") this.player.setState(states.FALLING_RIGHT);
    else if (input === "RELEASE a") this.player.setState(states.STANDING_LEFT);
  }
}

export class FallingRightState extends State {
  constructor(player) {
    super("FALLING RIGHT");
    this.player = player;
  }

  enter() {
    this.player.frameY = 4;
  }

  hadleInput(input) {
    if (input === "PRESS a") this.player.setState(states.FALLING_LEFT);
    else if (input === "RELEASE d") this.player.setState(states.STANDING_RIGHT);
  }
}