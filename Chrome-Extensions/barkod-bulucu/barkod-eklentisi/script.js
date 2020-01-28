/* Ümit ŞEN - İzmir - 2020 */
var komut = document.querySelector('script[type="application/javascript"]');
var veri = komut.textContent.replace("window.__PRODUCT_DETAIL_APP_INITIAL_STATE__ = ","").replace("};","}");
var obj = JSON.parse(veri);

var barkodlar="";
var keys = Object.keys(obj.product.variants);

for (let i = 0; i < keys.length; i++) {
  barkodlar +=obj.product.variants[i].barcode+"\n";
}

chrome.runtime.sendMessage([document.title, barkodlar]);
