var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);

if(e.shiftKey==true&& keypress=="80"){
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;

}
if(e.shiftKey==true&& keypress=="77"){
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}

if(keypress=="38"){
    up();
    console.log("up");
}
if(keypress=="40"){
    down();
    console.log("down");
}
if(keypress=="37"){
    left();
    console.log("left");
}
if(keypress=="39"){
    right();
    console.log("right");
}
if(keypress=="70"){
    new_image("hulk_face.png");
    console.log("f");
}
if(keypress=="76"){
    new_image("hulk_left_hand.png");
    console.log("l");
}
if(keypress=="82"){
    new_image("hulk_right_hand.png");
    console.log("r");
}
if(keypress=="66"){
    new_image("hulkd_body.png");
    console.log("b");
}
if(keypress=="69"){
    new_image("hulk_legs.png");
    console.log("e");
}
}
function up(){
    if(player_y>=0){
        player_y=player_x-block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y<=800){
        player_y=player_y+block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=1500){
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}