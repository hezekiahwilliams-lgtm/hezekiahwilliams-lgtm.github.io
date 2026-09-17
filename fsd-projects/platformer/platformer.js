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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    /////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


   // TODO 2 - Create Platforms 
createPlatform(400, 610, 120, 620, "yellow")
createPlatform(700, 500, 150, 150, "red");
createPlatform(1000, 400, 290, 50, "Blue")
createPlatform(200, 650, 100, 290, "Lime")
createPlatform(1000, 650, 290, 450, "orange")



    // TODO 3 - Create Collectables
createCollectable("database", 450, 550, 0.5, 0.7);
createCollectable("database", 750, 450, 0.5, 0.7);
createCollectable("database", 1250, 300, 0.5, 0.7);
createCollectable("database", 1150, 500, 0.5, 0.7);
createCollectable("database", 250, 300, 0.5, 0.7);



    
    // TODO 4 - Create Cannons

createCannon("top", 400, 1000);
createCannon("top", 600, 1000);
createCannon("top", 1000, 700)
createCannon("top", 700, 1000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
