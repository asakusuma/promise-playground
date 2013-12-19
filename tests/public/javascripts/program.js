/*å
Promise.onPossiblyUnhandledRejection(function(error, two){
  console.log(error);
  console.log(two);
});


var ObjectDefineProperty = function(obj, key, config) {
  obj[key] = config.value;
}

var ObjectDefineProperties = function( obj, props ) {
  for ( var prop in props ) {
    ObjectDefineProperty( obj, prop, props[prop] );
  }
};


var ObjectCreate = function( proto, props ) {
  var ctor = function( ps ) {
    if ( ps )
      ObjectDefineProperties( this, ps );
  };
  ctor.prototype = proto;
  return new ctor( props );
};


*/

if (!document.getElementsByClassName) {
        var indexOf = [].indexOf || function(prop) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === prop) return i;
            }
            return -1;
        };
        getElementsByClassName = function(className,context) {
            var elems = document.querySelectorAll ? context.querySelectorAll("." + className) : (function() {
                var all = context.getElementsByTagName("*"),
                    elements = [],
                    i = 0;
                for (; i < all.length; i++) {
                    if (all[i].className && (" " + all[i].className + " ").indexOf(" " + className + " ") > -1 && indexOf.call(elements,all[i]) === -1) elements.push(all[i]);
                }
                return elements;
            })();
            return elems;
        };
        document.getElementsByClassName = function(className) {
            return getElementsByClassName(className,document);
        };
    }

var g = {};
g.adapter = {};
g.adapter.resolved = Promise.resolve;
g.adapter.rejected = Promise.reject;
g.adapter.deferred = Promise.defer;

var exports = {};
var modules = {};

modules.assert = proclaim;
modules.sinon = sinon;

function imp(key) {
  modules[key] = exports;
}

function require(key) {
  return modules[key];
}