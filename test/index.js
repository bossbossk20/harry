/* global describe, before, beforeEach, afterEach,it */
require('mocha-generators').install()

var Nightmare = require('..')
var chai = require('chai')
var server = require('./server')
var should = chai.should()
var koy = function () {
  koy()
  if (should) {
  }
}
describe('TEST Buy Harry Potter Book', function () {
  before(function (done) {
    server.listen(7500, done)
  })

  describe('nightmareJs and mocha and chai', function () {
    var nightmare

    beforeEach(function () {
      nightmare = Nightmare()
    })

    afterEach(function * () {
      yield nightmare.end()
    })
    it('ซื้อเล่ม 1 จำนวน 2 เล่ม, ซื้อเล่ม 2 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 20', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b1')
        .click('#b1')
        .wait(1000)
        .click('#b2')
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return this.price.substr(2, this.price.length - 1)
        })
      case1.should.equal('20')
    })
    it('ซื้อเล่ม 2 จำนวน 3 เล่ม, ซื้อเล่ม 3 จำนวน 3 เล่ม ส่วนลดต้องเท่ากับ 60', function * () {
      var case2 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b2')
        .click('#b2')
        .click('#b2')
        .wait(1000)
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return this.price.substr(2, this.price.length - 1)
        })
      case2.should.equal('60')
    })
    it('ซื้อเล่ม 3 จำนวน 5 เล่ม, ซื้อเล่ม 4 จำนวน 4 เล่ม, เล่ม 5 จำนวน 3 ส่วนลดต้องเท่ากับ 200', function * () {
      var case3 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .click('#b3')
        .wait(1000)
        .click('#b4')
        .click('#b4')
        .click('#b4')
        .click('#b4')
        .wait(1000)
        .click('#b5')
        .click('#b5')
        .click('#b5')
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return this.price.substr(2, this.price.length - 1)
        })
      case3.should.equal('200')
    })
    it('ซื้อเล่ม 6 จำนวน 5 เล่ม, ซื้อเล่ม 7 จำนวน 4 เล่ม, ซื้อเล่ม 2 จำนวน 2 เล่ม, ซื้อเล่ม 3 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 200', function * () {
      var case4 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('#b6')
        .click('#b6')
        .click('#b6')
        .click('#b6')
        .click('#b6')
        .wait(1000)
        .click('#b7')
        .click('#b7')
        .click('#b7')
        .click('#b7')
        .wait(1000)
        .click('#b2')
        .click('#b2')
        .wait(1000)
        .click('#b1')
        .evaluate(function () {
          this.price = document.querySelector('#discountTotal').innerHTML
          return this.price.substr(2, this.price.length - 1)
        })
      case4.should.equal('220')
    })
  })
})
