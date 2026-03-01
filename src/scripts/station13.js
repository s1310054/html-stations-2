function changeBackgroundColor(e) {
  const text = document.getElementById("text");
  const button = document.getElementById("check");
  if (button.checked) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "white";
  }
}
