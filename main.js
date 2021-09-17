function preload()
{
 
}

function setup()
{
 canvas=createCanvas(340,300);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();
 tint_color="";
}

function draw()
{
 image(video,0,0,340,300);
 tint(tint_color);
}

function filter_tint()
{
 tint_color=document.getElementById("color_holding_name").value;
}

function take_snapshot()
{
 save("habib.png")
}
