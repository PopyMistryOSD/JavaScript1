///getElementById //
// var myheading = document.getElementById("heading1");
// // myheading.innerHTML = "Hello";
// document.querySelector(".my-div a").innerHTML = "new text";
// function myMessage1(){
//     alert("Hello Everyone");
// }
// function myMessage2(){ 
//     alert("Hello Everyone");
// }

// function myMessage3(){
//     alert("I am paragraph");
// }

// function myMessage1(){
//     var myVar=document.querySelector("#paraId");
//     myVar.innerHTML ="You have clicked on button1 popy";
// }
// function myMessage2(){
//     var myVar=document.querySelector("#paraId");
//     myVar.innerHTML ="You have clicked on button2";
// }

// function myMessage1()
//     var myVar = document.querySelector("#myImageId");
//     function myPicture1(){
//         myVar.src ="images/popy.jpg";
// }

//     function myPicture2(){
//         myVar.src ="images/popy1.jpg";
// }

////****Image slider****javascript thaka html select korta hoi--///////

// var photos =["images/popy1.jpg", "images/popy2.jpg", "images/popy3.jpg"];
// var imgTag = document.querySelector("img");

// var count = 0;
// function next(){
//     count++;
//     if(count >= photos.length) {
//         count=0;
//         imgTag.src = photos[count];
//     } else {
//        imgTag.src = photos[count];
//     }
// }
// function prev() {
//     count--;

//     if (count < 0 ){
//         count = photos.length - 1;
//         imgTag.src = photos[count];
//     } else{
//         imgTag.src = photos[count];
//     }
    
// }
/////Changing CSS style dynamically***javascript thaka CSS select korta hoi/////
// function addStyle(){

//     var myVar = document.querySelector("#paraId");
//     myVar.classList.add("para-style");
     
// }
// function removeStyle(){

//     var myVar = document.querySelector("#paraId");
//     myVar.classList.remove("para-style");
    
// }
////****Event Listener****//////
// document.querySelector("button").addEventListener("click",myFunction);
// function myFunction(){
//     alert("Hello");
// }
// var myVar = document.querySelector("h1");
// myVar.addEventListener("click",function(){
//     myVar.classList.add("my-style");
// });
// /////mouse add & mouse remove ar kaj////
// myVar.addEventListener("mouseover",function(){
//     myVar.classList.add("my-style");
// });
// myVar.addEventListener("mouseout",function(){
//     myVar.classList.remove("my-style");

// });
////*****Event Listeners with multiple elements*****/////
// document.querySelectorAll(".myButton")[0].addEventListener("click",function(){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + "is click";
// });
// document.querySelectorAll(".myButton")[1].addEventListener("click",function(){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + "is click";
// });
// document.querySelectorAll(".myButton")[2].addEventListener("click",function(){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + "is click";
// });
////ayta simple a korer jonno ja korbo loop use kora////

// var len = document.querySelectorAll(".myButton").length;
// for (var i = 0; i<len; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text + "is clicked";
//     });
// }
//////****How to play audio in javascript****/////
// for (var i = 0; i<3; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
//        var text = this.innerHTML;
//        console.log(text);
       
//        switch(text){
//         case "a":
//             var audio = new Audio("sounds/sound1.mp4");
//             audio.play();
//             break;
//         case "b":
//             var audio = new Audio("sounds/sound2.mp4");
//             audio.play();
//             break;
//         case "c":
//             var audio = new Audio("sounds/sound3.mp4");
//             audio.play();
//             break;        
//        }

//     });
// }
///simple ja vaba kora ji///
// for (var i = 0; i<3; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
//        var text = this.innerHTML;
//        console.log(text);
//        audioPlay(text);
//        playAnimation(text);

//     });
// }
// function audioPlay(text){
//     switch(text){
//         case "a":
//             var audio = new Audio("sounds/sound1.mp4");
//             audio.play();
//             break;
//         case "b":
//             var audio = new Audio("sounds/sound2.mp4");
//             audio.play();
//             break;
//         case "c":
//             var audio = new Audio("sounds/sound3.mp4");
//             audio.play();
//             break;        
//        }
// }
// function playAnimation(text){
//     var selectedButton = document.querySelector("."+text);
//     selectedButton.classList.add("anim");

//     setTimeout(function(){
//         selectedButton.classList.remove("anim");

//     },1000);
    
// }
/////////DOM Event | Event Object | onchange event/////
//<input/>-text,number,password,email,color,radio,checkbox,serce,time,date,datetime,week,
///month,url,tel,file,
// //<select>//<textarea>,
// const input = document.querySelector("input");
// input.addEventListener("change",changeHandler);
// function changeHandler(e){
//     console.log(e.type);
// }
//////
// console.clear();
// const input = document.querySelector("input[name=name]");
// input.addEventListener("change",changeHandler);
// function changeHandler(e){
//     // console.log(e);
//     // console.log(e.type);
//     // console.log(e.target.className);
//     // console.log(e.target.id);
//     console.log(e.target.value);
// }
////chackbox select////
// const programs = document.querySelectorAll("input[name=program]");
// // console.log(programs);
// Array.from(programs).map((program) => { 
//     program.addEventListener("change",programHandler);
// });
// function programHandler(e){
//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// }
// const department = document.querySelector("#department");
// // console.log(depertment);

// department.addEventListener("change",handleDepartment); 

// function handleDepartment(e) {
//    console.log("selected"); 
// }
/// DOM Event | Event Object | onsubmit event////
// const form = document.querySelector("form");
// const name = form.querySelector("div #name");
// const email = form.querySelector("div #email");
// const password = form.querySelector("div #password");

// form.addEventListener("submit", formHandler);
 
// function formHandler(e){
//     e.prventDefault(e);
//     console.log("submit");
// }

////DOM Event | Event Object | media events////
///audio/video events
//canplay,play,playing,pause,progress,ended,volumechange,waiting.//
// const video = document.querySelector("video");
// video.addEventListener("canplay",function(){
//     console.log("canplay");
// });
// video.addEventListener("play",function(){
//     console.log("play");
// });
// video.addEventListener("pause",function(){
//     console.log("pause");
// });
// video.addEventListener("playing",function(){
//     console.log("playing");
// });
// video.addEventListener("ended",function(){
//     console.log("thanks for watching");
// });
// video.addEventListener("volumechange",function(){
//     console.log("volum change");
// });
///// DOM Event | Event Object | scroll, resize, toggle/////
///load,unload,scroll,resize,toggle///
// window.addEventListener("load",function(){
//     console.log("load");
// });
// window.addEventListener("unload",function(){
//     console.log("unload");
// });
////DOM Event | Event Object | scroll, resize, toggle///
// window.addEventListener("scroll",function(){
//     console.log("scroll");
// });
///resize///
// window.addEventListener("resize",function(){
    
//     const width = window.outerWidth;
//     const height = window.outerHeight;
//     console.log(`height: ${height},width:${width}`);
// });
///toggle-- details///
// const details = document.querySelector("details");
// details.addEventListener('toggle',function(e){
//     console.log(e.target.open);
// })
//  DOM Event | MouseEvent// MouseEvent <html>,<head>,<meta>,<title>,<br>,
// <style>,<script>,<iframe>,<param>,<base>,<bbo>
// //1.onclick
// //2.onblclick
// //3.onmousedown
// //4.onmousedup
// //5.onmouseenter
// //6.onmouse lesve
// //7.onmousemove
// //8.onmouseover///// 
// console.clear();
// var a;

// var custom=document.getElementById('custom');

// document.addEventListener("click", function() {
// //     console.log("click is occour")
// custom.
//  });
//  a.addEventListener("dblclick", function () {
//      console.log("dblclick is occured ");
// });


// const textarea = document.querySelector("textarea");
// textarea.addEventListener("keydown",function(){
//     console.log("keydown")

// });
// textarea.addEventListener("keypress",function(){
//     console.log("keypress")

// });
// textarea.addEventListener("keyup",function(){
//     console.log("keyup")

// });

///////**DOM Event | ClipboardEvent***//////

const input = document.querySelector("input");

input.addEventListener('copy', function(){
    console.log('you have copied');
});
input.addEventListener('cut', function(){
    console.log('you have cut');
});
input.addEventListener('paste', function(){
    console.log('you have pasted');
});
