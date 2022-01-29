let text = " ";
let sample =
  "Once upon a time there was one beautiful Princess who lived in her castle next to the swing set, but it combusted when anyone stepped within five feet of it's drawbridge. To get around this, three firefighters were hired who put out any fires that occurred.";
sample = sample.toLowerCase();
console.log(sample);
let myArray = sample.split(" ");

document.getElementById("p").innerHTML = text;
document.getElementById("t").innerHTML = myArray.join(" ");
var keyIm;
var yHeight = 0;
var types = 0;
document.onkeypress = function (e) {
  e = e || window.event;
  // use e.keyCode
  console.log(e.keyCode);

  text += String.fromCharCode(e.keyCode);
  //text.substring(text.length - 1);
  //if (types == 0) {
  //document.getElementById("p").innerHTML = "";
  //text = '';
  //}
  //const array = ["The","quick","brown","fox","jumps","over","the","lazy","dog"];
  for (var i = 0; i < myArray.length; i++) {
    if (text.includes(myArray[i])) {
      types += 1;
      myArray.splice(i, 1);
      text = "";

      document.body.style.backgroundColor = "green";
    }
  }
  document.getElementById("t").innerHTML = myArray.join(" ");
  document.getElementById("h").innerHTML = "<br><br><br><br>" + String(types);
  keyIm = keyImage(e.keyCode);
  boxes.push(
    new Box(
      (text.length % 125) * 11,
      12 * yHeight + 36,
      12,
      12,
      loadImage(keyIm)
    )
  );
  document.getElementById("p").innerHTML = text;
};

document.onkeydown = function (e) {
  if (e.keyCode == 8) {
    text = text.substring(0, text.length - 1);
    console.log(text);
  }
  if (e.keyCode == 32) {
    document.body.style.backgroundColor = "white";
  }
  if (e.keyCode == 13) {
    text += "<br>";
    yHeight += 1;
    console.log(text);
  }
  document.getElementById("p").innerHTML = text;
};

var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

function setup() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createCanvas(canvas.width, canvas.height);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  };
  fill(100);
  //ground = Bodies.rectangle(0, canvas.innerHeight,0,canvas.width);
  //var box1 = Bodies.rectangle(100,100,50,50, options);
  var ground = Bodies.rectangle(0, canvas.height / 2, canvas.width * 2, 100, {
    isStatic: true
  });
  World.add(world, ground);
}

function Box(x, y, w, h, keyImage) {
  var options = {
    friction: 0.3,
    restitution: 0.6
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  this.image = keyImage;

  World.add(world, this.body);

  this.show = function () {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);

    pop();
  };
}

function keyImage(code) {
  var url;
  switch (code) {
    case 97:
      return "https://i.imgur.com/eljKHeN.png";
      break;
    case 98:
      return "https://i.imgur.com/xiQ1lLM.png";
      break;
    case 99:
      return "https://i.imgur.com/LnX3tMD.png";
      break;
    case 100:
      return "https://i.imgur.com/iqtndXO.png";
      break;
    case 101:
      return "https://i.imgur.com/KEiEyn2.png";
      break;
    case 102:
      return "https://i.imgur.com/XzkXgxf.png";
      break;
    case 103:
      return "https://i.imgur.com/wDOZbr1.png";
      break;
    case 104:
      return "https://i.imgur.com/VMsmA1d.png";
      break;
    case 105:
      return "https://i.imgur.com/4NQm6Bi.png";
      break;
    case 106:
      return "https://i.imgur.com/fLyafBQ.png";
      break;
    case 107:
      return "https://i.imgur.com/towSnKH.png";
      break;
    case 108:
      return "https://i.imgur.com/H99XdP6.png";
      break;
    case 109:
      return "https://i.imgur.com/dmITnOK.png";
      break;
    case 110:
      return "https://i.imgur.com/SOMQGmk.png";
      break;
    case 111:
      return "https://i.imgur.com/3CpfYA0.png";
      break;
    case 112:
      return "https://i.imgur.com/3pfZ3cA.png";
      break;
    case 113:
      return "https://i.imgur.com/ur59cdE.png";
      break;
    case 114:
      return "https://i.imgur.com/5mQf12a.png";
      break;
    case 115:
      return "https://i.imgur.com/6uKSTfy.png";
      break;
    case 116:
      return "https://i.imgur.com/3wweLF4.png";
      break;
    case 117:
      return "https://i.imgur.com/U6LZIkt.png";
      break;
    case 118:
      return "https://i.imgur.com/NgcuaFW.png";
      break;
    case 119:
      return "https://i.imgur.com/Tvvp37W.png";
      break;
    case 120:
      return "https://i.imgur.com/P35aLSN.png";
      break;
    case 121:
      return "https://i.imgur.com/dozTCG1.png";
      break;
    case 122:
      return "https://i.imgur.com/ep7Ba2e.png";
      break;
    case 8:
      return "https://i.imgur.com/FOEr5YI.png";
      break;
  }
}

function draw() {
  background(255);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill(255);
  rectMode(CENTER);
}
