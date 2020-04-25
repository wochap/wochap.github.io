---
identifier: blog-3
date: 23-04-2020
dateModified: 23-04-2020
formattedDate: Abril 2020
imageCaption: logo de python y javascript
imageUrl: //res.cloudinary.com/wochap/image/upload/v1587051750/wochap/hero/js-python.webp
heroImageUrl: //res.cloudinary.com/wochap/image/upload/v1587051750/wochap/hero/js-python.webp
title: Python para Javascript developers
description: Aprende Python si ya sabes JavaScript en menos de 5 minutos!'
tags:
  - python
keywords:
  - python
  - javascript
  - javascript developers
  - aprender python
  - aprender javascript
---

Guía para aprender Python si ya sabes Javascript, o si quieres aprender Javascript y sabes Python.

A la izquierda codigo Javascript y a su derecha el codigo equivalente en Python 🐍.

## Diferencias y similitudes entre JavaScript y Python

### <div align="center">Asignacion de variables</div>

En python no necesitas ningun `keyword` (var, let, const) para declarar variables.

<div class="c-markdown-code-compare">

```js
var name = 'Pepe'
let name = 'Pepe'
const name = 'Pepe'
```

```py
name = 'Pepe'


```

</div>

### <div align="center">Boolean</div>

<div class="c-markdown-code-compare">

```js
var isOpen = true
isOpen = false

console.log(5 || isOpen) // 5
console.log(5 && isOpen) // false
console.log(!isOpen) // true
console.log(5 !== isOpen) // true
```

```py
is_open = True
is_open = False

print(5 or is_open) # 5
print(5 and is_open) # False
print(not is_open) # True
print(5 != is_open) # True
```

</div>

### <div align="center">String</div>

<div class="c-markdown-code-compare">

```js
var name = 'Pepito'

console.log(`i am ${5} years old.`) // i am 5 years old.
console.log(name.toUpperCase()) // PEPITO
console.log(name.length) // 6
```

```py
name = 'Pepito'

print('i am {age} years old.'.format(age=5)) # i am 5 years old.
print(name.upper()) # PEPITO
print(len(name)) # 6
```

</div>

### <div align="center">Number</div>

<div class="c-markdown-code-compare">

```js
var height = 5
var width = 2.5

console.log(typeof height) // number
```

```py
height = 5
width = 2.5

print(type(height)) # <class 'int'>
```

</div>

### <div align="center">Array - List</div>

`List` en Python tiene algo llamado `comprehension`, `syntax sugar` para transformar valores de manera simple en una sola linea.

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
```

```py
numbers = [1, 2, 3, 4]
numbers = [*numbers, 5]
numbers[1:4] = [8, 9]

print(numbers) # [1, 8, 9, 5]
print(numbers[1:3]) # [8, 9]

# list comprehension
numbers = [x ** 2 for x in numbers if x % 2 == 0]
print(numbers) # [64]
```

</div>

### <div align="center">Set</div>

<div class="c-markdown-code-compare">

```js
var animals = new Set(['cat', 'dog'])
```

```py
animals = {'cat', 'dog'}
```

</div>

### <div align="center">Object - Dictionary</div>

<div class="c-markdown-code-compare">

```js
var animals = {cat: 'nyan', dog: 'snuffles'}
console.log(animals.fish ?? 'N/A') // N/A
delete animals.cat

// object comprehension
var foo = [1, 2, 3].filter(x => x % 2 === 0).reduce((result, x) => ({...result, [x]: x ** 2}), {})
console.log(foo) // {2: 4}
```

```py
animals = {'cat': 'nyan', 'dog': 'snuffles'}
print(animals.get('fish', 'N/A')) # N/A
del animals['cat']

# object comprehension
foo = {x: x ** 2 for x in [1, 2, 3] if x % 2 == 0}
print(foo) # {2: 4}
```

</div>

### <div align="center">Function</div>

<div class="c-markdown-code-compare">

```js
function multiplyByTwo(a, b = 3, ...args) {
  //
}
```

```py
def multiply_by_two(a, b = 3, *args):
  #

```

</div>

### <div align="center">Class</div>

<div class="c-markdown-code-compare">

```js
class Greeter extends BaseGreeter {
  constructor(name) {
    this.name = name
  }
  greet({ loud = false } = {}) {
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
```

```py
class Greeter(BaseGreeter):
  greetCount = 0

  def __init__(self, name):
    self.name = name

  def greet(self, loud = False):
    self.greetCount += 1
    if loud:
        print('HELLO, %s!' % self.name.upper())
    else:
        print('Hello, %s' % self.name)



g = Greeter('Fred')
g.greet() # Hello Fred
g.greet(loud=True) # HELLO FRED!
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

```py
if x > 0:
  #
elif x < 0:
  #
else:
  return 'zero'


for value in ['a', 'b']:
  #


for index, value in enumerate([1, 2, 3]):
  #


for key, value in {'foo': 'bar'}.items():
  #


while a < 0:
  #

```

</div>

### <div align="center">Null - None</div>

En Javascript tenemos `null` y `undefined`, en Python solo tenemos `None`.

<div class="c-markdown-code-compare">

```js
console.log(null)
console.log(undefined)
```

```py
print(None)

```

</div>

### <div align="center">Modules</div>

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
import {something} from './package1/subpackage1/module2.js' // relative import
import {somethingMore} from '../project1' // relative import
import * as myModule from './package1/module1.js' // relative import with alias
```

```py
# project structure
#
# ├── project1
# │   └── __init__.py
# └── project2
#     ├── main.py
#     └── package1
#         ├── __init__.py
#         ├── module1.py
#         └── subpackage1
#             └── module2.py

# project1/__init__.py

something_more = '...'

# project2/main.py

import os # standard library import
from flask import Flask # third party import
import package1 # local application import
from package1.subpackage1.module2 import something # absolute import
from ..project1 import something_more # relative import
import package1.module1 as my_module # aliasing import
```

</div>

## Solo en Python

Algunos features que tiene Python pero no Javascript.

### <div align="center">Tuplas</div>

Las tuplas son listas inmutables.

```py
myTuple = (1, 2, 3)
```

## Referencias

- https://cs231n.github.io/python-numpy-tutorial/
- https://realpython.com/lessons/python-naming-conventions/
- https://dev.to/aveb/from-javascript-to-python-1b1m
- https://pypi.org/project/javascripthon/
- https://realpython.com/absolute-vs-relative-python-imports/
- https://www.datacamp.com/community/data-science-cheatsheets
