Q.longStackSupport = true;

var globalResult = {
	name: 'Asa',
	age: 23
}

function getUndefinedValue() {
	return undefinedNumber;
}

function getQPromise() {
	var d = Q.defer();
	d.resolve(globalResult);
	return d.promise;
}

function getWhenPromise() {
	var d = when.defer();
	d.resolve(globalResult);
	return d.promise;
}

function undefinedError(result) {
	console.log(result.age + getUndefinedValue());
}

function error(reason) {
	console.error(reason);
}

getQPromise().then(undefinedError, error);

getWhenPromise().then(undefinedError, error);

Q().then(function outer() {
    return Q().then(function inner() {
        return Q().then(function evenMoreInner() {
            a.b.c.d();
        }).catch(function catcher(e){
            console.error(e.stack);
        });
    })
});