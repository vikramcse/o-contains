# o-contains
Returns true when keys and values in properties are contained in object

## Install

```sh
$ npm install --save o-contains
```

## Example

```js
var objectContains = require('o-contains');

console.log(objectContains({name: 'radheya', age: 26}, {name: 'radheya'}));
// -> true

console.log(objectContains({name: 'radheya', age: 26}, {age: 98}));
// -> false
```

#### `require('o-contains')(object, attrs)`

**Arguments**:
- `object`: Object
- `attrs`: the attributes that to be checked

**Returns**: Returns true when keys and values in properties are contained in object

## License

&copy; 2016 vikram. MIT License
