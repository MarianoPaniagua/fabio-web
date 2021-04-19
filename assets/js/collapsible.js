var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = document.getElementById(this.id[0]);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      var othermodal = document.getElementById(this.id[0] == 1 ? 2 : 1);
      othermodal.style.display ="none";
    }
  });
}