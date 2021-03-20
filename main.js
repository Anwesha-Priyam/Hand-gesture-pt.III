Webcam.set({
    width:350,
    height:320,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
 function Takepic()
 {
     Webcam.snap(function(data_uri){
         document.getElementById("PicResult").innerHTML='<img id="capturedImg" src="'+data_uri+'"/>';
     });
 }
console.log("ml5 version:", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5q9hGXDuy/model.json',modelLoaded);
function modelLoaded()
 {
     console.log("Model Loaded");
 }
var Prediction="";
function Identifypic()
{
    img=document.getElementById('capturedImg');
    classifier.classify(img,gotResult);
}
function gotResult(error,results)
{
if(error)
{
    console.error(error);
}
else
{
    console.log(results);
    if(results[0].label=="OK");
    {
        Prediction="&#128076;";
        document.getElementById("prediction").innerHTML=Prediction;
        speak();
    }
    if(results[0].label=="Good");
    {
     Prediction="&#128077;";
     document.getElementById("prediction").innerHTML=Prediction;
     speak();
    }
    if(results[0].label=="Rock");
    {
     Prediction="&#129304;";
     document.getElementById("prediction").innerHTML=Prediction;
     speak();
    }
    if(results[0].label=="Stone");
    {
     Prediction="&#9994;";
     document.getElementById("prediction").innerHTML=Prediction;
     speak();
    }
 }
}
function speak()
{
    var synth= window.speechSynthesis;
    if(Prediction=="&#128076;")
    {
        var utterThis=new SpeechSynthesisUtterance("I think the hand gesture is OK");
    }
    if(Prediction=="&#128077;")
    {
        var utterThis=new SpeechSynthesisUtterance("I think the hand gesture is Good");
    }
    if(Prediction=="&#129304;")
    {
        var utterThis=new SpeechSynthesisUtterance("I think the hand gesture is Rock");
    }
    if(Prediction=="&#9994;")
    {
        var utterThis=new SpeechSynthesisUtterance("I think the hand gesture is Stone");
    }
    synth.speak(utterThis);
}