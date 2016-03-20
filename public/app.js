/* global angular */
angular.module('app', [])
  .controller('TodoListController', function () {
    var app = this
    app.price = 0
    app.bookSelected = []
    app.minQty = 0
    app.discountTotal = 0
    app.total = 0
    app.addBook = function (no, title, price) {
      var jsonBook = {
        'no': no,
        'title': title,
        'price': price
      }
      if (app.bookSelected.length === 0) {
        jsonBook.qty = 1
        app.bookSelected.push(jsonBook)
      } else {
        var check = false
        for (var i = 0; i < app.bookSelected.length; i++) {
          if (app.bookSelected[i].no === no) {
            check = true
            app.bookSelected[i].qty += 1
          }
        }
      }
      if (check === false) {
        jsonBook.qty = 1
        app.bookSelected.push(jsonBook)
      }
      app.price = app.sumPrice()
      app.minQty = app.findMinQty()
      app.discountTotal = app.discount()
      app.total = app.sumPrice() - app.discount()
    }
    app.sumPrice = function () {
      this.sumQty = 0
      this.sumP = 0
      for (var i = 0; i < app.bookSelected.length; i++) {
        this.sumP += app.bookSelected[i].qty * app.bookSelected[i].price
      }
      return this.sumP
    }
    app.findMinQty = function () {
      this.min = app.bookSelected[0].qty
      for (var i = 0; i < app.bookSelected.length; i++) {
        if (app.bookSelected[i].qty < this.min) {
          this.min = app.bookSelected[i].qty
        }
      }
      return this.min
    }
    app.discount = function () {
      return (app.bookSelected.length * ((app.bookSelected.length - 1) * 10) * app.minQty)
    }
    app.delBook = function (index) {
      app.bookSelected.splice(index, 1)
    }
  })
