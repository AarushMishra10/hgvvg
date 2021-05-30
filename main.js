canvas=document.getElementById("Tanushcanvas"); 
ctx=canvas.getContext("2d"); 

car1_width=100; 
car1_height=90; 
car1_X=10; 
car1_Y=10; 
background_image="mars.jpg"; 
car1_image="car1.png";
function add(){
    background_imgTag=new Image(); 
    background_imgTag.onload= uploadBackground; 
    background_imgTag.src=background_image;


    car1_imgTag=new Image(); 
    car1_imgTag.onload= uploadCar1; 
    car1_imgTag.src=car1_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0,canvas.width,canvas.height)
}
function uploadRover(){
    ctx.drawImage(car1_imgTag, car1_X,car_Y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown); 
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='37'){
        left();
        console.log("left");
     }

     if(keyPressed=='38'){
        up();
        console.log("up");
     }

     if(keyPressed=='39'){
        right();
        console.log("right");
     }

     if(keyPressed=='40'){
        down();
        console.log("down");
     }
}


function up(){
    if(car1_Y>= 0){
        car1_Y= rover_Y-10;
        console.log("when up arrow is pressed, X=" +car_X +"Y=" +car_Y); 
        uploadBackground();
        uploadCar1();


    }
}

function down(){
    if(rover_Y<= 500){
        rover_Y= rover_Y+ 10;
        console.log("when down arrow is pressed, X=" +rover_X +"Y=" +rover_Y); 
        uploadBackground();
        uploadCar1();

        
    }
}

function right(){
    if(rover_X<= 700){
        rover_X= rover_X+10;
        console.log("when right arrow is pressed, X=" +rover_X +"Y=" +rover_Y); 
        uploadBackground();
        uploadCar1();

        
    }
}

function left(){
    if(rover_X>= 0){
        rover_X= rover_X-10;
        console.log("when left arrow is pressed, X=" +rover_X +"Y=" +rover_Y); 
        uploadBackground();
        uploadRover();

        
    }
}