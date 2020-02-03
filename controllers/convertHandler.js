/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  const unitRegex = /[a-z]/gi;
  
  this.getNum = function(input) {
    
    let res;
    
    const search = input.search(unitRegex);    
    (search !== -1) ? res = input.slice(0,search) : res = input;        
   
    if(res === "") return 1;
    
    if(res.match("/")){
      const reducer = (acc, value) => acc/value;
      res = res.split("/").reduce(reducer);         
    }       
    
    if(isNaN(res) || res=== Infinity) return "invalid number";    
    
    return res;
  };
  
  this.getUnit = function(input) {
    
    const units = ["gal","l","mi","km","lbs","kg"];    
    const search = input.search(unitRegex);
    
    if(search === -1) return "invalid unit";
    
    const res = input.slice(search).toLowerCase();
    
    if(units.includes(res)) return res;
    
    return "invalid unit";
    
  };
  
  this.getReturnUnit = function(initUnit) {
    const returnUnit = new Map()
      .set("lbs", "kg")
      .set("kg", "lbs")
      .set("gal", "l")
      .set("l", "gal")
      .set("mi", "km")
      .set("km", "mi")
    
    return returnUnit.get(initUnit) || "error";
  };

  this.spellOutUnit = function(unit) {
    
    const spell = new Map()
      .set("gal", "gallons")
      .set("l", "liters")
      .set("mi", "miles")
      .set("km", "kilometers")
      .set("lbs", "pounds")
      .set("kg", "kilograms")
    
    return spell.get(unit) || "error";
    
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const convert = new Map()
      .set("gal", initNum*galToL)
      .set("l", initNum/galToL)
      .set("mi", initNum*miToKm)
      .set("km",initNum/miToKm)
      .set("lbs", initNum*lbsToKg)
      .set("kg", initNum/lbsToKg)    
    
    return Number(convert.get(initUnit).toFixed(5)) || "error";
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
