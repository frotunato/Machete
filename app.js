var tA = Date.now();
function verVideo (id, frameId) {
  var container = document.getElementById(frameId);
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
  iframe.width = '640';
  iframe.height = '390';
  iframe.frameBorder = '0';
  iframe.allowFullScreen = "allowFullScreen";
 //iframe.autoplay = '1';
  iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
  iframe.onload = function () {
    container.firstChild.firstChild.firstChild.remove();
    container.firstChild.firstChild.firstChild.remove();
  }
  var playButton = document.createElement('div');
  playButton.className = "play-button";

  var img = document.createElement('img');
  img.className = "youtube-thumb";
  img.src = '//i.ytimg.com/vi/' + id + '/hqdefault.jpg';
  
  //childDiv.appendChild(iframe);
  parentDiv.appendChild(childDiv);
  childDiv.appendChild(img)
  childDiv.appendChild(playButton);
  fragment.appendChild(parentDiv);
  //var replaced = container.parentNode.replaceChild(fragment, container);
  //document.body.appendChild(replaced);
  //var div = document.createElement('div');
  //div.textContent = 'the big salchipapa';

  container.appendChild(fragment/*.cloneNode(true)*/);
  
  var replaceThumbnailWithPlayer = function (event) {
    container.firstChild.firstChild.appendChild(iframe);
    //var fragment2 = document.createDocumentFragment();
    //var cNode = childDiv.cloneNode(false);
    //fragment2.appendChild(cNode);
    //cNode.appendChild(iframe);
    //container.firstChild.replaceChild(fragment2, container.firstChild.firstChild);
    //container.removeEventListener('click', replaceThumbnailWithPlayer);
  };
  container.addEventListener('click', replaceThumbnailWithPlayer);
}
//console.log(document, window)
var script;

var observer = new MutationObserver(function (mutations) {
  if (document.body/* && document.body.firstChild.nextSibling.nodeName === 'SCRIPT'*/) {
    //script = document.body.firstChild.nextSibling;
    //var newScript = document.createElement('script');
    //var textNode = document.createTextNode(verVideo.toString());
    //newScript.appendChild(textNode);
    //newScript.type = 'text/javascript';
    //script.parentNode.replaceChild(newScript, script);
    //observer.disconnect();
    //console.log(Date.now() - tA);
    for (var i = mutations.length - 1; i >= 0; i--) {
      if (mutations[i].target.nodeName === 'SCRIPT') {
        observer.disconnect();
        
        var style = document.createElement('style');
        var cssContent = document.createTextNode('.youtube-container { display: block; margin: 20px auto; width: 100%; max-width: 600px; } .youtube-player { display: block; width: 100%; /* assuming that the video has a 16:9 ratio */ padding-bottom: 56.25%; overflow: hidden; position: relative; width: 100%; height: 100%; cursor: hand; cursor: pointer; display: block; }img.youtube-thumb { bottom: 0; display: block; left: 0; margin: auto; max-width: 100%; width: 100%; position: absolute; right: 0; top: 0; height: auto } div.play-button { height: 72px; width: 72px; left: 50%; top: 50%; margin-left: -36px; margin-top: -36px; position: absolute; background: url("data:image/png;base64,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") no-repeat; } #youtube-iframe { width: 100%; height: 100%; position: absolute; top: 0; left: 0; }');
        //var cssContent = document.createTextNode('body {background: black;}')
        style.type = 'text/css';
        style.appendChild(cssContent);
        document.head.appendChild(style);
        var script = mutations[i].target;
        var newScript = document.createElement('script');
        var textNode = document.createTextNode(verVideo.toString());
        newScript.appendChild(textNode);
        newScript.type = 'text/javascript';
        script.parentNode.replaceChild(newScript, script);
        console.log(Date.now() - tA);
        return;
      }
      //for (var j = mutations[i].addedNodes.length - 1; j >= 0; j--) {
      //  if (mutations[i].addedNodes[j].nodeName === 'SCRIPT' && (mutations[i].addedNodes[j].getAttribute('language') === 'javascript' || mutations[i].addedNodes[j].textContent.indexOf('verVideo') > 0)) {
      //    var script = mutations[i].addedNodes[j];
      //    observer.disconnect();
      //    var newScript = document.createElement('script');
      //    var textNode = document.createTextNode(verVideo.toString());
      //    newScript.appendChild(textNode);
      //    newScript.type = 'text/javascript';
      //    script.parentNode.replaceChild(newScript, script);
      //    console.log(Date.now() - tA);
      //    return;
      //  }
      //}
    }
  }
});
    
observer.observe(document, {attributes:false, subtree:true, childList: true});