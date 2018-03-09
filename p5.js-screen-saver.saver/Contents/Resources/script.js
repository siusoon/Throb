//Credit: https://github.com/mactkg/p5.js-screen-saver
//Throb by Winnie Soon

var sketch = function(s) {

  var slash = ["—"," \\"," |"," /"];
  var throbber =[];
  var spacing = 45;
  var grid_pointer =0;
  var slash_counter =0;

  s.setup = function() {
    s.createCanvas(s.windowWidth, s.windowHeight);
    s.background(0);
    s.frameRate(2);
    for (var h = 60; h < s.height; h+=spacing) {
    for (var w = 0; w< s.width; w+=spacing) {
      s.append(throbber, new Throbber(s.floor(s.random(0,slash.length)), w, h));
    }
  }
  };

  s.draw = function() {
    s.background(0);
    for (var i = 0; i <throbber.length; i++) {
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
  };

  function Throbber(no, xpos, ypos) {
   this.no = no;
   this.pos = new s.createVector(xpos, ypos);

   this.Display = function(state) {
     this.state = state;
     if (this.state) {
       s.fill (255,0,0);
     } else {
       s.fill(255);
     }
     s.textSize(50);
     s.text(slash[this.no], this.pos.x, this.pos.y);
   }

   this.doThrob = function() {
     this.no++;
     if (this.no == slash.length) {
       this.no =0;
     }
   }
 }

};

var screenSaver = new p5(sketch, "canvas");
