function down (event) {


    if (event && chars.jim.state != 'defeated' && chars.jim.draw){
        var key = event.keyCode;

        switch (key) {
    
    case 87: // W
            pressed_up = true;
        break;

        case 38: // W
            pressed_up = true;
        break;
        
         

case 65: // A

            if (chars.jim.suit == 'labcoat') {
                chars.jim.img.src = "./content/images/jim_left.png";
            } else if (chars.jim.suit == 'flightsuit') {
                chars.jim.img.src = "./content/images/flightsuit_left.png";
            }
            pressed_left = true;
        break;

         

case 37: // A

            if (chars.jim.suit == 'labcoat') {
                chars.jim.img.src = "./content/images/jim_left.png";
            } else if (chars.jim.suit == 'flightsuit') {
                chars.jim.img.src = "./content/images/flightsuit_left.png";
            }
            pressed_left = true;
        break;





        case 68: // D
            if (chars.jim.suit == 'labcoat') {
                chars.jim.img.src = "./content/images/jim_right.png";
            } else if (chars.jim.suit == 'flightsuit') {
                chars.jim.img.src = "./content/images/flightsuit_right.png";
            }
            pressed_right= true;
    
    break;

        case 39: // D
            if (chars.jim.suit == 'labcoat') {
                chars.jim.img.src = "./content/images/jim_right.png";
            } else if (chars.jim.suit == 'flightsuit') {
                chars.jim.img.src = "./content/images/flightsuit_right.png";
            }
            pressed_right= true;
    
    break;






        case 83: // S
            pressed_down = true;
        
break;

        case 40: // S
            pressed_down = true;
        
break;

        
        pressed_space = true;

        for (var i in npcs) {
            if (npcs[i].draw && npcs[i].role == 'enemy' & chars.jim.ammo > 0){
                chars.jim.beam = true;
                //snd_hit.play();
            } 
        }
        break;
    }
}
}

function up (event) {


    if (event && chars.jim.state != 'defeated' && chars.jim.draw){
        var key = event.keyCode;

        switch (key) {
    
    case 87: // W
            pressed_up = false;
    
    break;

        

case 65: // A

            pressed_left = false;
        break;


        case 68: // D
        pressed_right= false;
    
    break;



        case 83: // S
        pressed_down = false;       
        
break;

        
        pressed_space = false;
        break;
    }
}
}