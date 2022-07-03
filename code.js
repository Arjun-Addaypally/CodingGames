var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var o1 = createSprite(30,30,30,30);
var o2 = createSprite(100,100,30,30);
var o3 = createSprite(170,170,30,30);
var o4 = createSprite(240,240,30,30);
var o5 = createSprite(310,310,30,30);
var o6 = createSprite(380,380,30,30);

var o7 = createSprite(100,30,30,30);
var o8 = createSprite(170,100,30,30);
var o9 = createSprite(240,170,30,30);
var o10 = createSprite(310,240,30,30);
var o11 = createSprite(380,310,30,30);

var o12 = createSprite(170,30,30,30);
var o13 = createSprite(240,100,30,30);
var o14 = createSprite(310,170,30,30);
var o15 = createSprite(380,240,30,30);

var o16 = createSprite(240,30,30,30);
var o17 = createSprite(310,100,30,30);
var o18 = createSprite(380,170,30,30);

var o19 = createSprite(310,30,30,30);
var o20 = createSprite(380,100,30,30);

var o22 = createSprite(30,100,30,30);
var o23 = createSprite(100,170,30,30);
var o24 = createSprite(170,240,30,30);
var o25 = createSprite(240,310,30,30);
var o26 = createSprite(310,380,30,30);

var o27 = createSprite(30,170,30,30);
var o28 = createSprite(100,240,30,30);
var o29 = createSprite(170,310,30,30);
var o30 = createSprite(240,380,30,30);

var o31 = createSprite(30,240,30,30);
var o32 = createSprite(100,310,30,30);
var o33 = createSprite(170,380,30,30);

var o34 = createSprite(30,310,30,30);
var o35 = createSprite(100,380,30,30);

o1.shapeColor = "red";
o2.shapeColor = "red";
o3.shapeColor = "red";
o4.shapeColor = "red";
o5.shapeColor = "red";
o6.shapeColor = "red";
o7.shapeColor = "red";
o8.shapeColor = "red";
o9.shapeColor = "red";
o10.shapeColor = "red";
o11.shapeColor = "red";
o12.shapeColor = "red";
o13.shapeColor = "red";
o14.shapeColor = "red";
o15.shapeColor = "red";
o16.shapeColor = "red";
o17.shapeColor = "red";
o18.shapeColor = "red";
o19.shapeColor = "red";
o20.shapeColor = "red";
o22.shapeColor = "red";
o23.shapeColor = "red";
o24.shapeColor = "red";
o25.shapeColor = "red";
o26.shapeColor = "red";
o27.shapeColor = "red";
o28.shapeColor = "red";
o29.shapeColor = "red";
o30.shapeColor = "red";
o31.shapeColor = "red";
o32.shapeColor = "red";
o33.shapeColor = "red";
o34.shapeColor = "red";
o35.shapeColor = "red";

var winbox = createSprite(30, 380, 30, 30);
winbox.shapeColor = "yellow";

var player = createSprite(370,30, 20, 20);
player.shapeColor = "white";

function draw() {
  background("black");
  
  createEdgeSprites();
  
  if (keyDown("RIGHT_ARROW")) {
    player.x = player.x+10;
  }
  if (keyDown("LEFT_ARROW")) {
    player.x = player.x-10;
  }
  if (keyDown("UP_ARROW")) {
    player.y = player.y-10;
  }
  if (keyDown("DOWN_ARROW")) {
    player.y = player.y+10;
  }
  
  player.bounceOff(edges);
  
  if (player.isTouching(o1)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o2)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o3)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o4)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o5)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o6)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o7)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o8)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o9)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o10)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o11)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o12)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o13)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o14)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o15)) {
    player.x = 370;
    player.y = 30;
  }
    if (player.isTouching(o16)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o17)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o18)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o19)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o20)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o22)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o23)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o24)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o25)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o26)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o27)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o28)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o29)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o30)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o31)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o32)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o33)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o34)) {
    player.x = 370;
    player.y = 30;
  }
  if (player.isTouching(o35)) {
    player.x = 370;
    player.y = 30;
  }
 
 
 
 if (player.isTouching(winbox)) {
   textSize(30);
   fill("lime");
   text("YOU WON!", 130, 200);
 }
  
  drawSprites();
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
