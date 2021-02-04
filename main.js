var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

var c1_width= 120;
var c1_height= 70;
var c2_width= 120;
var c2_height= 70;
c1_x= 10;
c1_y= 10;
c2_x= 10;
c2_y= 20;
background_image= "racing1.jpg";
c1_image= "car1.png";
c2_image= "car2.png";

function add() {
    bg_imagetag= new Image();
    bg_imagetag.onload= uploadBackground;
    bg_imagetag.src= background_image;

 c1_imagetag= new Image();
    c1_imagetag.onload= uploadcar1;
    c1_imagetag.src= "car1.png";

    c2_imagetag= new Image();
    c2_imagetag.onload= uploadcar2;
    c2_imagetag.src= "car2.png";  

}

function uploadBackground() {
ctx.drawImage(bg_imagetag,0,0,canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(c1_imagetag,c1_x,rover_c1,c1_width, c1_height);
    }

    function uploadcar2() {
        ctx.drawImage(c2_imagetag,c2_x,rover_c2,c2_width, c2_height);
        }

    window.addEventListener("keydown", mykeydown );
    function mykeydown(e) {
        keypressed= e.keyCode;
        console.log(keypressed);
        if (keypressed=='38') {
            C1Up();
            console.log("Up");
        }
        if (keypressed=='40') {
            C1Down();
            console.log("Down");
        }
        if (keypressed=='39') {
            C1Right();
            console.log("Right");
        }
        if (keypressed=='37') {
            C1Left();
            console.log("Left");
        }

        if (keypressed=='119') {
            C2Up();
            console.log("Up");
        }
        if (keypressed=='115') {
            C2Down();
            console.log("Down");
        }
        if (keypressed=='100') {
            C2Right();
            console.log("Right");
        }
        if (keypressed=='97') {
            C2Left();
            console.log("Left");
        }

    }

    function C1Up() {
    if (c1_y>= 0) {
        c1_y= c1_y-10;
        console.log("When up arrow is pressed, x= "+ c1_x + " y= "+ c1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
    }

    function C1Down() {
        if (c1_y<= 500) {
            c1_y= c1_y + 10;
            console.log("When down arrow is pressed, x= "+ c1_x + " y= "+ c1_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
        }

        function C1Right() {
            if (c1_x<= 700) {
                c1_x= c1_x + 10;
                console.log("When right arrow is pressed, x= "+ c1_x + " y= "+ c1_y);
                uploadBackground();
                uploadcar1();
                uploadcar2();
            }
            }
            
            function C1Left() {
                if (c1_x>= 0) {
                    c1_x= c1_x - 10;
                    console.log("When left arrow is pressed, x= "+ c1_x + " y= "+ c1_y);
                    uploadBackground();
                    uploadcar1();
                    uploadcar2();
                }
                }


                function C2Up() {
                    if (c2_y>= 0) {
                        c2_y= c2_y-10;
                        console.log("When w arrow is pressed, x= "+ c2_x + " y= "+ c2_y);
                        uploadBackground();
                        uploadcar1();
                        uploadcar2();
                    }
                    }
                
                    function C2Down() {
                        if (c2_y<= 500) {
                            c2_y= c2_y + 10;
                            console.log("When s arrow is pressed, x= "+ c2_x + " y= "+ c2_y);
                            uploadBackground();
                            uploadcar1();
                            uploadcar2();
                        }
                        }
                
                        function C2Right() {
                            if (c2_x<= 700) {
                                c2_x= c2_x + 10;
                                console.log("When d arrow is pressed, x= "+ c2_x + " y= "+ c2_y);
                                uploadBackground();
                                uploadcar1();
                                uploadcar2();
                            }
                            }
                            
                            function C2Left() {
                                if (c2_x>= 0) {
                                    c2_x= c2_x - 10;
                                    console.log("When a arrow is pressed, x= "+ c2_x + " y= "+ c2_y);
                                    uploadBackground();
                                    uploadcar1();
                                    uploadcar2();
                                }
                                }
        
    