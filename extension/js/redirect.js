
var userNumber = 1;
var toUrl = "https://classroom.google.com/u/"+userNumber+"/h";
// window.open(", "_self");
console.log(location.toString());
console.log('tourl: ' + toUrl);
if (!location.toString().includes(toUrl)) {
	location.assign(toUrl);
	console.log('tru')
}