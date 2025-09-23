// Using promises
function fakeApiCall(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Something went wrong");
      }
    }, 1000);
  });
}

fakeApiCall(true)
  .then(result => console.log("then:", result))
  .catch(err => console.error("catch:", err))
  .finally(() => console.log("done 1"));

fakeApiCall(false)
  .then(result => console.log("then:", result))
  .catch(err => console.error("catch:", err))
  .finally(() => console.log("done 2"));

async function getData() {
  try {
    let res = await fakeApiCall(true);
    console.log("await result:", res);
  } catch (e) {
    console.error("await error:", e);
  }
}
getData();

// async function runTasks() {
//   try {
//     let one = await delay(200, "await one");
//     console.log(one);

//     let two = await delay(200, "await two");
//     console.log(two);

//     let three = await delay(200, "await three", true);
//     console.log(three); // won't reach
//   } catch (e) {
//     console.error("caught in async:", e);
//   }
// }


// JavaScript typed arrays
let buffer = new ArrayBuffer(16); // 16 bytes
console.log("buffer byteLength:", buffer.byteLength);

let int32View = new Int32Array(buffer);
int32View[0] = 42;
int32View[1] = 100;
console.log("int32View:", int32View);

let uint8View = new Uint8Array(buffer);
console.log("uint8View:", uint8View);

let floatView = new Float32Array(4);
floatView[0] = Math.PI;
floatView[1] = 2.5;
floatView[2] = -1.5;
console.log("floatView:", floatView);

for (let i = 0; i < floatView.length; i++) {
  console.log("floatView index", i, "=", floatView[i]);
}


// Iterators and generators
let arr = [10, 20, 30];
let iter = arr[Symbol.iterator]();
console.log("iterator next:", iter.next());
console.log("iterator next:", iter.next());
console.log("iterator next:", iter.next());
console.log("iterator next:", iter.next()); // done

let myIterableObj = {
  data: ["a", "b", "c"],
  [Symbol.iterator]() {
    let index = 0;
    let self = this;
    return {
      next() {
        if (index < self.data.length) {
          return { value: self.data[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let val of myIterableObj) {
  console.log("custom iterable:", val);
}

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();
console.log("gen next:", gen.next());
console.log("gen next:", gen.next());
console.log("gen next:", gen.next());
console.log("gen next:", gen.next());

function* idGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

let idGen = idGenerator();
console.log("id:", idGen.next().value);
console.log("id:", idGen.next().value);
console.log("id:", idGen.next().value);

function* fibonacci(limit) {
  let a = 0, b = 1;
  while (a < limit) {
    yield a;
    [a, b] = [b, a + b];
  }
}

for (let n of fibonacci(50)) {
  console.log("fib:", n);
}
function* inner() {
  yield 1;
  yield 2;
}
function* outer() {
  yield* inner();
  yield 3;
}
for (let val of outer()) {
  console.log("outer yield:", val);
}


function* naturalNumbers() {
  let n = 1;
  while (true) {
    yield n++;
  }
}
let natGen = naturalNumbers();
console.log(natGen.next().value);
console.log(natGen.next().value);
console.log(natGen.next().value);


function* fibonacci(limit) {
  let a = 0, b = 1;
  while (a < limit) {
    yield a;
    [a, b] = [b, a + b];
  }
}
for (let val of fibonacci(100)) {
  console.log("fib:", val);
}
