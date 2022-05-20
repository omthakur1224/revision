Q.1 When to use call, apply, bind?


<!-- Call() Method in JavaScript -->

The call() method invokes a function with a specified context. In other words, you can tie a function into an object as if it belonged to the object.

Example
Let’s create an object obj and a function add() for adding up a number with another:

var obj = { num: 2 };
function add(a){
  return this.num + a;
}
Now, there’s a problem with add(). It’s trying to return this.num + some value. But there is no property num inside the function. Thus calling this.num fails.

But as you can see, the object obj has a property num. What if you could call the function add() on that object as if it belonged to the object?

This is indeed possible. To do this, use the call() method to tie the function add() momentarily to the object obj:

add.call(obj, 3);
Now the function add() gets its this from obj where it’s bound to.
When the add() function is called this.num refers to the num of the obj.
Thus the call returns 5 because 2 + 3 = 5.

<!--Apply() Method in JavaScript  -->

The apply() method does the exact same as call(). The difference is that call() accepts an argument list, but apply() accepts an array of arguments.

For example:
var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

console.log(add.apply(obj, [3, 5]));

Output: 10


<!-- Bind() Method in JavaScript -->

The bind() method is reminiscent of call() and apply(). But instead of executing a function immediately, bind() returns a function that can be executed later on.

Let’s modify the previous example to use bind():
var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

const func = add.bind(obj, 3, 5);
func(); // Returns 10

So calling add.bind(obj, 3, 5) returns a function. In this case, you assign it to a constant called func and then run it.

Calling func() here means calling add() function on the object obj with the arguments of 3, 5.

Q.2 What is the difference between Readfile() and Readfileasync()?
solution:-readFileSync() is synchronous and blocks execution until finished. These return their results as return values. readFile() are asynchronous and return immediately while they function in the background. You pass a callback function which gets called when they finish.

Q.3 What is process in nodejs?
Node. js provides the facility to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc. The process is a global object, an instance of EventEmitter, can be accessed from anywhere.

Q.4 What is NodeJs?
Node. js (Node) is an open source development platform for executing JavaScript code server-sid
d is often used for real-time applications such as chat, news feeds and web push notifications. Node.

Q.5 What is the difference b/w javascript and node js
Unlike the browser where Javascript is sandboxed for your safety, node.js has full access to the system like any other native application. This means you can read and write directly to/from the file system, have unrestricted access to the network, can execute software and more. 

Q.6 Write a program to check two objects are equal ( deep equal ).

function checkObjEqual(obj1,obj2){
for(let key in obj1){
  if(!(key in obj2 )) return false;
  if(obj1[key]!==obj2[key])return false;
}
return true;
}

console.log(checkObjEqual({1:'Hello',2 :'OM'},{2 :'OM',1:'OM'})) //true

Q.7 What is shallow equal?
A function for performing a shallow comparison between two objects or arrays. Two values have shallow equality when all of their members are strictly equal to the corresponding member of the other.

Q.8 Using classes write a program to build a Parking Lot.