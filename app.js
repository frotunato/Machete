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
var ta = Date.now();
var posts = document.getElementById('posts');
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
*/

/*
var elements = document.getElementsByTagName('SCRIPT');
console.log(elements[0].length)
for (var i = elements.length - 1; i >= 0; i--) {
  
  if (elements[i].tagName === 'SCRIPT') {
    console.log(elements[i])
  }
}
*/
//if (!posts) {
//  var stopInterval = function () {
//    clearInterval(interval);
//    var scripts = document.getElementsByTagName( 'script' );
//    var thisScriptTag = scripts[ scripts.length - 1 ];
//    console.log(thisScriptTag);
//    observer.observe(posts, {attributes: true, subtree:true, childList: true, characterData: true});
//  };
//  var interval = setInterval(function () {
//    console.log(document.body)
//    posts = document.body;
//    if (posts) {
//      stopInterval();
//    }
//  }, 5);
//}




var scripts;
var tA = Date.now();
function verVideo (id, frameId) {
  var fragment = document.createDocumentFragment();
  var parentDiv = document.createElement('div');
  var container = document.getElementById(frameId);
  var childDiv = document.createElement('div');
  var iframe = document.createElement('iframe');
  parentDiv.align = 'center';
  parentDiv.className = 'video-youtube';
  childDiv.className = 'video-container';
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
  iframe.src = 'https://www.youtube.com/embed/' + id;
  container.parentNode.replaceChild(fragment, container)
}

var observer = new MutationObserver(function (mutations) {
  if (!document.body) return;
  for (var i = mutations.length - 1; i >= 0; i--) {
    for (var j = mutations[i].addedNodes.length - 1; j >= 0; j--) {
      if (mutations[i].addedNodes[j].nodeName === 'SCRIPT' && (mutations[i].addedNodes[j].getAttribute('language') === 'javascript' || mutations[i].addedNodes[j].textContent.indexOf('verVideo') > 0)) {
        //console.log(mutations[i].addedNodes[j].getAttribute('language'))
        observer.disconnect();
        scripts = mutations[i].addedNodes[j];
        scripts.parentNode.removeChild(scripts) 
        var newScript = document.createElement('script');
        var textNode = document.createTextNode(verVideo.toString());
        newScript.appendChild(textNode);
        newScript.type = 'text/javascript';
        document.head.appendChild(newScript);
        console.log(Date.now() - tA, i, j);
        break;
      }
    }
  }
  //scripts = document.getElementsByTagName('script');
  //scripts = scripts[scripts.length - 1];
  //if (scripts.getAttribute('language') === 'javascript') {
  //  scripts.parentNode.removeChild(scripts) 
  //  var newScript = document.createElement('script');
  //  var textNode = document.createTextNode(verVideo.toString());
  //  newScript.appendChild(textNode);
  //  newScript.type = 'text/javascript';
  //  document.head.appendChild(newScript);
  //  console.log(Date.now() - tA);
  //  observer.disconnect();
  //}

 
})

observer.observe(document, {subtree:true, childList: true});



/*
document.addEventListener("DOMNodeInserted", function (event) {
  console.log(event.target.tagName === 'video-youtube')
  if (event.target.tagName === 'video-youtube') {
    e.preventDefault();
    console.log(event.target.nodeName)
   
   // ta = Date.now();
    currentIframe = event.target;
    iframe.src = '//www.youtube.com/embed/' + currentIframe.src.split("/")[6];
    currentIframe.parentNode.replaceChild(fragment.cloneNode(true), currentIframe);
   // console.log('delta', Date.now() - ta)
  } else if (event.target.nodeName === 'SCRIPT') {
     event.target.parentNode.removeChild(event.target);
   //  console.log(event.target.parentNode)
  }
  //insertedNodes.push(e.target);
}, false);*/