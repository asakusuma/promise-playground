/*å
Promise.onPossiblyUnhandledRejection(function(error, two){
  console.log(error);
  console.log(two);
});
*/

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