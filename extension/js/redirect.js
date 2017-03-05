
document.getElementById("Save").addEventListener("click", Save);


function Save(){
	chrome.storage.local.set({'AlphaUser': document.querySelector("#AlphaUser").value})
	chrome.storage.local.set({'BetaUser': document.querySelector("#BetaUser").value})
	chrome.storage.local.set({'CharlieUser': document.querySelector("#CharlieUser").value})
	chrome.storage.local.set({'DeltaUser': document.querySelector("#DeltaUser").value})
}

GoTo

//chrome.storage.local.set({'key': value})
//chrome.storage.local.get('key',function(value){

//});


// var setup = true
// if (setup){
// 	var userNumber = 1;
// 	var toUrl = "https://classroom.google.com/u/"+userNumber+"/h";
// 	// window.open(", "_self");

	
// }


function GoTo(url){
	console.log(location.toString());
	console.log('tourl: ' + toUrl);

	if (!location.toString().includes(toUrl)) {
		location.assign(toUrl);
		console.log('tru')
	}
}