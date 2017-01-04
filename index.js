var hojde
var laengde
var bredde

function konverterKasse(){
	hojde=parseFloat(document.test.hojde.value);
	laengde=parseFloat(document.test.laengde.value);
	bredde=parseFloat(document.test.bredde.value);
}

function overflade(){
	
	konverterKasse();
	var osvar=laengde*bredde*2+hojde*bredde*2+hojde*laengde*2;
	document.test.osvar.value=osvar;
}
function volume(){
	konverterKasse();
	var vsvar=laengde*bredde*hojde;
	document.test.vsvar.value=vsvar;
}	
