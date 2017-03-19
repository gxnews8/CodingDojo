function Circle(x, y, r, element_id)
{
  // private function that generates a range of random numbers
  var randomNumberBetween = function(min, max){
    return Math.random()*(max-min) + min;
  }

  // creates the SVG element and returns it
  var makeSVG = function(tag, attrs) {

        var svg_element = document.createElementNS('http://www.w3.org/2000/svg', tag);

        for (var k in attrs)
        {
            svg_element.setAttribute(k, attrs[k]);
        }

        return svg_element;
    }

  // set circle's coordinates and radius
  this.info = {
    x: x, // x coordinate
    y: y, // ys coordinate
    r: r, // radius
    id: element_id // element html id
  };

  // function to be executed once the class has been instantiated
  this.initialize = function() {

    // generate random velocity for the circle
    this.info.velocity = {
      x: randomNumberBetween(-3,3),
      y: randomNumberBetween(-3,3)
    }

    // create a circle
    var circle = makeSVG('circle', {
      cx: this.info.x,
        cy: this.info.y,
        r:  this.info.r,
        id: this.info.id,
        fill: "#"+((1<<24)*Math.random()|0).toString(16) // generate random color
    });

    // append circle to the svg element
    document.getElementById('svg').appendChild(circle);
  }

  // function to update the circle's coordinates
  this.update = function(time) {
    var circle_element = document.getElementById(this.info.id);

    // see if the circle is going outside the browser. if it is, reverse the velocity(x axis)
    if(this.info.x + this.info.r > document.body.clientWidth)
    {
      this.info.x = document.body.clientWidth - (this.info.r)
      this.info.velocity.x = this.info.velocity.x * -1;
    }
    else if(this.info.x - this.info.r < 0)
    {
      this.info.x = 0 + this.info.r;
      this.info.velocity.x = this.info.velocity.x * -1;
    }
    // see if the circle is going outside the browser. if it is, reverse the velocity(y axis)
    else if(this.info.y + this.info.r > document.body.clientHeight)
    {
      this.info.y = document.body.clientHeight - (this.info.r)
      this.info.velocity.y = this.info.velocity.y * -1;
    }
    else if(this.info.y - this.info.r < 0)
    {
      this.info.y = 0 + this.info.r;
      this.info.velocity.y = this.info.velocity.y * -1;
    }
    // update circle's coordinates
    else
    {
      this.info.x = this.info.x + (this.info.velocity.x * time);
      this.info.y = this.info.y + (this.info.velocity.y * time);
    }

    // set circle's new coordinate
    circle_element.setAttribute("cx", this.info.x);
    circle_element.setAttribute("cy", this.info.y);
  }

    this.initialize();
}

// the event loop
function PlayGround()
{
  var self = this;
  var counter = 0;  // counts the number of circles created
  var circles = []; // array that will hold all the circles created in the app

  // private function for updating the circles array
  var setCirclesArray = function(new_array) {
    circles = new_array;
  }

  // private function inside detect collision function
  // detect distance and see if two circles collided
  var detectCollision = function(circle1, circle2) {
    var dx = circle1.info.x - circle2.info.x;
    var dy = circle1.info.y - circle2.info.y;
    var distance = parseFloat(circle1.info.r + circle2.info.r);

    return (Math.pow(dx, 2) + Math.pow(dy, 2) <= Math.pow(distance, 2));
  }

  // private function for detecting circle collision
  var collide = function(circle, circles) {

    // loop through the array of circles
    for(i in circles)
    {
      // filter so that the newly created circle is not included in the loop
      if(i != circle.info.id)
      {
        // checks if there is a collision between two circles
        if(detectCollision(circle, circles[i]) == true)
        {
          // merge the two circles that collided
          self.mergeCircles(circle, circles[i], circles);
        }
      }
    }
  }

  // a loop that updates the circle's position on the screen
  this.loop = function() {

    for(circle in circles)
    {
      // update circle's position
      circles[circle].update(1);

      // detect collision
      collide(circles[circle], circles);
    }
  }

  // function for creating a circle
  this.createCircle = function(x,y,r) {

    var new_circle = new Circle(x,y,r,counter++);
    circles.push(new_circle);
  }

  // function for removing a circle
  this.removeCircle = function(circle_id, circles_array) {

    // delete the circle from the array of circles
    delete circles_array[circle_id];

    // remove the circle from the svg element
    var circle = document.getElementById('svg').getElementById(circle_id);
    document.getElementById('svg').removeChild(circle);
  }

  // function to merge two circles
  this.mergeCircles = function(circle1, circle2, circles_array) {

    // update the radius of the merged circle (circle1) on the array of circles
    var new_circle_info = circle1.info;

    // update the radius of the merged circle
    new_circle_info.r = parseFloat(circle1.info.r + circle2.info.r);

    // get the svg element
    var svg = document.getElementById('svg');

    // change coordinates and radius of merged circle on the array of circles
    circles[circle1.info.id].info.x = new_circle_info.x;
    circles[circle1.info.id].info.y = new_circle_info.y;
    circles[circle1.info.id].info.r = new_circle_info.r;
    circles[circle1.info.id].info.velocity.x = circle2.info.velocity.x;
    circles[circle1.info.id].info.velocity.y = circle2.info.velocity.y;

    // change coordinates and radius of merged circle on the svg element
    svg.getElementById(circle1.info.id).setAttribute('x', new_circle_info.x);
    svg.getElementById(circle1.info.id).setAttribute('y', new_circle_info.y);
    svg.getElementById(circle1.info.id).setAttribute('r', new_circle_info.r);

    // remove circle2 and since its radius is now merged with circle1
    self.removeCircle(circle2.info.id, circles_array);
  }

  // create one circle when the game starts
  this.createCircle(window.innerWidth/2, window.innerHeight/2, 5);
}

var playground = new PlayGround();
setInterval(playground.loop, 15);

// detect how long your mouse was clicked or held down
function getTime() {
  var date = new Date();
  return date.getTime();
}

document.onmousedown = function(e) {
  mousedown_time = getTime();
}

document.onmouseup = function(e) {
  time_pressed = (getTime() - mousedown_time)/20;
  playground.createCircle(e.x,e.y,time_pressed);
}
