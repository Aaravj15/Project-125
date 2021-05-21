leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,550);
    
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet  = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#FFA500');
document.getElementById("font_size").innerHTML = "Font-size of the text will be = " + difference + "px";
textSize(difference);
fill('#000000');
text('Aarav', 50, 400);
    
}

function modelLoaded()
{
    console.log('modelLoaded');
}

function gotPoses(results)
{
    if(results.length> 0)
    {
        console.log(results);
 
        leftWristX = results[0].pose.leftWrist.x; 
        rightWristX = results[0].pose.rightWrist.x; 
        difference = floor(leftWristX-rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}