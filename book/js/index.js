window.onload = function () {
	console.log(myData);
	var note = document.querySelector("#note");
	var noteUl = document.querySelector("#noteUl");
	var noteHtml = "";
	for(var i=0;i<myData.length;i++){
		noteHtml+="<li>"+myData[i].ttitle+"</li>"
	}
	noteUl.innerHTML = noteHtml;
}