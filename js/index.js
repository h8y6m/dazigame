function game(sence){
	this.sence=sence;
	this.letter=['A','B','C','D','E','F','G','H','I','J','K','L','M',
	'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    this.num=4;
	this.letterArr=[];
	this.cw=document.documentElement.clientWidth;
	this.ch=document.documentElement.clientHeight;
	this.leve=1;
	this.speed=3;
	this.score=10;
	this.getLetter(4)
	this.play()
	this.key()
}
game.prototype.getLetter=function(num){
	if(num==0){return;}
	for(var i=0;i<num;i++){
		//放在数组里  插入body里
		//this.letter[Math.floor(Math.random()*this.letter.length)]  随机获取字母
		var img=document.createElement('img');
		var let=this.letter[Math.floor(Math.random()*this.letter.length)];//获取到的插入屏幕的字母
		img.src='image/'+let+'.png';
		//img.src='imges/'+let+'.png';
		img.style.cssText="position:absolute;left:"+(Math.random()*(this.cw-150)+50)+'px;top:'Math.random()*-50-50+'px';
        img.className=let;//增加类名
        this.letterArr.push(let)	
        this.sence.appendChild(img)	;
        this.letterArr.path(let)
	}
}


game.prototype.play=function(){
	var that=this;
	setInterval(function(){
		if(that.num>that.letterArr.length){  //如果num数大于屏幕现有的字母数，调用getletter再次进行获取
			that.getLetter(that.num-that.letterArr.length);
		}
        var letters=document.getElementsByTagName('img');//将字母代表的图片放在letters里
        for(var i=0;i<letters.length;i++){  //letter的长度=letterArr的长度
        var t=letters[i].offsetTop; //获取字母距屏幕顶端的距离
       	letters[i].style.top=t+that.speed+'px';
      	//letters[i].style.top=t+'px';
      
       	if(t>that.ch){ 

             for(var j=0;j<that.letterArr.length;j++){
                 //  letters.that.scene.removeChild(letters[i]);//parentNode == that.scne
                if(that.letterArr[j]==letters[i].className){
                 	that.letterArr.splice(j,1)；
                }letters.that.sence.removeChild(letters[i]);letters[i]=null;
                //parentNode == that.scne          
         	}
       }
	  }},50)
}




game.prototype.key=function(){
	var that=this;
	//alert(String.fromCharCode(ev.keyCode))
	document.onkeydown=function(e){
		var ev=e||window.event;
         var k=String.fromCharCode(ev.keyCode)
         //var l=document.getElementsByClassName(k);
       var now=that.sence.getElementsByClassName(k)//[0]
        // that.sence.removeChild(now)
if(now.length>0){
	document.title=that.score++;
	for(var i=0;i<that.letterArr.length;i++){
		if(that.letterArr[i]==now[0].className){
			that.letterArr.splice(i,1)
		}
	}
that.sence.removeChild(now[0]);
now[0]=null;

}
	}
};