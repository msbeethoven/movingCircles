//array of circles 
class Spot {
  constructor(x, y, speed, diameter) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.diameter = diameter;
    this.direction = 1;
  }

  move(){
    this.y += (this.speed * this.direction);
    if ((this.y > (height - this.diameter)) || (this.y < this.diameter / 2)){
      this.direction *= -1;
    }
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

}
let spot = new Spot(33, 25, 10, 5.0)
const numSpots = 70
let spots = Array(numSpots)

function setup(){
  createCanvas (1000, 500);
  spots.diameter = width/numSpots 
  console.log("spots", spots.length) //70
  for (let i = 0; i < spots.length; i++){
    spots.x = spots.diameter / 2 + i * spots.diameter;
    let rate = random(0.1, 20.0);
    spots[i] = new Spot(spots.x, 40, rate, spots.diameter)
  }
  noStroke();

}

function draw(){
  fill(0, 15)
  rect(0, 0, width, height)
  fill(255)
  for (let i = 0; i < spots.length; i++){
    spots[i].move();
    spots[i].display();
  }
}


//just the circle class
// class Spot {
//   constructor(x, y, speed, diameter) {
//     this.x = x;
//     this.y = y;
//     this.speed = speed;
//     this.diameter = diameter;
//     this.direction = 1;
//   }

//   move(){
//     this.y += (this.speed * this.direction);
//     if ((this.y > (height - this.diameter)) || (this.y < this.diameter / 2)){
//       this.direction *= -1;
//     }
//   }

//   display() {
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   }

// }
// let spot = new Spot(33, 25, 10, 5.0)

// function setup(){
//   createCanvas (100, 500);
//   noStroke();

// }

// function draw(){
//   fill(0, 15)
//   rect(0, 0, width, height)
//   fill(255)
//   spot.move()
//   spot.display()
// }
