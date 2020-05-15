---
identifier: blog-4
date: 24-04-2020
dateModified: 24-04-2020
formattedDate: Abril 2020
imageCaption: logo de dart y javascript
imageUrl: //res.cloudinary.com/wochap/image/upload/v1587759087/wochap/hero/js-dart.webp
heroImageUrl: //res.cloudinary.com/wochap/image/upload/v1587759087/wochap/hero/js-dart.webp
title: Dart para Javascript developers
description: Aprende Dart si ya sabes JavaScript en menos de 8 minutos!'
tags:
  - dart
keywords:
  - dart
  - aprender dart
---

Guía para aprender Dart si ya sabes Javascript.

A la izquierda codigo Javascript y a su derecha el codigo "posiblemente" equivalente en Dart.

## Diferencias y similitudes entre JavaScript y Dart

Para empezar, Dart es tipado y tu codigo de arranque debe encontrarse dentro de una funcion `main`.

```dart
main() {
  print('hello world');
}
```

En los siguientes ejemplos voy a obviar poner codigo dentro de la funcion `main`.

### <div align="center">Asignacion de variables</div>

En este apartado javascript y Dart son diferentes, en Dart una vez asginas un valor a una variable, el tipo de valor no puede cambiar a menos que lo hayas declarado con el keyword `dynamic`.

<div class="c-markdown-code-compare">

```js
var name = 'Pepe' // puede ser reasignado con cualquier otro valor
let name = 'Pepe' // puede ser reasignado con cualquier otro valor
const name = 'Pepe' // no puede ser reasignado




```

```dart



dynamic name = 'Pepe'; // puede ser reasignado con cualquier otro valor
var name = 'Pepe'; // puede ser reasignado con valores del mismo tipo, en este caso con otro String
final String name = 'Pepe'; // no puede ser reasignado, su valor es resuelta en tiempo de ejecucion
const String name = 'Pepe'; // no puede ser reasignado, su valor es resuelta en tiempo de compilacion
```

</div>

### <div align="center">Boolean</div>

**IMPORTANTE:** en Dart los operadores logicos `&&` `||` `!` solo pueden ser aplicados con valores `boolean` y las expresiones creadas con esos operadores logicos no devuelven el ultimo valor encontrado como sucede en JavaScript.

<div class="c-markdown-code-compare">

```js
var isOpen = true
isOpen = false

console.log(5 || isOpen) // 5
console.log(5 && isOpen) // false
console.log(!isOpen) // true
console.log(5 !== isOpen) // true
```

```dart
bool isOpen = true;
isOpen = false;

print(5 || isOpen); // Error
print(5 && isOpen); // Error
print(!isOpen) ; // true
print(5 != isOpen); // true
```

</div>

### <div align="center">String</div>

En Dart, usas `'` para strings de una sola linea, y `'''` para strings multilinea, tambien puedes escapar cualquier caracter en un string anteponiendo una `r`.

<div class="c-markdown-code-compare">

```js
var name = 'Pepito'

console.log(`i am ${name} ${5} years old.`) // i am Pepito 5 years old.

console.log(name.toUpperCase()) // PEPITO
console.log(name.length) // 6
```

```dart
String name = 'Pepito';

print('''i am $name ${5} years old.'''); // i am Pepito 5 years old.
print(r'i am $name ${5} years old.'); // i am $name ${5} years old.
print(name.toUpperCase()); // PEPITO
print(name.length); // 6
```

</div>

### <div align="center">Number</div>

En Dart existen 3 tipos para numeros: `num` `double` `int`, en mi experiencia puedes usar cualquiera y no notaras la diferencia.

<div class="c-markdown-code-compare">

```js
var height = 5
var width = 2.5

console.log(typeof height) // number
```

```dart
int height = 5;
double width = 2.5;

print(height.runtimeType); // int
```

</div>

### <div align="center">Array - List</div>

<div class="c-markdown-code-compare">

```js


var numbers = [1, 2, 3, 4]
numbers = [...numbers, 5]
numbers = [...numbers.slice(0, 1), ...[8, 9], ...numbers.slice(4)]

console.log(numbers) // [1, 8, 9, 5]
console.log(numbers.slice(1, 3)) // [8, 9]

// no hay algo como list comprehension en javascript
numbers = numbers.filter(x => x % 2 === 0).map(x => x ** 2)
console.log(numbers) // [64]

// destructuring assignment
const [n] = numbers
console.log(n)
```

```dart
import 'dart:math'; // para hacer uso de pow

List<int> numbers = [1, 2, 3, 4];
numbers = [...numbers, 5];
numbers = [...numbers.sublist(0, 1), ...[8, 9], ...numbers.sublist(4)];

print(numbers); // [1, 8, 9, 5]
print(numbers.sublist(1, 3)); // [8, 9]

// list comprehension
numbers = [for (var x in numbers) if (x % 2 == 0) pow(x, 2)];
print(numbers); // [64]




```

</div>

### <div align="center">Set</div>

Es como `List` pero desordenada y no tiene elementos duplicados.

<div class="c-markdown-code-compare">

```js
var animals = new Set(['cat', 'dog'])

```

```dart
Set animals = Set.from(['cat', 'dog']);
Set animals = {'cat', 'dog'};
```

</div>

### <div align="center">Object - Map</div>

<div class="c-markdown-code-compare">

```js
var animals = {cat: 'nyan', dog: 'snuffles'}
console.log(animals.fish ?? 'N/A') // N/A
delete animals.cat

// no hay algo como object comprehension en javascript
var foo = [1, 2, 3].filter(x => x % 2 === 0).reduce((result, x) => ({...result, [x]: x ** 2}), {})
console.log(foo) // {2: 4}
```

```dart
Map<String, String> animals = {'cat': 'nyan', 'dog': 'snuffles'};
print(animals['fish'] ?? 'N/A'); // N/A
animals.remove('cat');

// object comprehension
Map<num, num> foo = {for (var x in [1, 2, 3]) if (x % 2 == 0) x: pow(x, 2)};
print(foo); // {2: 4}
```

</div>

### <div align="center">Function</div>

En Dart los parametros de una funcion pueden ser `Non-optional`, `Optional Positional Parameters`, `Optional Named Parameters`.

<div class="c-markdown-code-compare">

```js
function sum(a, b = 3, c = 1) {
  console.log(a + b + c)
}

function sum2(a, {b = 3, c = 1} = {}) {
  console.log(a + b + c)
}

sum(5, 3) // 9
sum2(5, {c: 2, b: 8}) // 15
```

```dart
int sum(int a, [int b = 3, int c = 1]) { // parametros opcionales b y c
  print(a + b + c);
}

int sum2(int a, {int b = 3, int c = 1}) { // parametros opcionales nombrados b y c
  print(a + b + c);
}

sum(5, 3); // 9
sum2(5, c: 2, b: 8); // 15
```

</div>

### <div align="center">Control Flow</div>

<div class="c-markdown-code-compare">

```js
if (x > 0) {
  //
} else if (x < 0) {
  //
} else {
  return 'zero'
}

for (const value of ['a', 'b']) {
  //
}

for (const [index, value] of [1, 2, 3].entries()) {
  //
}

for (const [key, value] of Object.entries({foo: 'bar'})) {
  //
}

while (a < 0) {
  //
}
```

```dart
if (x > 0) {
  //
} else if (x < 0) {
  //
} else {
  return 'zero'
}

for (String value in ['a', 'b']) {
  //
}

[1, 2, 3].asMap().forEach((index, value) {
  //
});

({'foo': 'bar'}).forEach((key, value) {
  //
});

while (a < 0) {
  //
}
```

</div>

### <div align="center">Class</div>

<div class="c-markdown-code-compare">

```js
class Greeter extends BaseGreeter {
  greetCount = 0

  constructor(name) {
    this.name = name
  }
  greet({ loud = false } = {}) {
    this.greetCount += 1
    if (loud) {
      console.log(`HELLO ${this.name.toUpperCase()}!`)
    } else {
      console.log(`Hello ${this.name}`)
    }
  }
}
var g = new Greeter('Fred')
g.greet() // Hello Fred
g.greet({loud: true}) // HELLO FRED!
console.log(g.greetCount) // 2
```

```dart
class Greeter extends BaseGreeter {
  int greetCount = 0;
  String name;

  Greeter(this.name); // sugar syntax para `this.name = name`

  void greet({ loud = false }) {
    greetCount += 1;
    if (loud) {
      print('HELLO ${name.toUpperCase()}!');
    } else {
      print('Hello ${name}');
    }
  }
}
Greeter g = Greeter('Fred');
g.greet(); // Hello Fred
g.greet(loud: true); // HELLO FRED!
print(g.greetCount); // 2
```

</div>

### <div align="center">Null</div>

En Javascript tenemos `null` y `undefined`, en Dart solo tenemos `null`.

<div class="c-markdown-code-compare">

```js
console.log(null)
console.log(undefined)
```

```dart
print(null);

```

</div>

### <div align="center">Modules</div>

En Dart, cuando importas un modulo, todos sus miembros (variables, classes, funciones, etc.) estaran disponibles en el ambito global, a menos que la libreria haya definido un `namespace` o tu crees un `namespace` con el keyword `as` al momento de importar.

<div class="c-markdown-code-compare">

```js
// project structure
//
// ├── project1
// │   └── index.js
// └── project2
//     ├── main.js
//     └── package1
//         ├── index.js
//         ├── module1.js
//         └── subpackage1
//             └── module2.js

// project1/index.js


export const somethingMore = '...'

// project2/main.js

import os from 'os' // standard library import
import {Flask} from 'flask' // third party import
import * as package1 from './package1' // relative import with alias
import * as myModule from './package1/module1.js' // relative import with alias
```

```dart
// project structure
//
// ├── project1
// │   └── main.dart
// └── project2
//     ├── main.dart
//     └── package1
//         ├── main.dart
//         ├── module1.dart
//         └── subpackage1
//             └── module2.dart

// project1/main.dart

library project1; // namespace
var something_more = '...';

// project2/main.dart

import 'dart:math' as math; // standard library import with namespace
import 'package:get_it/get_it.dart'; // third party import
import './package1/main.dart' as package1; // relative import with namespace
import '../project1/main.dart'; // relative import without namespace
```

</div>

## Solo en Dart

Algunos features que tiene Dart pero no Javascript.

### <div align="center">Enum</div>

```dart
enum Color = { red, green };
```

## Referencias

- https://medium.com/jay-tillu/operators-in-dart-5a774aff0788
- http://blog.sethladd.com/2012/02/booleans-in-dart.html
- https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(list_comprehension)#Dart
- https://bezkoder.com/dart-map/
- https://subscription.packtpub.com/book/web_development/9781783989560/1/ch01lvl1sec08/modularity-and-a-namespace
