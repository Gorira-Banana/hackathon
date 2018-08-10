from browser import document

def response():
	sent = document["Sentence"].values
	result=document["Response"]
	result.text=sent
	
botton=document["call"]
botton.bind("click",response)