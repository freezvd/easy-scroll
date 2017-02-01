var pageContent = document.getElementById("continut");
console.log(pageContent);
var pagecopy = pageContent.cloneNode(true);
console.log(pagecopy);
var blurryContent = document.getElementById("blurryscroll");
console.log(blurryContent);
    blurryContent.appendChild(pagecopy);



window.onscroll = function(){
    blurryContent.scrollTop = window.pageYOffset;
}