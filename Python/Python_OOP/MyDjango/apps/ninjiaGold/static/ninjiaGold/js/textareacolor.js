function textareacolor(text, color) {
  var oFont=document.createElement("FONT");
  var oText=document.createTextNode(text);
  oFont.style.color=color;
  form.topic.appendChild(oFont);
  oFont.appendChild(oText);
}
