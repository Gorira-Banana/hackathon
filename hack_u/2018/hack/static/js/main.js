var color1;
var color2;
var Red;
var Green;
var Blue;
var Lock=0;
var nand=8;
var ansArray;
var InitArray;

function mouseover(t){
	if(Lock==0){
		var id_v;
		id_v=t.id;
		var color=$('#'+id_v).css('background-color');
		if(color=="rgb("+Red+", "+Green+", "+Blue+")"){
			$('#'+id_v).css('background-color','#'+color1);
		}else{
			$('#'+id_v).css('background-color','#'+color2);
		}
	}
}

$(function(){//あんまよろしくなかった　by gorira-banana
	var rand;
	rand=Math.floor(Math.random()*20);
	if(rand==100){
		
	}else if(rand<3){
		var i,j,curX=0,curY=0,length=nand,weight=2,X,Y,count=1;
		var R,L;
		var array1=[[0,1,0,1,0],[1,0,0,1,0],[0,1,0,0,0],[0,1,1,0,1],[0,0,0,0,1]];
		var array2=[[0,1,0,1,0],[1,0,0,1,0],[0,1,0,0,0],[0,1,1,0,1],[0,0,0,0,1]];
		console.log(array1[0][0]);
		InitArray=array2;
		
		len.innerHTML=length;
		
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
		
		
		R=Color();
		console.log(R);
		L=Color();
		while(L==R){
			L=Color();
		}
		
		color1=R;
		color2=L;
		
		ansArray=array1;
		
		for(i=0;i<5;i++){
			for(j=0;j<5;j++){
				if(array1[i][j]==1){
					$('#a'+count).css('background-color','#'+R);
				}else{
					$('#a'+count).css('background-color','#'+L);
				}
				if(array2[i][j]==1){
					$('#p'+count).css('background-color','#'+R);
				}else{
					$('#p'+count).css('background-color','#'+L);
				}
				count++;
			}
		}
	}else{
		var i,j,curX=0,curY=0,length=nand,weight=2,X,Y,count=1;
		var R,L;
		var array1=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
		console.log(array1[0][0]);
		InitArray=array1;
		
		len.innerHTML=length;
		
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
		
		
		R=Color();
		console.log(R);
		L=Color();
		while(L==R){
			L=Color();
		}
		
		color1=R;
		color2=L;
		
		ansArray=array1;
		
		for(i=0;i<5;i++){
			for(j=0;j<5;j++){
				if(array1[i][j]==1){
					$('#a'+count).css('background-color','#'+R);
				}else{
					$('#a'+count).css('background-color','#'+L);
				}
				$('#p'+count).css('background-color','#'+L);
				count++;
			}
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

function Color(){
	var col="",val,i;
	for(i=0;i<3;i++){
		val=Math.floor(Math.random()*16);
		if(val==10){
			col=col+"aa";
		}else if(val==11){
			col=col+"bb";
		}else if(val==12){
			col=col+"cc";
		}else if(val==13){
			col=col+"dd";
		}else if(val==14){
			col=col+"ee";
		}else if(val==15){
			col=col+"ff";
		}else{
			col=col+String(val)+String(val);
		}
		
		if(i==0){
			Red=val*16+val;
		}else if(i==1){
			Green=val*16+val;
		}else if(i==2){
			Blue=val*16+val;
		}
	}
	return col;
}

function Init(){
	var i;
	for(i=1;i<=25;i++){
		$('#p'+i).css('background-color','#'+color2);
	}
}


$(function(){
	$('#PlayerPaz').hover(
		function(e){
			if(Lock==0){
				TF.innerHTML="判定中"
			}
		},
		function(e){
			if(Lock==0){
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
					TF.innerHTML="正解";
					if(window.confirm("一筆書き終了！\nお見事！正解です！\nもう一度遊びますか？")){
						location.href = "main.html";
					}
					else{
						Lock=1;
					}
				}else if(flag==1){
					TF.innerHTML="もう一回";
					if(window.confirm("一筆書き終了！\n残念！失敗です！\nもう一度同じパズルで遊びますか？")){
						Init();
					}
					else{
						location.href = "main.html";
					}
				}
			}
		}
	);
});


function ColorChange(){
	if(Lock==0){
		console.log("aaaaa");
		var i,j,count=1;
		var CC1=[[86,180,233],[240,228,66],[213,94,0],[255,255,255],[204,121,167]];
		var CC=["56b4e9","f0e442","d55e00","ffffff","cc79a7"];
		var rand1,rand2;
		rand1=Math.floor(Math.random()*5);
		rand2=Math.floor(Math.random()*5);
		while(rand1==rand2){
			rand2=Math.floor(Math.random()*5);
		}
		
		for(i=0;i<5;i++){
			for(j=0;j<5;j++){
				if(ansArray[i][j]==1){
					$('#a'+count).css('background-color','#'+CC[rand1]);
				}else{
					$('#a'+count).css('background-color','#'+CC[rand2]);
				}
				if(InitArray[i][j]==1){
					$('#p'+count).css('background-color','#'+CC[rand1]);
				}else{
					$('#p'+count).css('background-color','#'+CC[rand2]);
				}
				count++;
			}
		}
		
		color1=CC[rand1];
		color2=CC[rand2];
		Red=CC1[rand2][0];
		Green=CC1[rand2][1];
		Blue=CC1[rand2][2];
		
	}
}


function Nand(){
	if(nand>16){
		nand=6;
	}else{
		nand=nand+1;
	}
	var i,j,rand,curX=0,curY=0,length=nand,weight=2,X,Y,count=1;
	var R,L;
	var array1=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
	console.log(array1[0][0]);
	
	len.innerHTML=length;
	
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
	
	
	R=Color();
	console.log(R);
	L=Color();
	while(L==R){
		L=Color();
	}
	
	color1=R;
	color2=L;
	
	ansArray=array1;
	
	for(i=0;i<5;i++){
		for(j=0;j<5;j++){
			if(array1[i][j]==1){
				$('#a'+count).css('background-color','#'+R);
			}else{
				$('#a'+count).css('background-color','#'+L);
			}
			$('#p'+count).css('background-color','#'+L);
			count++;
		}
	}
}
