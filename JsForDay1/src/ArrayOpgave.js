let boys = ["Peter", "lars", "Ole"];
let girls = ["Janne", "hanne", "Sanne"];

console.log(boys)

let all = boys.concat(girls);

console.log(all)

let commaStr = all.join();
let hyphenStr = all.join('-');

console.log(commaStr)
console.log(hyphenStr)

all.push("Lone","Gitte")
all.unshift("Hans","Kurt")
console.log(all)

all.shift()
all.pop()
console.log(all)

all.splice(3,2)
console.log(all)

all.reverse()
console.log(all)

all.sort()
console.log(all)

all.sort(function(a, b) {
  var nameA = a.toUpperCase(); // ignore upper and lowercase
  var nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
console.log(all)

let map1 = all.map(all => all.toUpperCase())
//let map2 = all.map(function(all){
//    return all.toUpperCase
//})
console.log(map1)


let filter1 = all.filter(function(name){
    if(name.startsWith("L")|| name.startsWith("I")){
        name = true
    }else{
        name = false
    }
    return name
})
console.log(filter1)
