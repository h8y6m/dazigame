function game(sence,start,leve,bonus,zanting,jixu){
	this.sence=sence;
	this.letter=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	this.letterArr=[];//获取字母
	this.num=4;
	this.leve=1;
	this.speed=3;
	this.bonus=bonus;
	this.starts=start;
	this.zanting=zanting;
	this.jixu=jixu;
	this.cw=document.documentElement.clientWidth;
	this.ch=document.documentElement.clientHeight;
	this.flag=false;
	this.getLetter(4);
    this.click();
}
game.prototype.click=function(){
	var that=this;
	this.starts.onclick=function(){
		that.starts.style.display='none';
		that.zanting.style.display='block';
		that.jixu.style.display='none';
		that.bonus.innerHTML=0;
		that.flag=true;
		that.play();
	    that.key();
	}
	this.zanting.onclick=function()
		{   clearInterval(that.t);
			that.zanting.style.display='none';
		    that.jixu.style.display='block';
			
			that.kaiguan=false;
		
		}
		this.jixu.onclick=function()
		{   
			that.jixu.style.display='none';
		    that.zanting.style.display='block';
			that.play();
			that.kaiguan=true;
		}
}
game.prototype.getLetter=function(num){
	if(num==0){
		return;
	}

	for(var i=0;i<num;i++){
		var img=document.createElement("img");
		var let=this.letter[Math.floor(Math.random()*this.letter.length)];
		img.src="images/"+let+".gif";
		img.style.cssText="position:absolute;left:"+(Math.random()*(this.cw-150)+50)+"px;top:"+(-200*Math.random()-50)+'px';
		// img.id=let;
		img.className=let
		this.sence.appendChild(img);
		this.letterArr.push(let);
		
	}
}
game.prototype.play=function(){
	var that=this;
	
		function aa(){
		if(that.num>that.letterArr.length){
		   that.getLetter(that.num-that.letterArr.length);	
		}
		var letters=document.getElementsByTagName('img');
		for(var i=0;i<letters.length;i++){
		    var ltop=letters[i].offsetTop;
			letters[i].style.top=ltop+that.speed+"px";
			// var wh=letters[i].offsetHeight;
			// console.log(wh)
			if(ltop>that.ch){
				for(var j=0;j<that.letterArr.length;j++){
					if(that.letterArr[j]==letters[i].className){
					 that.letterArr.splice(j,1);//删除
				
					}
				}
				that.sence.removeChild(letters[i]);
				letters[i]=null;
				
			}
		}
	}
	that.t=setInterval(aa,50)
}

game.prototype.key=function(){
		var that=this;
	document.onkeydown=function(e){
		var ev=e||window.event;
		var k=String.fromCharCode(ev.keyCode);
		var now=that.sence.getElementsByClassName(k);
		if(now.length>0){
			//字母在界面有删除
			document.title=that.bonus++
			for(var i=0;i<that.letterArr.length;i++){
				if(that.letterArr[i]==now[0].className){
					that.letterArr.splice(i,1);
				}
			}
			that.sence.removeChild(now[0]);
			now[0]=null;
		}

	}
}