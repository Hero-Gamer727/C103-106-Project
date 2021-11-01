Webcam.set({
    height:400,
    width:600,
    image_format:"jpeg",
    jpeg_quality:100
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function takescreenshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'">';
});
}

console.log("ml5 version: ",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/X5os-jtmZ/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function check(){
   img =  document.getElementById("captured_img");
   classifier.classify(img,gotresult);
}

function gotresult(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
     document.getElementById("object_name").innerHTML=results[0].label;
     document.getElementById("accuracy_number").innerHTML=results[0].confidence.toFixed(2);
}
}
