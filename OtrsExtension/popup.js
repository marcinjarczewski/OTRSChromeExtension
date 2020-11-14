
'use strict';
let clicker = document.getElementById('clicker');

chrome.storage.sync.get('color', function(data) {
   clicker.style.backgroundColor = data.color;
   clicker.setAttribute('value', data.color);
});

clicker.onclick = function(element) {
	var t = document.createElement("input");
	document.body.appendChild(t);
	t.focus();
	document.execCommand("paste");
	var clipboardText = t.value; 
	document.body.removeChild(t);
	 // alert(clipboardText);
    // var data = {
		// fullName: '"ELKOND ul. Handlowa 6C" <otrs+ELKOND@atlasnet.pl>',
		// owner: 'Marcin Jarczewski',
	 // };
     var detail = '{ detail : ' + clipboardText+ ' }';
	 //   var detail = '{ detail : ' + '{abc:"aaaa"}' + ' }';
    chrome.tabs.executeScript(null,{code:'document.dispatchEvent(new CustomEvent(\'injectedEvent\', ' + detail +'))'});
	// chrome.tabs.executeScript(null,{code:'document.dispatchEvent(new CustomEvent(\'injectedEvent\', { detail: \'' +clipboardText + '\' }))'});
};
