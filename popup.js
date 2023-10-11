var state="inactive"; //disabled, inactive, active
function debug(text){
    document.getElementById('temp').innerHTML=text;
}

function init(){
chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function (tab) {
      if (tab["url"] == "https://web.whatsapp.com/" || tab["url"] == "http://web.whatsapp.com/"){
        state="active";
        document.getElementById("status").className = "btn btn-success";
        document.getElementById("status").innerHTML = "Active";
      }
      else {
        state="inactive";
        document.getElementById("status").className = "btn btn-secondary";
        document.getElementById("status").innerHTML = "Inactive";
      }
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('status');
    // onClick's logic below:
    btn.addEventListener('click', function() {
        reverseState();
    });
});
} init();

function reverseState(){
    if (state=="active"){
        state="disabled";
        document.getElementById("status").className = "btn btn-danger";
        document.getElementById("status").innerHTML = "Disabled";
    } else if (state=="inactive"){
        ;
    } else if (state=="disabled"){
        state="active";
        document.getElementById("status").className = "btn btn-success";
        document.getElementById("status").innerHTML = "Active";
    }
}
