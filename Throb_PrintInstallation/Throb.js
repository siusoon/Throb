/*
Throb (2018, 2019) by Winnie Soon {www.siusoon.net}
last update: 8 Nov 2019
- update to test linux and pi version
- change speed, spacing, textsize, h
- add screenshot printing function (include screenshot, change bg and stroke colors)

Logic:
- display the throbber's stroke randomly and statically
- Pick one and then display in red, rotating clockwise by using the 4 strokes
- Set a 'timer' to save a snapshot of the screen for printing
- with function saveImg() to check the specific gallery operation hours
*/
let sketch = function(s) {
  let slash = ["—"," \\"," |"," /"];
  let throbber =[];
  let spacing = 45;
  let size = 35;
  let grid_pointer =0;
  let slash_counter =0;
  let screenshot;
  let throbber_c;
  let bg_c; 
  let saveTimer = 0; 
  let throbTimer = 0;
  let saveTime = 600000; //;
  let throbTime = 1200;

  s.setup = function() {
    s.createCanvas(s.windowWidth, s.windowHeight);
    for (let h = 30; h < s.height; h+=spacing) {
      for (let w = 0; w< s.width; w+=spacing) {
        s.append(throbber, new Throbber(s.floor(s.random(0,slash.length)), w, h));
      }
    }
  };

  s.draw = function() {   
    	if (s.millis() - throbTimer > throbTime) {
	   throbTimer = s.millis();
    	   if (s.millis() - saveTimer > saveTime) {
	      saveTimer = s.millis(); 
	      bg_c = 255;
	      throbber_c = 0;
	      screenshot = true;
    	   }else{
	      bg_c= 0;
	      throbber_c=255;
	      screenshot = false;
    	   }    
    	s.background(bg_c);

    	for (let i = 0; i <throbber.length; i++) {
      		throbber[i].Display(false);
    	}
  
    	if (slash_counter > slash.length){
      		grid_pointer = s.floor(s.random(0,throbber.length));
      		slash_counter = 0 ;
    	}
    	if (slash_counter <=slash.length) {
      		throbber[grid_pointer].Display(true);
      		throbber[grid_pointer].doThrob();
      		slash_counter++;
    	}	
    	if (screenshot == true) {
      		saveImg();
    	}
    }
  };

  function Throbber(no, xpos, ypos) {
   this.no = no;
   this.pos = new s.createVector(xpos, ypos);

   this.Display = function(state) {
     this.state = state;
     if (this.state) {
       s.fill (255,0,0);
     } else {
       s.fill(throbber_c);
     }
     s.textStyle(s.BOLD);
     s.textSize(size);
     s.text(slash[this.no], this.pos.x, this.pos.y);
   }

   this.doThrob = function() {
     this.no++;
     if (this.no == slash.length) {
       this.no =0;
     }
   }
  };

  function saveImg() {  //for gallery operation
    let goPrint = false;
    let printDay = [9,10,14,15,16,17,21,22,23,24]; //gallery day
    let m = false;
    for (let i =0; i<printDay.length; i++) {
	if (s.day() == printDay[i]) {
	   	m = true;
	}
    }	
    if (m) {	//operating hours
	if (s.hour() > 12 && s.hour() < 17)  {
	  	goPrint = true;
	}else if (s.hour() == 17 && s.minute() <15) {
	  	goPrint = true;
	}
    }
    if (s.day() == 8 && s.hour() > 9 && s.hour() < 21) {	//opening day
   	goPrint = true;
	if (s.hour() == 20 && s.minute() > 1) {
           goPrint = false;	
	}

    if (goPrint) {
       let t = s.year().toString() + s.month().toString() + s.day().toString() + s.hour().toString() + s.minute().toString();
       s.saveCanvas(t, 'jpg'); 
    }
  };
};

let screenSaver = new p5(sketch, "canvas");
