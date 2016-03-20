/* global angular */
angular.module('app', [])
  .controller('TodoListController', function () {
    var app = this
    app.test = 'koy'
    app.bookSelected = []
    app.price = 0
    app.addBook = function (img, title, price) {
      var jsonBook = {
        'img': img,
        'title': title,
        'price': price
      }
      app.bookSelected.push(jsonBook)
      app.price += price
      console.log(app.price, title)
    }
    app.delBook = function (index) {
      app.bookSelected.splice(index, 1)
    }
  })
