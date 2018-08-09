function mouseover(t){
	var id_v;
	id_v=t.id;
	console.log(id_v);
	var color=$('#'+id_v).css('background-color');
	if(color=="rgb(187, 187, 204)"){
		$('#'+id_v).css('background-color','#aaccaa');
	}else{
		$('#'+id_v).css('background-color','#bbbbcc');
	}
}

function mousemove($event){
	TF.innerHTML="判定中"
}

function mouseout(){
	var i;
	var flag=0;
	for(i=1;i<=25;i++){
		if($('#p'+i).css('background-color')==$('#a'+i).css('background-color')){
			
		}else{
			flag=1;
		}
		
		console.log(flag);
		
		if(flag==0){
			TF.innerHTML="True";
			window.alert("一筆書き終了です");
		}else{
			TF.innerHTML="False";
		}
	}
}

