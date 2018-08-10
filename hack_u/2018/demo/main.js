function mouseover(t){
	var id_v;
	id_v=t.id;
	var color=$('#'+id_v).css('background-color');
	if(color=="rgb(187, 187, 204)"){
		$('#'+id_v).css('background-color','#aaccaa');
	}else{
		$('#'+id_v).css('background-color','#bbbbcc');
	}
}

$(function(){//あんまよろしくなかった　by gorira-banana
	var i,j,rand,curX=0,curY=0,length=8,weight=2,X,Y,count=1;
	var array1=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
	console.log(array1[0][0]);
	while(length!=0){
		console.log(array1[0]);
		console.log(array1[1]);
		console.log(array1[2]);
		console.log(array1[3]);
		console.log(array1[4]);
		console.log(length);
		console.log(curX);
		console.log(curY);
		console.log("----------------");
		if(length>3){
			rand=Math.floor(Math.random()*4);
			if(rand==0){
				if(curX>0){
					array1=ArrayCal(array1,curX,curY,weight);
					curX=curX-1;
					length=length-1;
				}
			}else if(rand==1){
				if(curX<4){
					array1=ArrayCal(array1,curX,curY,weight);
					curX=curX+1;
					length=length-1;
				}
			}else if(rand==2){
				if(curY>0){
					array1=ArrayCal(array1,curX,curY,weight);
					curY=curY-1;
					length=length-1;
				}
			}else if(rand==3){
				if(curY<4){
					array1=ArrayCal(array1,curX,curY,weight);
					curY=curY+1;
					length=length-1;
				}
			}
		}else{
			X=curX;
			Y=curY;
			if(X==3){
				X=1;
			}else if(X==4){
				X=0;
			}
			if(Y==3){
				Y=1;
			}else if(Y==4){
				Y=0;
			}
			if(X>Y){
				if(X==2){
					rand=Math.floor(Math.random()*2);
					if(rand==0){
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX-1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX-1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX-1;
						length=length-1;
						
					}else if(rand==1){
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX+1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX+1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX+1;
						length=length-1;
					}
				}else if(X==1){
					rand=Math.floor(Math.random()*2);
					if(rand==0){
						if(curX==1){
							
							rand=Math.floor(Math.random()*2);
							if(rand==0){
								if(curY>0){
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY-1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY+1;
									length=length-1;
								}
							}else if(rand==1){
								if(curY<4){
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY+1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY-1;
									length=length-1;
								}
							}
							
							array1=ArrayCal(array1,curX,curY,weight);
							curX=curX-1;
							length=length-1;
							
							array1=ArrayCal(array1,curX,curY,weight);
							curX=curX-1;
							length=length-1;
							
							
						}else if(curX==3){
							
							rand=Math.floor(Math.random()*2);
							if(rand==0){
								if(curY>0){
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY-1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY+1;
									length=length-1;
								}
							}else if(rand==1){
								if(curY<4){
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY+1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY-1;
									length=length-1;
								}
							}
							
							array1=ArrayCal(array1,curX,curY,weight);
							curX=curX+1;
							length=length-1;
							
							array1=ArrayCal(array1,curX,curY,weight);
							curX=curX+1;
							length=length-1;
							
						}
					}else if(rand==1){
						if(curX==1){
							array1=ArrayCal(array1,curX,curY,weight);
							curX=curX-1;
							length=length-1;
							
							rand=Math.floor(Math.random()*2);
							if(rand==0){
								if(curY>0){
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY-1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY+1;
									length=length-1;
								}
							}else if(rand==1){
								if(curY<4){
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY+1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY-1;
									length=length-1;
								}
							}
							
							array1=ArrayCal(array1,curX,curY,weight);
							curX=curX-1;
							length=length-1;
							
						}else if(curX==3){
							array1=ArrayCal(array1,curX,curY,weight);
							curX=curX+1;
							length=length-1;
							
							rand=Math.floor(Math.random()*2);
							if(rand==0){
								if(curY>0){
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY-1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY+1;
									length=length-1;
								}
							}else if(rand==1){
								if(curY<4){
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY+1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curY=curY-1;
									length=length-1;
								}
							}
							
							array1=ArrayCal(array1,curX,curY,weight);
							curX=curX+1;
							length=length-1;
						}
					}
				}
			}else if(Y>X){
				if(Y==2){
					rand=Math.floor(Math.random()*2);
					if(rand==0){
						
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY-1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY-1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY-1;
						length=length-1;
						
					}else if(rand==1){
						
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY+1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY+1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY+1;
						length=length-1;
					}
				}else if(Y==1){
					rand=Math.floor(Math.random()*2);
					if(rand==0){
						if(curY==1){
							rand=Math.floor(Math.random()*2);
							if(rand==0){
								if(curX>0){
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX-1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX+1;
									length=length-1;
								}
							}else if(rand==1){
								if(curX<4){
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX+1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX-1;
									length=length-1;
								}
							}
							
							array1=ArrayCal(array1,curX,curY,weight);
							curY=curY-1;
							length=length-1;
							
							array1=ArrayCal(array1,curX,curY,weight);
							curY=curY-1;
							length=length-1;
							
						}else if(curY==3){
							rand=Math.floor(Math.random()*2);
							if(rand==0){
								if(curX>0){
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX-1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX+1;
									length=length-1;
								}
							}else if(rand==1){
								if(curX<4){
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX+1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX-1;
									length=length-1;
								}
							}
							
							array1=ArrayCal(array1,curX,curY,weight);
							curY=curY+1;
							length=length-1;
							
							array1=ArrayCal(array1,curX,curY,weight);
							curY=curY+1;
							length=length-1;
						}
					}else if(rand==1){
						if(curY==1){
							array1=ArrayCal(array1,curX,curY,weight);
							curY=curY-1;
							length=length-1;
							
							rand=Math.floor(Math.random()*2);
							if(rand==0){
								if(curX>0){
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX-1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX+1;
									length=length-1;
								}
							}else if(rand==1){
								if(curX<4){
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX+1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX-1;
									length=length-1;
								}
							}
							array1=ArrayCal(array1,curX,curY,weight);
							curY=curY-1;
							length=length-1;
							
						}else if(curY==3){
							array1=ArrayCal(array1,curX,curY,weight);
							curY=curY+1;
							length=length-1;
							
							rand=Math.floor(Math.random()*2);
							if(rand==0){
								if(curX>0){
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX-1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX+1;
									length=length-1;
								}
							}else if(rand==1){
								if(curX<4){
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX+1;
									length=length-1;
								}else{
									array1=ArrayCal(array1,curX,curY,weight);
									curX=curX-1;
									length=length-1;
								}
							}
							
							array1=ArrayCal(array1,curX,curY,weight);
							curY=curY+1;
							length=length-1;
							
						}
					}
				}
				//以下単純
			}else{
				if(X==2){
					rand=Math.floor(Math.random()*4);
					if(rand==0){
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX+1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX+1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX+1;
						length=length-1;
					}else if(rand==1){
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX-1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX-1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX-1;
						length=length-1;
					}else if(rand==2){
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY+1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY+1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY+1;
						length=length-1;
					}else if(rand==3){
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY-1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY-1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY-1;
						length=length-1;
					}
				}else if(X==1){
					if(curX==1){
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY-1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX-1;
						length=length-1;
						
						console.log(array1[0]);
						console.log(array1[1]);
						console.log(array1[2]);
						console.log(array1[3]);
						console.log(array1[4]);
						console.log("X=1--------------");
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX-1;
						length=length-1;
					}else{
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY+1;
						length=length-1;
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX+1;
						length=length-1;
						
						console.log(array1[0]);
						console.log(array1[1]);
						console.log(array1[2]);
						console.log(array1[3]);
						console.log(array1[4]);
						console.log("X=1--------------");
						
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX+1;
						length=length-1;
					}
				}else if(X==0){
					if(curX>0){
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX-1;
						length=length-1;
					}else{
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX+1;
						length=length-1;
					}
					
					if(curX>0){
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX-1;
						length=length-1;
					}else{
						array1=ArrayCal(array1,curX,curY,weight);
						curX=curX+1;
						length=length-1;
					}
					
					console.log(array1[0]);
					console.log(array1[1]);
					console.log(array1[2]);
					console.log(array1[3]);
					console.log(array1[4]);
					console.log("X=0--------------");
					
					if(curY>0){
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY+1;
						length=length-1;
					}else{
						array1=ArrayCal(array1,curX,curY,weight);
						curY=curY-1;
						length=length-1;
					}
				}
			}
			if(length==3){
				console.log("break");
				break;
			}
		}
	}
	console.log(array1[0]);
	console.log(array1[1]);
	console.log(array1[2]);
	console.log(array1[3]);
	console.log(array1[4]);
	
	for(i=0;i<5;i++){
		for(j=0;j<5;j++){
			if(array1[i][j]==1){
				$('#a'+count).css('background-color','#aaccaa');
			}else{
				$('#a'+count).css('background-color','#bbbbcc');
			}
			count++;
		}
	}
	
	
});

function ArrayCal(array,X,Y,weight){
	array[Y][X]=array[Y][X]+1;
	if(array[Y][X]>=weight){
		array[Y][X]=0;
	}
	return array;
}



$(function(){
	$('#PlayerPaz').hover(
		function(e){
			TF.innerHTML="判定中"
		},
		function(e){
			var i;
			var flag=0;
			for(i=1;i<=25;i++){
				if($('#p'+i).css('background-color')==$('#a'+i).css('background-color')){
					
				}else{
					flag=1;
				}
				
			}
			
			console.log(flag);
			
			if(flag==0){
				TF.innerHTML="True";
				if(window.confirm("一筆書き終了！\nお見事！正解です！\nもう一度遊びますか？")){
					location.href = "main.html";
				}
				else{
					window.alert("キャンセルされました")
				}
			}else if(flag==1){
				TF.innerHTML="False";
				if(window.confirm("一筆書き終了！\n残念！失敗です！\nもう一度遊びますか？")){
					location.href = "main.html";
				}
				else{
					window.alert("キャンセルされました")
				}
			}
		}
	);
});

