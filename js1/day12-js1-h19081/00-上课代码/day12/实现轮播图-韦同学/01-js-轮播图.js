//自动轮播
var index=0;
setInterval(function(){
	index++;
	index%=4;
	swipper(index)
	
},3000)

//图片和小圆点自动轮播
function swipper(i){
	for(var j=0;j<circles.length;j++){
		imgs[j].style.display="none";
		circles[j].style.backgroundColor="white";
	}
	
	imgs[i].style.display="block";
	circles[i].style.backgroundColor="red";
}

//点击切换效果
var circles=document.querySelectorAll(".circle li");
var imgs=document.querySelectorAll(".imgBox li");

for(var i=0;i<circles.length;i++){
	
	(function(i){
		circles[i].onclick=function(){
			index=i;
			swipper(i)
		}
	})(i)
	
}







