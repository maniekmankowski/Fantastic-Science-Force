character = function(draw,speed,x,y,src,defeated_src,height,scene,type,hp,state,text,xp,ammo,beam,contact,melee_damage,suit){
this.draw = draw;
this.speed = speed;
this.x = x;
this.y = y;
this.src = src;
this.img = new Image();
this.img_defeated = new Image();
this.img.src = src;
this.img_defeated.src = defeated_src;
this.height = height;
this.scene = scene;
this.type = type;
this.hp = hp;
this.state = state;
this.text = text;
this.xp = xp;
this.ammo = ammo;
this.beam = false;
this.contact = false;
this.melee_damage = melee_damage;
this.suit = suit;
}