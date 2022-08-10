Webcam.set({
    width:350,
    height: 350,
    image_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zoCWcforh/model.json',modelLoaded);

// when the model loades
function modelLoaded(){
    console.log("Model loaded! Time to celebrate!");
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
// a function if we have any sort of unknown error that we can't fix ASAP
function gotResult(error, results){
    // now.. show the error
    if (error){
        console.error(error);
    }
    else{
        // be confident
        console.log(result);
        document.getElementById("result_face_name").innerHTML = results[0].label;
        document.getElementById("result_face_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}