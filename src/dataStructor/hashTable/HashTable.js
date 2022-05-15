// Array, Map, Set 자료구조 사용가능

// array
const table = [];
table['key'] = 100;
table['key2'] = 'hello';
console.log('table["key"]', table['key']);

delete table['key'];

// Map
const mapTable = new Map();
mapTable.set('key', 100);
mapTable.set('key2', 'hello');
console.log(mapTable.get('key'));

const object = { a: 1 };
mapTable.set(object, 'A1');
console.log(mapTable.get(object));
mapTable.delete(object);

console.log('mapTable keys', mapTable.keys());
console.log('mapTable values', mapTable.values());
mapTable.clear();
console.log(mapTable.values());

// Set
const setTable = new Set();
setTable.add('key');
setTable.add('key2');
console.log('setTable has key', setTable.has('key')); // true
console.log('setTable has key3', setTable.has('key3')); // false
setTable.delete('key2');
console.log('setTable has key2', setTable.has('key2')); // false

setTable.add('key3');
console.log('setTable size', setTable.size);
setTable.clear();
console.log('setTable size', setTable.size);