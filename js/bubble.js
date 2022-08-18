//----------
/* here item-2 selected 4times and ul once, section once and body once. when I clicked body, it shows body selected. and when i clicked section it shows body and section are selected. agian if I clicked ul it shows body, section, and ul are selected. same for item-2. it shows body, section, ul and item-2 are selected. it happens for event bubble. */

/* document.getElementById("item-2").addEventListener("click", function () {
    console.log("item-2 clicked once");
});
document.getElementById("item-2").addEventListener("click", function () {
    console.log("item-2 clicked twice");
});
document.getElementById("item-2").addEventListener("click", function () {
    console.log("item-2 clicked thrice");
});
document.getElementById("item-2").addEventListener("click", function () {
    console.log("item-2 clicked four times");
});
document.getElementById("ul-id").addEventListener("click", function () {
  console.log("ul clicked");
});
document.getElementById("section-id").addEventListener("click", function () {
  console.log("section clicked");
});
document.getElementById("body-id").addEventListener("click", function () {
  console.log("body clicked");
}); */

//-----------

/* //if we want to stop event bubble we have to add stopPropagation(). for this we have to pass event as parameter
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 clicked once");
  event.stopPropagation();
});
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 clicked twice");
  event.stopPropagation();
});
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 clicked thrice");
  event.stopPropagation();
});
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 clicked four times");
  event.stopPropagation();
});
document.getElementById("ul-id").addEventListener("click", function (event) {
  console.log("ul clicked");
  event.stopPropagation();
});
document
  .getElementById("section-id")
  .addEventListener("click", function (event) {
    console.log("section clicked");
    event.stopPropagation();
  });
document.getElementById("body-id").addEventListener("click", function (event) {
  console.log("body clicked");
  event.stopPropagation();
}); */

//---------
//on the above stopPropagation stop multi selection for one element. but when we do multiple function for the same element. it can not stop stopPropagation. on the above item-2 selected 4times. stopPropagation can't not handle it. so if we want to handle it we have to use stopImmediatePropagation()
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 clicked once");
  event.stopImmediatePropagation();
});
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 clicked twice");
  event.stopImmediatePropagation();
});
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 clicked thrice");
  event.stopImmediatePropagation();
});
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 clicked four times");
  event.stopImmediatePropagation();
});
document.getElementById("ul-id").addEventListener("click", function (event) {
  console.log("ul clicked");
  event.stopImmediatePropagation();
});
document
  .getElementById("section-id")
  .addEventListener("click", function (event) {
    console.log("section clicked");
    event.stopImmediatePropagation();
  });
document.getElementById("body-id").addEventListener("click", function (event) {
  console.log("body clicked");
  event.stopImmediatePropagation();
});
