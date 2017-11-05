var a = document.querySelectorAll(".icon-1");
var b = document.querySelectorAll(".icon-2");
var c = document.querySelectorAll(".icon-3");

for( var i=0;i<a.length;i++){
a[i].addEventListener("mouseover",function(){
	this.setAttribute("src","facebook(1).png");
});
a[i].addEventListener("mouseout",function(){
	this.setAttribute("src","facebook.png");
});

b[i].addEventListener("mouseover",function(){
	this.setAttribute("src","instagram(1).png");
});
b[i].addEventListener("mouseout",function(){
	this.setAttribute("src","instagram.png");
});
c[i].addEventListener("mouseover",function(){
	this.setAttribute("src","github(1).png");
});
c[i].addEventListener("mouseout",function(){
	this.setAttribute("src","github.png");
});
}

var imgg = document.querySelector(".homee");
		imgg.addEventListener("mouseover",function(){
			this.setAttribute("src","home-hover.png");
		});
		imgg.addEventListener("mouseout",function(){
			this.setAttribute("src","home.png");
		});