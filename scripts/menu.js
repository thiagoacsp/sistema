startList = function(){
	if (document.all&&document.getElementByID){
		navRoot = document.getElementByID("menuDropDown");
		for (i=0; i<navRoot.childNodes.length; i++){
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI"){
				node.onmouseover=function(){
					this.className+=" over";	
				}
				node.onmouseover=function(){
					this.className=this.className.replace(" over", "");
				}	
			}
		}
	}
}window.onload=startList;