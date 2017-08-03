var Foo = function () {
        this.name = "name";
        this.thing = "rock";
        this.doAThing = function () {
          console.log(this.name + " did a thing");
        };
}

var Bar = function () {
  var myFunc = function(){
      console.log("Yeah");
  }
  myFunc.names = "name";
  myFunc.thing = "rock";
  return myFunc;
};

//var Bar = Foo();
var bar = Bar();
console.log(bar instanceof Object);
//=> true
console.log(bar instanceof Bar);
//=> false
bar();
console.log(bar.names);

var Baz = function () {
  var thing = function () {
      console.log("Yeah Baz");
  }
  this.thing = thing;
  if (!(this instanceof Baz)) return new Baz(thing);
};

var baz = new Baz();
console.log(baz instanceof Baz);
//=> true

baz = Baz();
console.log(baz instanceof Baz);
//=> true

var SimpleObject = function (collection) {
  this.collection = collection;
  this.each = function(myFunc){
    for( x in this.collection){
      myFunc(this.collection[x],x);
    }
  };
  this.each2 = function (collect, myFunc) {
    for( x in collect){
      myFunc(collect[x],x);
    }
  };
}

myObj = new SimpleObject();
myObj.collection = [1,"foo",3];
myObj.each( function( el, index ) {
  console.log( "Item " + index + " is " + el);
})
// Item 0 is 1
// Item 1 is foo
// Item 2 is 3
var collection = ['foo', 'bar', 'fiz', 'baz'];
myObj2 = new SimpleObject();
myObj2.each2(collection, function(el, index) {
  console.log( "Item " + index + " is " + el);
});
