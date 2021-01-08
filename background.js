// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if(request.message==="ready") {
//             chrome.tabs.create({url: 'popup.html'})
//         }
//     }
// );

chrome.commands.onCommand.addListener(function(command) {
    switch(command){
      case "_execute_browser_action" :
        console.log("popup");
      break;
    }
  });
  
  function popup(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id,{file:"popup.js"});
    });
  }