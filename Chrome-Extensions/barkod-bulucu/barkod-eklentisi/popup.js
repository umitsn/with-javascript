/* Ümit ŞEN - İzmir - 2020 */
window.addEventListener('load',function(e) {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null,{
    file : 'script.js',
  });
});

chrome.runtime.onMessage.addListener(function (val) {
  document.getElementById("txtBarkod").innerHTML = val[0];
  document.getElementById("textAreaID").value=val[1];

});



