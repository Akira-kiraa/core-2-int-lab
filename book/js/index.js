window.onload = function () {
	console.log(myData);
	var note = document.querySelector("#note");
	var noteUl = document.querySelector("#noteUl");
	var cardBox = document.querySelector("#cardBox");
	var singer = document.querySelector("#singer");
	var language = document.querySelector("#languageShow");
	var version = document.querySelector("#versionShow");
	var level = document.querySelector("#levelShow");
	var content = document.querySelector("#content");
	var noteHtml = "";
	for(var i=0;i<myData.length;i++){
		noteHtml+="<li idx='"+myData[i].number+"'>"+myData[i].title+"</li>"
	}
	noteUl.innerHTML = noteHtml;
	
	$("#noteUl li").bind("click",function(){
		//console.log($(this).attr("idx"));
		var currentIdx = $(this).attr("idx");
		$("#content").empty().html(myData[currentIdx].lyrics);
		console.log(myData[currentIdx].singer+" "+myData[currentIdx].language+" "+myData[currentIdx].version+" "+myData[currentIdx].loveLevel);
		singer.innerText = "singer："+myData[currentIdx].singer;
		language.innerText = "language："+myData[currentIdx].language;
		version.innerText = "version："+myData[currentIdx].version;
		level.innerText = "level："+myData[currentIdx].loveLevel;
		$(cardBox).show();
	});
	content.addEventListener("click",function(){
		$(cardBox).show();
	});
	cardBox.addEventListener("click",function(){
		$(this).hide();
	});
}