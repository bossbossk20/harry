/* global angular, cart */
angular.module('app', [])
  .controller('TodoListController', function () {
    var app = this
    var grid = document.getElementById('goods')
    app.test = 'koy'
    app.price = 0
    app.bookSelected = []
    app.backupBook = []
    app.dub = []
    app.minQty = 0
    app.discountTotal = 0
    app.total = 0
    app.temp = 0

    app.addBook = function (no, title, price) {
      var jsonBook = {
        'no': no,
        'title': title,
        'price': price
      }
      grid.style.transform = 'translate(-200px, 0)'
      cart.style.transform = 'translate(0px, 0)'
      console.log(app.bookSelected)
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
      for (var v = 0; v < app.backupBook.length; v++) {
        app.backupBook[v].qty -= 1
        if (app.backupBook[v].qty === 0) {
          app.backupBook.splice(v, 1)
        }
      }
      app.price = app.sumPrice()
      var book = app.bookSelected
      app.discountTotal = app.discount(book)
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
    app.findMaxQty = function () {
      this.max = app.bookSelected[0].qty
      for (var i = 0; i < app.bookSelected.length; i++) {
        if (app.bookSelected[i].qty > this.max) {
          this.max = app.bookSelected[i].qty
        }
      }
      return this.max
    }
    app.delBook = function (index) {
      app.bookSelected.splice(index, 1)
    }
    var filterData = function (array) {
      return array.filter((element) => element.qty !== 0)
    }
    app.discount = function (book) {
      var items = book.map((obj) => {
        return { qty: obj.qty, price: obj.price }
      })
      var totalDis = 0
      while (items.length > 1) {
        var sumprice = items.reduce((sum, item) => sum + item.price, 0)
        totalDis += ((items.length - 1) / 10) * sumprice
        items = items.map((obj) => {
          return { qty: obj.qty - 1, price: obj.price }
        })
        items = filterData(items)
      }
      console.log(totalDis)
      return totalDis
    }
  })
