(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{408:function(s,n){s.exports={frontMatter:{slug:"python-for-javascript-developers",fileName:"python-for-javascript-developers",readingTime:"☕️ 7 min read",wordCount:1207,identifier:"blog-en-3",date:"23-04-2020",dateModified:"23-04-2020",formattedDate:"Abril 2020",imageCaption:"python and javascript logo",imageUrl:"//res.cloudinary.com/wochap/image/upload/v1587051750/wochap/hero/js-python.webp",heroImageUrl:"//res.cloudinary.com/wochap/image/upload/v1587051750/wochap/hero/js-python.webp",title:"Python for Javascript developers",description:"Learn the basics of Python ASAP if you already know JavaScript in less than 5 min!'",tags:["python"],keywords:["python","javascript","javascript developers","learn python"]},bodyHtml:"<p>Guide to learn Python if you already know to code javascript.<p>To the left Javascript code and to the right \"equivalent\" Python 🐍 code.<h2 id=differences-and-similarities-between-javascript-and-python>Differences and similarities between JavaScript and Python</h2><p>The first difference is that the names of variables and functions in Python are written in <code>snake_case</code>, in Javascript we use<code>camelCase</code>.<h3 id=variable-assignment><div align=center>Variable assignment</div></h3><p>In python you don't need any <code>keyword</code> (var, let, const) to declare variables.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> name = <span class=hljs-string>'Pepe'</span>\n<span class=hljs-keyword>let</span> name = <span class=hljs-string>'Pepe'</span>\n<span class=hljs-keyword>const</span> name = <span class=hljs-string>'Pepe'</span>\n</code></pre><pre><code class=language-py>name = <span class=hljs-string>'Pepe'</span>\n\n\n</code></pre></div><h3 id=boolean><div align=center>Boolean</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> isOpen = <span class=hljs-literal>true</span>\nisOpen = <span class=hljs-literal>false</span>\n\n<span class=hljs-built_in>console</span>.log(<span class=hljs-number>5</span> || isOpen) <span class=hljs-comment>// 5</span>\n<span class=hljs-built_in>console</span>.log(<span class=hljs-number>5</span> &#38&#38 isOpen) <span class=hljs-comment>// false</span>\n<span class=hljs-built_in>console</span>.log(!isOpen) <span class=hljs-comment>// true</span>\n<span class=hljs-built_in>console</span>.log(<span class=hljs-number>5</span> !== isOpen) <span class=hljs-comment>// true</span>\n</code></pre><pre><code class=language-py>is_open = <span class=hljs-literal>True</span>\nis_open = <span class=hljs-literal>False</span>\n\nprint(<span class=hljs-number>5</span> <span class=hljs-keyword>or</span> is_open) <span class=hljs-comment># 5</span>\nprint(<span class=hljs-number>5</span> <span class=hljs-keyword>and</span> is_open) <span class=hljs-comment># False</span>\nprint(<span class=hljs-keyword>not</span> is_open) <span class=hljs-comment># True</span>\nprint(<span class=hljs-number>5</span> != is_open) <span class=hljs-comment># True</span>\n</code></pre></div><h3 id=string><div align=center>String</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> name = <span class=hljs-string>'Pepito'</span>\n\n<span class=hljs-built_in>console</span>.log(<span class=hljs-string>`i am <span class=hljs-subst>${<span class=hljs-number>5</span>}</span> years old.`</span>) <span class=hljs-comment>// i am 5 years old.</span>\n\n<span class=hljs-built_in>console</span>.log(name.toUpperCase()) <span class=hljs-comment>// PEPITO</span>\n<span class=hljs-built_in>console</span>.log(name.length) <span class=hljs-comment>// 6</span>\n</code></pre><pre><code class=language-py>name = <span class=hljs-string>'Pepito'</span>\n\nprint(<span class=hljs-string>f'i am <span class=hljs-subst>{<span class=hljs-number>5</span>}</span> years old.'</span>) <span class=hljs-comment># i am 5 years old.</span>\nprint(<span class=hljs-string>'i am {age} years old.'</span>.format(age=<span class=hljs-number>5</span>)) <span class=hljs-comment># i am 5 years old.</span>\nprint(name.upper()) <span class=hljs-comment># PEPITO</span>\nprint(len(name)) <span class=hljs-comment># 6</span>\n</code></pre></div><h3 id=number><div align=center>Number</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> height = <span class=hljs-number>5</span>\n<span class=hljs-keyword>var</span> width = <span class=hljs-number>2.5</span>\n\n<span class=hljs-built_in>console</span>.log(<span class=hljs-keyword>typeof</span> height) <span class=hljs-comment>// number</span>\n<span class=hljs-built_in>console</span>.log(<span class=hljs-keyword>typeof</span> height === <span class=hljs-string>'number'</span>) <span class=hljs-comment>// true</span>\n</code></pre><pre><code class=language-py>height = <span class=hljs-number>5</span>\nwidth = <span class=hljs-number>2.5</span>\n\nprint(type(height)) <span class=hljs-comment># &#60class 'int'></span>\nprint(type(height) <span class=hljs-keyword>is</span> int) <span class=hljs-comment># True</span>\n</code></pre></div><h3 id=array---list><div align=center>Array - List</div></h3><p><code>List</code> in Python has something called <code>comprehension</code>, <code>syntax sugar</code> to transform values in a simple way (using a single line), Javascript does not have something like <code>comprehension</code>.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> numbers = [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>, <span class=hljs-number>4</span>]\nnumbers = [...numbers, <span class=hljs-number>5</span>]\nnumbers = [...numbers.slice(<span class=hljs-number>0</span>, <span class=hljs-number>1</span>), ...[<span class=hljs-number>8</span>, <span class=hljs-number>9</span>], ...numbers.slice(<span class=hljs-number>4</span>)]\n\n<span class=hljs-built_in>console</span>.log(numbers) <span class=hljs-comment>// [1, 8, 9, 5]</span>\n<span class=hljs-built_in>console</span>.log(numbers.slice(<span class=hljs-number>1</span>, <span class=hljs-number>3</span>)) <span class=hljs-comment>// [8, 9]</span>\n\n<span class=hljs-comment>// <span class=hljs-doctag>NOTE:</span> theresn't something like `list comprehension` in Javascript</span>\nnumbers = numbers.filter(<span class=hljs-function><span class=hljs-params>x</span> =></span> x % <span class=hljs-number>2</span> === <span class=hljs-number>0</span>).map(<span class=hljs-function><span class=hljs-params>x</span> =></span> x ** <span class=hljs-number>2</span>)\n<span class=hljs-built_in>console</span>.log(numbers) <span class=hljs-comment>// [64]</span>\n\n<span class=hljs-comment>// destructuring assignment</span>\n<span class=hljs-keyword>const</span> [n] = numbers\n<span class=hljs-built_in>console</span>.log(n)\n</code></pre><pre><code class=language-py>numbers = [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>, <span class=hljs-number>4</span>]\nnumbers = [*numbers, <span class=hljs-number>5</span>]\nnumbers[<span class=hljs-number>1</span>:<span class=hljs-number>4</span>] = [<span class=hljs-number>8</span>, <span class=hljs-number>9</span>]\n\nprint(numbers) <span class=hljs-comment># [1, 8, 9, 5]</span>\nprint(numbers[<span class=hljs-number>1</span>:<span class=hljs-number>3</span>]) <span class=hljs-comment># [8, 9]</span>\n\n<span class=hljs-comment># list comprehension</span>\nnumbers = [x ** <span class=hljs-number>2</span> <span class=hljs-keyword>for</span> x <span class=hljs-keyword>in</span> numbers <span class=hljs-keyword>if</span> x % <span class=hljs-number>2</span> == <span class=hljs-number>0</span>]\nprint(numbers) <span class=hljs-comment># [64]</span>\n\n<span class=hljs-comment># destructuring assignment</span>\n[n] = numbers\nprint(n)\n</code></pre></div><h3 id=set><div align=center>Set</div></h3><p>It's like <code>List</code> but it is unordered and it hasn't duplicate elements.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> animals = <span class=hljs-keyword>new</span> <span class=hljs-built_in>Set</span>([<span class=hljs-string>'cat'</span>, <span class=hljs-string>'dog'</span>])\n\n</code></pre><pre><code class=language-py>animals = set([<span class=hljs-string>'cat'</span>, <span class=hljs-string>'dog'</span>])\nanimals = {<span class=hljs-string>'cat'</span>, <span class=hljs-string>'dog'</span>}\n</code></pre></div><h3 id=object---dictionary><div align=center>Object - Dictionary</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> animals = {<span class=hljs-attr>cat</span>: <span class=hljs-string>'nyan'</span>, <span class=hljs-attr>dog</span>: <span class=hljs-string>'snuffles'</span>}\n<span class=hljs-built_in>console</span>.log(animals.fish ?? <span class=hljs-string>'N/A'</span>) <span class=hljs-comment>// N/A</span>\n<span class=hljs-keyword>delete</span> animals.cat\n\n<span class=hljs-comment>// <span class=hljs-doctag>NOTE:</span> theresn't something like `object comprehension` in Javascript</span>\n<span class=hljs-keyword>var</span> foo = [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>].filter(<span class=hljs-function><span class=hljs-params>x</span> =></span> x % <span class=hljs-number>2</span> === <span class=hljs-number>0</span>).reduce(<span class=hljs-function>(<span class=hljs-params>result, x</span>) =></span> ({...result, [x]: x ** <span class=hljs-number>2</span>}), {})\n<span class=hljs-built_in>console</span>.log(foo) <span class=hljs-comment>// {2: 4}</span>\n</code></pre><pre><code class=language-py>animals = {<span class=hljs-string>'cat'</span>: <span class=hljs-string>'nyan'</span>, <span class=hljs-string>'dog'</span>: <span class=hljs-string>'snuffles'</span>}\nprint(animals.get(<span class=hljs-string>'fish'</span>, <span class=hljs-string>'N/A'</span>)) <span class=hljs-comment># N/A</span>\n<span class=hljs-keyword>del</span> animals[<span class=hljs-string>'cat'</span>]\n\n<span class=hljs-comment># object comprehension</span>\nfoo = {x: x ** <span class=hljs-number>2</span> <span class=hljs-keyword>for</span> x <span class=hljs-keyword>in</span> [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>] <span class=hljs-keyword>if</span> x % <span class=hljs-number>2</span> == <span class=hljs-number>0</span>}\nprint(foo) <span class=hljs-comment># {2: 4}</span>\n</code></pre></div><h3 id=function><div align=center>Function</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>multiplyByTwo</span>(<span class=hljs-params>a, b = <span class=hljs-number>3</span>, ...args</span>) </span>{\n  <span class=hljs-comment>//</span>\n}\n\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>sum</span>(<span class=hljs-params>a, {b = <span class=hljs-number>3</span>, c = <span class=hljs-number>1</span>} = {}</span>) </span>{\n  <span class=hljs-built_in>console</span>.log(a + b + c)\n}\n\nsum(<span class=hljs-number>5</span>, <span class=hljs-number>3</span>) <span class=hljs-comment>// 9</span>\nsum2(<span class=hljs-number>5</span>, {<span class=hljs-attr>c</span>: <span class=hljs-number>2</span>, <span class=hljs-attr>b</span>: <span class=hljs-number>8</span>}) <span class=hljs-comment>// 15</span>\n</code></pre><pre><code class=language-py><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>multiply_by_two</span>(<span class=hljs-params>a, b = <span class=hljs-number>3</span>, *args</span>):</span>\n  <span class=hljs-comment>#</span>\n\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>sum</span>(<span class=hljs-params>a, b = <span class=hljs-number>3</span>, c = <span class=hljs-number>1</span></span>):</span>\n  print(a + b + c)\n\n\nsum(<span class=hljs-number>5</span>, <span class=hljs-number>3</span>) <span class=hljs-comment># 9</span>\nsum(<span class=hljs-number>5</span>, c = <span class=hljs-number>2</span>, b = <span class=hljs-number>8</span>) <span class=hljs-comment># 15</span>\n</code></pre></div><h3 id=control-flow><div align=center>Control Flow</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>if</span> (x > <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n} <span class=hljs-keyword>else</span> <span class=hljs-keyword>if</span> (x &#60 <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n} <span class=hljs-keyword>else</span> {\n  <span class=hljs-keyword>return</span> <span class=hljs-string>'zero'</span>\n}\n\n<span class=hljs-keyword>for</span> (<span class=hljs-keyword>const</span> value <span class=hljs-keyword>of</span> [<span class=hljs-string>'a'</span>, <span class=hljs-string>'b'</span>]) {\n  <span class=hljs-comment>//</span>\n}\n\n<span class=hljs-keyword>for</span> (<span class=hljs-keyword>const</span> [index, value] <span class=hljs-keyword>of</span> [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>].entries()) {\n  <span class=hljs-comment>//</span>\n}\n\n<span class=hljs-keyword>for</span> (<span class=hljs-keyword>const</span> [key, value] <span class=hljs-keyword>of</span> <span class=hljs-built_in>Object</span>.entries({<span class=hljs-attr>foo</span>: <span class=hljs-string>'bar'</span>})) {\n  <span class=hljs-comment>//</span>\n}\n\n<span class=hljs-keyword>while</span> (a &#60 <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n}\n</code></pre><pre><code class=language-py><span class=hljs-keyword>if</span> x > <span class=hljs-number>0</span>:\n  <span class=hljs-comment>#</span>\n<span class=hljs-keyword>elif</span> x &#60 <span class=hljs-number>0</span>:\n  <span class=hljs-comment>#</span>\n<span class=hljs-keyword>else</span>:\n  <span class=hljs-keyword>return</span> <span class=hljs-string>'zero'</span>\n\n\n<span class=hljs-keyword>for</span> value <span class=hljs-keyword>in</span> [<span class=hljs-string>'a'</span>, <span class=hljs-string>'b'</span>]:\n  <span class=hljs-comment>#</span>\n\n\n<span class=hljs-keyword>for</span> index, value <span class=hljs-keyword>in</span> enumerate([<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>]):\n  <span class=hljs-comment>#</span>\n\n\n<span class=hljs-keyword>for</span> key, value <span class=hljs-keyword>in</span> {<span class=hljs-string>'foo'</span>: <span class=hljs-string>'bar'</span>}.items():\n  <span class=hljs-comment>#</span>\n\n\n<span class=hljs-keyword>while</span> a &#60 <span class=hljs-number>0</span>:\n  <span class=hljs-comment>#</span>\n\n</code></pre></div><h3 id=class><div align=center>Class</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-class><span class=hljs-keyword>class</span> <span class=hljs-title>Greeter</span> <span class=hljs-keyword>extends</span> <span class=hljs-title>BaseGreeter</span> </span>{\n  greetCount = <span class=hljs-number>0</span>\n\n  <span class=hljs-keyword>constructor</span>(name) {\n    <span class=hljs-keyword>this</span>.name = name\n  }\n  greet({ loud = <span class=hljs-literal>false</span> } = {}) {\n    <span class=hljs-keyword>this</span>.greetCount += <span class=hljs-number>1</span>\n    <span class=hljs-keyword>if</span> (loud) {\n      <span class=hljs-built_in>console</span>.log(<span class=hljs-string>`HELLO <span class=hljs-subst>${<span class=hljs-keyword>this</span>.name.toUpperCase()}</span>!`</span>)\n    } <span class=hljs-keyword>else</span> {\n      <span class=hljs-built_in>console</span>.log(<span class=hljs-string>`Hello <span class=hljs-subst>${<span class=hljs-keyword>this</span>.name}</span>`</span>)\n    }\n  }\n}\n<span class=hljs-keyword>var</span> g = <span class=hljs-keyword>new</span> Greeter(<span class=hljs-string>'Fred'</span>)\ng.greet() <span class=hljs-comment>// Hello Fred</span>\ng.greet({<span class=hljs-attr>loud</span>: <span class=hljs-literal>true</span>}) <span class=hljs-comment>// HELLO FRED!</span>\n<span class=hljs-built_in>console</span>.log(g.greetCount) <span class=hljs-comment>// 2</span>\n</code></pre><pre><code class=language-py><span class=hljs-class><span class=hljs-keyword>class</span> <span class=hljs-title>Greeter</span>(<span class=hljs-params>BaseGreeter</span>):</span>\n  greetCount = <span class=hljs-number>0</span>\n\n  <span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>__init__</span>(<span class=hljs-params>self, name</span>):</span>\n    self.name = name\n\n  <span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>greet</span>(<span class=hljs-params>self, loud = False</span>):</span>\n    self.greetCount += <span class=hljs-number>1</span>\n    <span class=hljs-keyword>if</span> loud:\n        print(<span class=hljs-string>'HELLO, %s!'</span> % self.name.upper())\n    <span class=hljs-keyword>else</span>:\n        print(<span class=hljs-string>'Hello, %s'</span> % self.name)\n\n\n\ng = Greeter(<span class=hljs-string>'Fred'</span>)\ng.greet() <span class=hljs-comment># Hello Fred</span>\ng.greet(loud=<span class=hljs-literal>True</span>) <span class=hljs-comment># HELLO FRED!</span>\nprint(g.greetCount) <span class=hljs-comment># 2</span>\n</code></pre></div><h3 id=null---none><div align=center>Null - None</div></h3><p>In Javascript there are <code>null</code> and<code>undefined</code>, in Python there is only <code>None</code>.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-built_in>console</span>.log(<span class=hljs-literal>null</span>)\n<span class=hljs-built_in>console</span>.log(<span class=hljs-literal>undefined</span>)\n</code></pre><pre><code class=language-py>print(<span class=hljs-literal>None</span>)\n\n</code></pre></div><h3 id=modules><div align=center>Modules</div></h3><p>In Javascript to export something from a module, you use the keyword <code>export</code> or<code>export default</code>, in Python you don't need to do anything to export.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-comment>// project structure</span>\n<span class=hljs-comment>//</span>\n<span class=hljs-comment>// ├── project1</span>\n<span class=hljs-comment>// │   └── index.js</span>\n<span class=hljs-comment>// └── project2</span>\n<span class=hljs-comment>//     ├── main.js</span>\n<span class=hljs-comment>//     └── package1</span>\n<span class=hljs-comment>//         ├── index.js</span>\n<span class=hljs-comment>//         ├── module1.js</span>\n<span class=hljs-comment>//         └── subpackage1</span>\n<span class=hljs-comment>//             └── module2.js</span>\n\n<span class=hljs-comment>// project1/index.js</span>\n\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>const</span> somethingMore = <span class=hljs-string>'...'</span>\n\n<span class=hljs-comment>// project2/main.js</span>\n\n<span class=hljs-keyword>import</span> os <span class=hljs-keyword>from</span> <span class=hljs-string>'os'</span> <span class=hljs-comment>// standard library import</span>\n<span class=hljs-keyword>import</span> {Flask} <span class=hljs-keyword>from</span> <span class=hljs-string>'flask'</span> <span class=hljs-comment>// third party import</span>\n<span class=hljs-keyword>import</span> * <span class=hljs-keyword>as</span> package1 <span class=hljs-keyword>from</span> <span class=hljs-string>'./package1'</span> <span class=hljs-comment>// relative import with alias</span>\n<span class=hljs-keyword>import</span> {something} <span class=hljs-keyword>from</span> <span class=hljs-string>'./package1/subpackage1/module2.js'</span> <span class=hljs-comment>// relative import</span>\n<span class=hljs-keyword>import</span> {somethingMore} <span class=hljs-keyword>from</span> <span class=hljs-string>'../project1'</span> <span class=hljs-comment>// relative import</span>\n<span class=hljs-keyword>import</span> * <span class=hljs-keyword>as</span> myModule <span class=hljs-keyword>from</span> <span class=hljs-string>'./package1/module1.js'</span> <span class=hljs-comment>// relative import with alias</span>\n</code></pre><pre><code class=language-py><span class=hljs-comment># project structure</span>\n<span class=hljs-comment>#</span>\n<span class=hljs-comment># ├── project1</span>\n<span class=hljs-comment># │   └── __init__.py</span>\n<span class=hljs-comment># └── project2</span>\n<span class=hljs-comment>#     ├── main.py</span>\n<span class=hljs-comment>#     └── package1</span>\n<span class=hljs-comment>#         ├── __init__.py</span>\n<span class=hljs-comment>#         ├── module1.py</span>\n<span class=hljs-comment>#         └── subpackage1</span>\n<span class=hljs-comment>#             └── module2.py</span>\n\n<span class=hljs-comment># project1/__init__.py</span>\n\nsomething_more = <span class=hljs-string>'...'</span>\n\n<span class=hljs-comment># project2/main.py</span>\n\n<span class=hljs-keyword>import</span> os <span class=hljs-comment># standard library import</span>\n<span class=hljs-keyword>from</span> flask <span class=hljs-keyword>import</span> Flask <span class=hljs-comment># third party import</span>\n<span class=hljs-keyword>import</span> package1 <span class=hljs-comment># local application import</span>\n<span class=hljs-keyword>from</span> package1.subpackage1.module2 <span class=hljs-keyword>import</span> something <span class=hljs-comment># absolute import</span>\n<span class=hljs-keyword>from</span> ..project1 <span class=hljs-keyword>import</span> something_more <span class=hljs-comment># relative import</span>\n<span class=hljs-keyword>import</span> package1.module1 <span class=hljs-keyword>as</span> my_module <span class=hljs-comment># relative import with alias</span>\n</code></pre></div><h2 id=only-for-python>Only for Python</h2><p>Some features that Python has but not Javascript.<h3 id=tuple><div align=center>Tuple</div></h3><p>It's like <code>List</code> but immutable.<pre><code class=language-py>myTuple = (<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>)\n</code></pre><h3 id=_><div align=center>_</div></h3><p>When a function ends with <code>_</code>, this function does not return the result but replaces it.<pre><code class=language-py>x = [<span class=hljs-number>-2</span>, <span class=hljs-number>-1</span>, <span class=hljs-number>0</span>, <span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>]\nx[:,<span class=hljs-number>0</span>].uniform_(<span class=hljs-number>-1.</span>, <span class=hljs-number>1</span>)\nprint(x)\n</code></pre><h2 id=references>References</h2><ul><li><a href=https://cs231n.github.io/python-numpy-tutorial/ rel=nofollow target=_blank>https://cs231n.github.io/python-numpy-tutorial/</a><li><a href=https://realpython.com/lessons/python-naming-conventions/ rel=nofollow target=_blank>https://realpython.com/lessons/python-naming-conventions/</a><li><a href=https://dev.to/aveb/from-javascript-to-python-1b1m rel=nofollow target=_blank>https://dev.to/aveb/from-javascript-to-python-1b1m</a><li><a href=https://pypi.org/project/javascripthon/ rel=nofollow target=_blank>https://pypi.org/project/javascripthon/</a><li><a href=https://realpython.com/absolute-vs-relative-python-imports/ rel=nofollow target=_blank>https://realpython.com/absolute-vs-relative-python-imports/</a><li><a href=https://www.datacamp.com/community/data-science-cheatsheets rel=nofollow target=_blank>https://www.datacamp.com/community/data-science-cheatsheets</a></ul>"}}}]);
//# sourceMappingURL=chunk.data.python-for-javascript-developers.2aad1c23.js.map