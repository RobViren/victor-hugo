import Wade from "wade";

var i = 0;
var productText = [];

function getNode() {
  var element = document.getElementById(i.toString());
  if (element) {
    productText.push(element.innerHTML.replace(/<\/?[^>]+(>|$)/g, ""));
  }
  i++;
  return (element);
}


while (getNode()) {

}

const search = Wade(productText);

var elm = document.getElementById("search");
elm.addEventListener("keyup", (e) => {
  console.log(search(e.target.value));
});
