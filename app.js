/*
var newPlayer;

(function generateNewPlayer () {
      var parentDiv = document.createElement('div');
      parentDiv.align = 'center';
      parentDiv.className = 'video-youtube';
      var childDiv = document.createElement('div');
      childDiv.className = 'video-container';
      var iframe = document.createElement('iframe');
      iframe.title = 'YouTube video player';
      iframe.className = 'youtube-player';
      iframe.type = 'text/html';
      iframe.width = '560';
      iframe.height = '315';
      //iframe.src = '//www.youtube.com/embed/' + videoId;
      iframe.frameBorder = '0';
      iframe.allowFullScreen = "true";
      childDiv.appendChild(iframe);
      parentDiv.appendChild(childDiv);
      newPlayer = parentDiv;
      //return "<div align='center' class='video-youtube'><div class='video-container'>
      //<iframe title='YouTube video player' class='youtube-player' type='text/html' width='640' height='390' src='//www.youtube.com/embed/" + videoId + "' frameborder='0' allowFullScreen></iframe></div></div>"
 })();
*/

/*
 (function replaceOldPlayer () {
      var dateA = Date.now();
      var playerContainers = document.getElementsByClassName("video-container");
      var currentIframe;
      var currentId = '';
      var clonedPlayer;
      var ghostFrame = document.createDocumentFragment();
      for (var i = playerContainers.length - 1; i >= 0; i--) {
            currentIframe = playerContainers[i].firstChild;
            currentId = extractVideoId(currentIframe.src);
            //newPlayer.childNodes[0].childNodes[0].src = '//www.youtube.com/embed/' + currentId;
            
            //clonedPlayer = newPlayer.cloneNode(true);
            //clonedPlayer.firstChild.firstChild.src = '//www.youtube.com/embed/' + currentId;
          currentIframe.parentNode.replaceChild(generateNewPlayerV2(currentId), currentIframe);
           // currentIframe.parentNode.replaceChild(clonedPlayer, currentIframe);
            //currentIframe.parentNode.innerHTML = "<div align='center' class='video-youtube'><div class='video-container'><iframe title='YouTube video player' class='youtube-player' type='text/html' width='640' height='390' src='//www.youtube.com/embed/" + currentId + "' frameborder='0' allowFullScreen></iframe></div></div>"
            //currentIframe.innerHTML = generateNewPlayer(currentId);
      }
      var dateB = Date.now();
      console.log('delta', dateB - dateA)
 })()

*/
/*
 (function replaceOldPlayer () {
      var dateA = Date.now();
      var fragment = document.createDocumentFragment();
      var parentDiv = document.createElement('div');
      parentDiv.align = 'center';
      parentDiv.className = 'video-youtube';
      var childDiv = document.createElement('div');
      childDiv.className = 'video-container';
      var iframe = document.createElement('iframe');
      iframe.title = 'YouTube video player';
      iframe.className = 'youtube-player';
      iframe.type = 'text/html';
      iframe.width = '560';
      iframe.height = '315';
      iframe.frameBorder = '0';
      iframe.allowFullScreen = "true";
      childDiv.appendChild(iframe);
      parentDiv.appendChild(childDiv);
      fragment.appendChild(parentDiv);
      var currentIframe;
      var currentId = '';
      var playerInstances = document.getElementsByClassName('video-container');
      for (var i = playerInstances.length - 1; i >= 0; i--) {
            currentIframe = playerInstances[i].firstChild;
            currentId = currentIframe.src.split("/")[6];
            //currentIframe.parentNode.innerHTML = "<div align='center' class='video-youtube'><div class='video-container'><iframe title='YouTube video player' class='youtube-player' type='text/html' width='640' height='390' src='//www.youtube.com/embed/" + currentId + "' frameborder='0' allowFullScreen></iframe></div></div>"

            iframe.src = '//www.youtube.com/embed/' + currentId;
            currentIframe.parentNode.replaceChild(fragment.cloneNode(true), currentIframe);
      }
      var dateB = Date.now();
      console.log('delta', dateB - dateA)
 })()
*/


//var observer = new MutationObserver(function(mutations, observer) {
//    // fired when a mutation occurs
//    for (var i = mutations.length - 1; i >= 0; i--) {
//     if (mutations[i].target.tagName === 'IFRAME') {
//      console.log(mutations[i])
//       //mutations[i].target.parentNode.innerHTML = "<div align='center' class='video-youtube'><div class='video-container'><iframe title='YouTube video player' class='youtube-player' type='text/html' width='640' height='390' src='//www.youtube.com/embed/" + target.src.split("/")[6] + "' frameborder='0' allowFullScreen></iframe></div></div>"
//
//          
//       //window.alert('boom')
//     }
//    }
//    
//    //console.log(mutations, observer);
//    // ...
//});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
//observer.observe(document, {
//  subtree: true,  
//  childList: true
//
//  //...
//});

/*
var dateA = Date.now();
var fragment = document.createDocumentFragment();
var parentDiv = document.createElement('div');
parentDiv.align = 'center';
parentDiv.className = 'video-youtube';
var childDiv = document.createElement('div');
childDiv.className = 'video-container';
var iframe = document.createElement('iframe');
iframe.title = 'YouTube video player';
iframe.className = 'youtube-player';
iframe.type = 'text/html';
iframe.width = '560';
iframe.height = '315';
iframe.frameBorder = '0';
iframe.allowFullScreen = "true";
childDiv.appendChild(iframe);
parentDiv.appendChild(childDiv);
fragment.appendChild(parentDiv);
var currentIframe;
var currentId = '';
var playerInstances = document.getElementsByClassName('video-container');
*/
var ta = Date.now();
var currentIframe;
var fragment = document.createDocumentFragment();
var iframe = document.createElement('iframe');
iframe.title = 'YouTube video player';
iframe.className = 'youtube-player';
iframe.type = 'text/html';
iframe.width = '560';
iframe.height = '315';
iframe.frameBorder = '0';
iframe.allowFullScreen = "true";
fragment.appendChild(iframe);

document.addEventListener("DOMNodeInserted", function (event) {
  if (event.target.className === 'video-youtube') {
   // ta = Date.now();
    currentIframe = event.target.firstChild.firstChild;
    iframe.src = '//www.youtube.com/embed/' + currentIframe.src.split("/")[6];
    currentIframe.parentNode.replaceChild(fragment.cloneNode(true), currentIframe);
   // console.log('delta', Date.now() - ta)
  } else if (event.target.tagName === 'SCRIPT') {
     event.target.parentNode.removeChild(event.target);
   //  console.log(event.target.parentNode)
  }
  //insertedNodes.push(e.target);
}, false);