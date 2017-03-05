// if (window.location.href.includes("classroom.google.com/")) {
//         var userNumber = 1
//         window.open("http://www.classroom.google.com/u/"+userNumber, "_self");
// }

chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        file: 'extension/js/redirect.js'
             
    });
}, {
    url: [{
        // Runs on example.com, example.net, but also example.foo.com
        hostContains: 'classroom.google.com'
    }],
});


// window.onload = function() {
//     console.log('onload');

//     chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//         var url = tabs[0].url;

//         console.log("here is ur url tbh:" + url);
//         if (url.includes("classroom.google.com/")) {
//             window.open("http://www.classroom.google.com/u/"+userNumber);
//         }
//     });

//     if (window.location.href.includes("classroom.google.com/")) {
//         console.log("here");
//         var userNumber = 1
//         window.open("http://www.classroom.google.com/u/"+userNumber, "_self");
//     }
// }

// function windowOpener() { if (window.location.href.includes("classroom.google.com/")) {
//         console.log("here");
//         var userNumber = 1
//         window.open("http://www.classroom.google.com/u/"+userNumber, "_self");
//     }}