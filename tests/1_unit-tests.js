/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      
      const input = "123kg";
      assert.equal(convertHandler.getNum(input),123);
      done();
    });
    
    test('Fractional Input', function(done) {
      
      const input = "3/2lbs";
      assert.equal(convertHandler.getNum(input),1.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      
      const input = "10/2.5lbs";
      assert.equal(convertHandler.getNum(input),4);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      
      const input = "3//2lbs";
      assert.equal(convertHandler.getNum(input),"invalid number");
      done();
    });
    
    test('No Numerical Input', function(done) {
      
      const input = "lbs";
      assert.equal(convertHandler.getNum(input),1);
      
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        
        assert.equal(convertHandler.getUnit(ele),ele.toLowerCase());        
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      const input = "cm";
      
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ["gallons","liters","miles","kilometers","pounds","kilograms"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.92705;
      
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      const input = [2, 'l'];
      const expected =  0.52834;
      
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
      //done();
    });
    
    test('Mi to Km', function(done) {
      
      const input = [3, 'mi'];
      const expected =  4.82802;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      
      const input = [7, 'km'];
      const expected =  4.34961;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      
      const input = [11, 'lbs'];
      const expected =  4.98951;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      
      const input = [13, 'kg'];
      const expected =  28.66012;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});