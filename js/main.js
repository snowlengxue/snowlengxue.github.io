/**
 * Created by vicky on 2016/11/1.
 */

var btn= document.getElementsByClassName("button1");
var det= document.getElementsByClassName("details1");

btn.onclick= function () {
    if(det.style.display== "none") {
        det.style.display= "block";
    }else{
        det.style.display= "none";
    }
}