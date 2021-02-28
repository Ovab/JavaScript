var display1=false
var display2=false
var display3=false
var display4=false
var display5=false
var display6=false
var display7=false
var display8=false
var display9=false
function changeImage1(clicked_object) {
    console.log(clicked_object);
    console.log(clicked_object.id);
    console.log("display"+clicked_object.id)

    var a="display"+clicked_object.id
    if (eval (a)==false) {
        console.log("BOOOM");
        document.getElementById(clicked_object.id).src = "cat"+clicked_object.id+".png";
        display = true
    }
    else {document.getElementById('cat1').src = "cat1.jpg";display=false}
}

function checklike() {
    var display1=true
    document.getElementById('2').src = "cat2.jpg";display2=false
    document.getElementById('3').src = "cat3.jpg";display3=false
    document.getElementById('4').src = "cat4.jpg";display4=false
    document.getElementById('5').src = "cat5.jpg";display5=false
    document.getElementById('6').src = "cat6.jpg";display6=false
    document.getElementById('7').src = "cat7.jpg";display7=false
    document.getElementById('8').src = "cat8.jpg";display8=false
    document.getElementById('9').src = "cat9.jpg";display9=false
}
