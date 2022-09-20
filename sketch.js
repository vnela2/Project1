 var up = 0;
 var right = 1;
 var down = 2;
 var left = 3;
 var direction = down;

 var stepSize = 3;
 var minLength = 10;
 var diameter = 1;
 var angleCount = 20;
 var angle;
 var reachedBorder = false;
 var speed = 3;
 
 
 var xPosition;
 var yPosition;
 var newXPos;
 var newYPos;

function setup() 
{
   createCanvas(windowWidth,windowHeight);
   background(0,0,0);
 
   angle = changeAngle(direction);
   xPosition = floor(random(width));
   yPosition = 5;
   newXPos = xPosition;
   newYPos = yPosition;
}

function draw() 
{
    let x = random(0,255);
    let y = random(0,255);
    let z = random(0,255);
    let w = random(2,11);

    //var speed = 4; //int(map(4, 0, width, 0, 20))
    for (var i = 0; i <= speed; i++) 
    {
        strokeWeight(2);
        stroke(0,0,255);
        point(xPosition, yPosition);
        
        xPosition += cos(radians(angle)) * stepSize;
        yPosition += sin(radians(angle)) * stepSize;
        
        reachedBorder = false;
 
        if (yPosition <= 5) 
        {
            direction = down;
            reachedBorder = true;
        }  
        else if (xPosition >= width - 5) 
        {
            direction = left;
            reachedBorder = true;
        }  
        else if (yPosition >= height - 5) 
        {
            direction = up;
            reachedBorder = true;
        }  
        else if (xPosition <= 5) 
        {
            direction = right;
            reachedBorder = true;
        }
 
        var currentPixel = get(floor(xPosition), floor(yPosition));
        if (reachedBorder) 
        {
            angle = changeAngle(direction);
 
            var distance = dist(xPosition, yPosition, newXPos, newYPos);
            if (distance >= minLength) 
            {
                strokeWeight(w);
                stroke(x,y,z);
                line(xPosition, yPosition, newXPos, newYPos);
            }
 
            newXPos = xPosition;
            newYPos = yPosition;
        }
    }
}
 
function changeAngle(currentDirection) 
{
   var a = (floor(random(-angleCount, angleCount)) + 0.5) * 90 / angleCount;
   if (currentDirection == up) return a - 90;
   if (currentDirection == right) return a;
   if (currentDirection == down) return a + 90;
   if (currentDirection == left) return a + 180;
   return 0;
}

function keyTyped()
{
    if(key === 'd')
    {
        speed = speed + 1;
    }
    else if(key === 'a')
    {
        speed = speed - 1;
    }
    console.log(speed);
}
 