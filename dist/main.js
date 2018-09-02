"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function testVar() {
  var a = 60;
  if (true) {
    var a = 30;
    console.log(a);
  }
  console.log(a);
}
function testLet() {
  var a = 60;
  if (true) {
    var _a = 30;
    console.log(_a);
  }
  console.log(a);
}
function testVarFor() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}
function testLetFor() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  //uncomment the below line to know the scope of let
  //console.log(i);
}
//testVar();
//testLet();
//testVarFor();
//testLetFor();

var User = function () {
  function User(username, email) {
    _classCallCheck(this, User);

    this.username = username;
    this.email = email;
  }

  _createClass(User, [{
    key: "register",
    value: function register() {
      console.log(this.username + "  is now registered");
    }
  }], [{
    key: "userCount",
    value: function userCount() {
      console.log("there are 50 users");
    }
  }]);

  return User;
}();
//let bob= new User('jithin','chjithin10@gmail.com');
//bob.register();
//User.userCount();

var Member = function (_User) {
  _inherits(Member, _User);

  function Member(username, email, memberPackage) {
    _classCallCheck(this, Member);

    var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this, username, email));

    _this.memberPackage = memberPackage;
    return _this;
  }

  _createClass(Member, [{
    key: "getPackage",
    value: function getPackage() {
      console.log(this.username + 'is subscribed to ' + this.memberPackage + ' Package');
    }
  }]);

  return Member;
}(User);

var mem = new Member('raju', 'raju@gmail.com', 'standard');
//mem.getPackage();
//mem.register();
var name = 'John';
function makeUpperCase(word) {
  return word.toUpperCase();
}
var template = "<h1>" + makeUpperCase('hello') + ", " + name + "\n<p>This is a simple template in javascript </p> ";
document.getElementById("template").innerHTML = template;

// string functions
var theString = "hello javascript";
//console.log(theString.startsWith('hello'));
//console.log(theString.includes('abc'));
//console.log(theString.endsWith('javascript'));
//console.log(isNaN('hello'));
//console.log(isNaN(1));

// default value
function greeting() {
  var $greet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hello world';

  console.log($greet);
}
greeting();

// spread operator
var args = [1, 2, 3];
function test() {
  console.log(args);
}
//test(...args);
//test.apply(null,args);
//test();

// how to create set
// set will not store duplicates
var myArray = [1, 22, 22, 44, 55];
var mySet = new Set(myArray);
mySet.delete(1);
mySet.add(100);
mySet.forEach(function (value) {
  //console.log(value);
});
// console.log(mySet.size);
//map example
var map1 = new Map([['a1', 'hello'], ['b1', 'good morning']]);
map1.set('c1', 'hi');
map1.delete('a1');
//console.log(map1);

var carWeakSet = new WeakSet();
var car1 = {
  Make: 'Honda',
  Model: 'civic'
};
carWeakSet.add(car1);
//console.log(carWeakSet);

var carWeakMap = new WeakMap();
var car2 = {
  make: 'Toyota',
  model: 'camry'
};
var key = {
  id: 1
};
carWeakMap.set(key, car2);
//console.log(carWeakMap);
// normal Functions examples
var add = function add(a, b) {
  var result = a + b;
  //  console.log(result);
  return false;
};
add(10, 2);
// above normal function to arrow function
var addition = function addition(a, b) {
  var result = a + b;
  //  console.log(result);
  return false;
};
addition(11, 2);
// complicated arrow functions and prototype
// prototype is used to save the memory
// FunctionName.prototype.variableName=10, is an assignment to that field
function Prefixer(prefix) {
  this.prefix = prefix;
}
// declartion of array using function , and modifying it by iterating through map Function
// as it results in new array
Prefixer.prototype.prefixArray = function (arr) {
  //  let that=this;
  return arr.map(function (x) {
    //console.log(this.prefix + x);
  });
};

var prefix = new Prefixer('hello');
prefix.prefixArray(['john', 'david']);

// promises
// resolving promises
var myPromise = Promise.resolve('Foo');
myPromise.then(function (res) {
  //  console.log(res);
});

// resolve and reject promise with certain time
var timePromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    return resolve(4);
  }, 2000);
});
timePromise.then(function (res) {
  //console.log(res);
});

// promises mostly used to fetch the data by doing the ajax request
function getData(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 & this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
};

getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function (data) {
  //console.log(data);
  var todos = JSON.parse(data);
  //  console.log(todos);
  var output = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var todo = _step.value;

      output += "\n    <li>\n    <h3>" + todo.title + "</h3>\n    </li>\n    ";
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  document.getElementById("template1").innerHTML = output;
}).catch(function (err) {
  console.log(err);
});