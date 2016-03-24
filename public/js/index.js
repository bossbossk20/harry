
// var btn = document.querySelectorAll('#product button');
// var btnLen = btn.length;
// var delBtn;
// var delBtnLen;
// var j = 1;
//
// var newP = function(newName, name, newPrice, price, prod, del, dollar) {
//   newName.className = 'name';
//   prod.appendChild(newName);
//   newName.innerHTML = name;
//
//   newPrice.id = 'nam';
//   newPrice.className = 'price';
//   prod.appendChild(newPrice);
//   newPrice.innerHTML = dollar;
//
//   del.className = 'del';
//   prod.appendChild(del);
// }
// var upd = function() {
//   delBtn = document.querySelectorAll('#all span');
//   delBtnLen = delBtn.length;
//   for (var n = 0; n < delBtnLen; n++) {
//     delBtn[n].onclick = function() {
//       var total = document.getElementById('total').innerHTML;
//       var namDollar = this.parentNode.children.namedItem('nam').innerHTML;
//       var nam = namDollar.substr(1);
//       document.getElementById('total').innerHTML = +total - +nam;
//
//       this.parentNode.parentNode.removeChild(this.parentNode)
//       var a = document.getElementById('all').childElementCount;
//
//       if (a == 0) {
//         cart.style.transform = 'translate(400px, 0)';
//         grid.style.transform = 'translate(0px, 0)';
//       }
//     }
//   }
// }
//
// for (var i = 0; i < btnLen; i++) {
//   btn[i].onclick = function(e) {
//     var btnVal = this.innerHTML;
//     var cart = document.getElementById('cart');
//     var goods = document.getElementById('all');
//     var newDiv = document.createElement('div');
//     var newName = document.createElement('p');
//     var newPrice = document.createElement('p');
//     var del = document.createElement('span');
//
//     var product = this.parentNode.children;
//     var info = product.namedItem('info').children;
//     var text = info.namedItem('text').children;
//     var name = text.namedItem('name').innerHTML;
//     var price = text.namedItem('price').children;
//     var nam = price.namedItem('num').innerHTML
//     var dollar = '$' + nam;
//     var total = document.getElementById('total').innerHTML;
//
//     if (btnVal) {
//       newDiv.id = 'product' + j;
//       newDiv.className = 'item';
//       goods.appendChild(newDiv);
//
//       var prod = document.getElementById('product' + j);
//
//       newP(newName, name, newPrice, price, prod, del, dollar);
//
//       document.getElementById('total').innerHTML = +total + +nam;
//
//       var a = cart.childElementCount;
//
//       if (a > 1) {
//         cart.style.transform = 'translate(0px, 0)';
//         var trans = function() {
//           var g = 0;
//           prod.style.transform = 'translate(0px, 0)';
//
//           if (g < 1) {
//             setTimeout(trans, 0);
//             g++
//           }
//         }
//         setTimeout(trans, 100);
//         grid.style.transform = 'translate(-18.5%, 0)';
//
//       }
//     }
//     j++;
//     upd();
//   }
// }
