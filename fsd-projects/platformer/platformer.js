$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid(1300, 700);


    // TODO 2 - Create Platforms
createPlatform(250, 650, 15, 2);
createPlatform(350, 575, 15, 2);
createPlatform(450, 550, 15, 2);
createPlatform(550, 525, 15, 2);
createPlatform(675, 490, 15, 2);
createPlatform(475, 425, 15, 2);
createPlatform(275, 350, 15, 2);
createPlatform(225, 270, 15, 2);
createPlatform(500, 200, 1500, 10);
createPlatform(1000, 100, 100, 100);
createPlatform(380, 212, 15, 2);
createPlatform(1100, 100, 100, 100);
    // TODO 3 - Create Collectables
createCollectable("diamond", 550, 528);
createCollectable("steve", 250, 525);
createCollectable("max", 475, 415);
    createCollectable("grace", 675, 490);
    createCollectable("kennedi", 380, 212);
    // TODO 4 - Create Cannons
createCannon('top', 200, 450,);
createCannon('right', 350, 1300,);
    createCannon('right', 1300, 700,);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
