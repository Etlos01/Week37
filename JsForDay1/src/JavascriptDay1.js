
function add(n1, n2){
   return n1 +n2;
}

var sub = function(n1,n2){
  return n1 - n2
}

var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

//console.log( add(1,2) )     // What will this print?
//console.log( add )          // What will it print and what does add represent?
//console.log( add(1,2,3) ) ; // What will it print
//console.log( add(1) );	  // What will it print 	
//console.log( cb(3,3,add) ); // What will it print
//console.log( cb(4,3,sub) ); // What will it print
//console.log(cb(3,3,add())); // What will it print (and what was the problem)
//console.log(cb(3,"hh",add));// What will it print

let cb3 = function(n1,n2, callback){
try{
if((typeof callback === "function") && (typeof n1 ==="number") && (typeof n2 === "number")){
  return "Result from the two numbers: "+n1+" and "+n2+" = "+callback(n1,n2)
}else{
  throw new Error("Error - Something went wrong")
}
}catch (e){
  console.error(e.name + ": " + e.message)
}
};

let mul = function(n1,n2){
    return n1 / n2
}
var cb4 = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"/"+n2+"="+callback(n1,n2);
};

console.log(cb4(10,2,mul));

let names = ["Lars","Jan","Peter","Bo","Frederik"]

let filter1 = names.filter(function(name){
    if(name.length < 3){
        name = true
    }else{
        name = false
    }
    return name
})

names.forEach(function(name){
    console.log(name)
});
filter1.forEach(function(name){
    console.log(name)
});

let map1 = names.map(names => names.toUpperCase())
console.log(map1)


let makeHTMLstr = function(arr){
    let str = "<ul>"
    let map = arr.map(arr)
}

let listArr = "<u1>"+"<li>"+names.join("</li><li>") + "</li>" + "</ul>";
console.log(listArr)

let cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let filterCars = cars.filter(function(car){
    if(car.year > 1999 || car.make == "Volvo" || car.price < 5000){
        return car
    }    
});
console.log(filterCars)

 let values = cars.map(function(car){
       let code = "INSERT INTO cars (id,year,make,model,price) VALUES ";

       let code2 =  "(" + car.id + ", " + car.year + ", " + car.make + ", " + car.model + ", " + car.price + ");";
            return code + code2;
    });
console.log(values)








