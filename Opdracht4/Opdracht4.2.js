var display=false
var display2=false
var display3=false
function changeImage() {
    if (display==false) {
        document.getElementById('eyes').src = "eyes2.png";
        display = true
    }
    else {document.getElementById('eyes').src = "eyes.png";display=false}
}
function changeImage2() {
    if (display2==false) {
        document.getElementById('nose').src = "nose2.png";
        display2 = true
    }
    else {document.getElementById('nose').src = "nose.png";display2=false}
}
function changeImage3() {
    if (display3==false) {
        document.getElementById('mouth').src = "mouth2.png";
        display3 = true
    }
    else {document.getElementById('mouth').src = "mouth.png";display3=false}
}