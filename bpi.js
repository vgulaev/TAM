var BPIElement = function ( argument ) {
	BPIElement.BPItype = "";
	BPIElement.name = "";	 
}

function create_map( one ) {
	var funcBody = one.toString();
	var strelement = funcBody.split( "\n" ); 
	var elements = [];
	for ( var i = 0; i < strelement.length; i++ ) {
		console.log( strelement[ i ] );
	};
	alert( funcBody );
}

//create_map( БизнесПроцесс );