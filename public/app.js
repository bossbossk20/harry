/* global angular */
angular.module('app', [])
  .controller('TodoListController', function () {
    var app = this
    app.foodSelected = []
    app.price = 0
    app.addBook = function (img, title, price) {
      var jsonFood = {
        'img': img,
        'title': title,
        'price': price
      }
      app.foodSelected.push(jsonFood)
      app.price += price
      console.log(app.price)
    }
    app.delFood = function (index) {
      app.foodSelected.splice(index, 1)
    }
  })
