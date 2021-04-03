

function setup() {
  // put setup code here
  var canvas = createCanvas(809, 500);
  canvas.parent('sketch-holder');
  stroke(0);
  frameRate(0.5);
  colorMode(HSB, 255);
  a = random(240, 255);
  b = 250;

}

function draw() {
  // put drawing code here
  let t = map(mouseX, 0, width, -5, 5);
  curveTightness(t);
  f = color(random(0, 255), b, a);
    c = color(random(0, 255), b, a);
    h = color(random(0, 255), b, a);
    e = color(random(0, 255), b, a);
    g = color(random(0, 255), b, a);
  background(random(0,255), random(0,180), random(40,200));
  strokeWeight(random(15,40));
  noFill();

  
  for(let i=0; i<100; ++i) {
  stroke(f);
  beginShape();
  z = random(0, 500)
  y = random(0, 500)
  x = random(0, 500)
  w = random(0,500)
  v = random (0, 600)
  curveVertex(z, y); // the first control point
  curveVertex(z, y); // is also the start point of curve
  curveVertex(80, x);
  curveVertex(v, v);
  stroke(c);
  curveVertex(60, 120);
  curveVertex(50, w); // the last point of curve
  curveVertex(50, w); // is also the last control point
  endShape();
  stroke(h);
  strokeWeight(random(5,30));
  beginShape();
  z = random(0, 500)
  y = random(0, 500)
  x = random(0, 500)
  w = random(0,500)
  curveVertex(z, y); // the first control point
  curveVertex(z, y); // is also the start point of curve
  curveVertex(80, x);
  curveVertex(v, v);
  curveVertex(60, 120);
  curveVertex(50, w); // the last point of curve
  curveVertex(50, w); // is also the last control point
  endShape();
  stroke(e);
  strokeWeight(random(5,30));
  beginShape();
  z = random(200, 800)
  y = random(200, 800)
  x = random(200, 800)
  w = random(200,800)
  curveVertex(z, y); // the first control point
  curveVertex(z, y); // is also the start point of curve
  curveVertex(200, x);
  curveVertex(v, v);
  curveVertex(300, 120);
  curveVertex(w, w); // the last point of curve
  curveVertex(w, w); // is also the last control point
  endShape();
  stroke(g);
  strokeWeight(random(15,40));
  beginShape();
  z = random(500, 800)
  y = random(500, 800)
  x = random(500, 800)
  w = random(500,800)
  curveVertex(z, y); // the first control point
  curveVertex(z, y); // is also the start point of curve
  curveVertex(500, x);
  curveVertex(v, v);
  curveVertex(500, 120);
  curveVertex(w, w); // the last point of curve
  curveVertex(w, w); // is also the last control point
  endShape();
  strokeWeight(random(1,20));
  stroke(f);  
  beginShape();
  z = random(0, 800)
  y = random(0, 800)
  x = random(0, 800)
  w = random(0,800)
  curveVertex(z, w); // the first control point
  curveVertex(z, w); // is also the start point of curve
  curveVertex(x, w);
  curveVertex(v, v);
  curveVertex(x, 120);
  curveVertex(w, w); // the last point of curve
  curveVertex(w, w); // is also the last control point
  endShape();
  strokeWeight(random(1, 2));
  stroke(10);  
  beginShape();
  z = random(0, 800)
  y = random(0, 800)
  x = random(0, 800)
  w = random(0,800)
  curveVertex(z, w); // the first control point
  curveVertex(z, w); // is also the start point of curve
  curveVertex(x, w);
  curveVertex(v, v);
  curveVertex(x, 120);
  curveVertex(w, w); // the last point of curve
  curveVertex(w, w); // is also the last control point
  endShape();
  }

}