var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","e19d4d52-2255-445b-98b5-833130e87eb5","76005f05-2fc2-4917-9f66-7a9656c200a7","f1016e44-f9fe-4526-9ec4-826ebdba4732","a73ff05f-8962-4b3f-a96b-2e4466808bbc"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"ball","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"tt6HNI9_cQZAvXZLzj4fCqK.gaMTtCY0","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"hero1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"ja2vSoSzEu9tCbhSTCyNRYfegPveMk00","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"6BJfJFW8oFoz6Q52XfI6Ve89CcP2Zmdz","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"e19d4d52-2255-445b-98b5-833130e87eb5":{"name":"space","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"},"76005f05-2fc2-4917-9f66-7a9656c200a7":{"name":"alien1","sourceUrl":"assets/api/v1/animation-library/gamelab/KhGCMOy_GmSGbNF7hrN3JLopGwt9Bzuj/category_fantasy/alienGreen_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"KhGCMOy_GmSGbNF7hrN3JLopGwt9Bzuj","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KhGCMOy_GmSGbNF7hrN3JLopGwt9Bzuj/category_fantasy/alienGreen_walk.png"},"f1016e44-f9fe-4526-9ec4-826ebdba4732":{"name":"alien2","sourceUrl":"assets/api/v1/animation-library/gamelab/dc4vui4_pmHrM.rep9aLGndzWtuC_cqp/category_fantasy/alienBlue_walk.png","frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"dc4vui4_pmHrM.rep9aLGndzWtuC_cqp","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dc4vui4_pmHrM.rep9aLGndzWtuC_cqp/category_fantasy/alienBlue_walk.png"},"a73ff05f-8962-4b3f-a96b-2e4466808bbc":{"name":"alien3","sourceUrl":"assets/api/v1/animation-library/gamelab/URK4xVVZXk4xmKhl9upxQkUAoNbBc7oo/category_board_games_and_cards/alienYellow_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"URK4xVVZXk4xmKhl9upxQkUAoNbBc7oo","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/URK4xVVZXk4xmKhl9upxQkUAoNbBc7oo/category_board_games_and_cards/alienYellow_badge.png"}}};
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

var b = createSprite(200,200);
 b.setAnimation("space")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("hero1");
hero.scale=0.5;
enemy1.setAnimation("alien1");
enemy1.scale=0.5;
enemy2.setAnimation("alien2");
enemy2.scale=0.5;
enemy3.setAnimation("alien3");
enemy3.scale=0.5;

enemy1.setVelocity(-7,0);
enemy2.setVelocity(7,0);
enemy3.setVelocity(7,0);


function draw() {
  
//plano de fundo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-5
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+5
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-5
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+5
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  hero.x=200
  hero.y=345
  goal=goal+1
}
  

  drawSprites();
textSize(20);
  fill("yellow")
  text("mortes:"+death,20,350);
  
  textSize(20);
  text("Objetivos:"+goal,290,350);
  fill("yellow");
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
