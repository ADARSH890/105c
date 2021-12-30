Webcam.set({
    height:300,
    width:350,
    image_format:"jpg",
    jpg_quality:100
});
camera =document.getElementById("camera");
Webcam.attach(camera);
function click_picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="mytakeselfie" src="'+data_uri+'">';
        
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/37l7DduFF/model.json",modelLoaded);
function modelLoaded(){
    console.log("modalLoaded");
}
function identify(){
    img=document.getElementById("mytakeselfie");
    classifier.classify(img,gotresult);

}
function gotresult(error,results){
     if (error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("object_name").innerHTML=results[0].label;
         document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(5);
     }
}
