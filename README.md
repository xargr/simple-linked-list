### Simple linked list implementation with typescript support


* types included


| Statements                | Functions                | Lines                |
| ------------------------- | ------------------------ | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |



### API
  ```
  const list = new LinkedList<number>();
  
  list.isEmpty(); // true
  
  list.push(3); // return list size
  list.push(5);
  
  list.toString(); // 3,5 works only with primitives
  
  list.insert(4, 1); // insert(node, index): boolean
  
  list.get(1); // 4
  list.remove(1); // 4
  
  list.indexOf(3); // 0
  list.constains(3); // true
  list.getSize(); // 2
  
  for (const val of list.traverse()) {
    console.log(val);
  } // 3,5

  list.reset(); // true
```


### All API methods support type definition 
```
  interface User {
    name: string;
  }

  const john: User = { name: "john" };
  const gregory: User = { name: "gregory" };

  const list = new LinkedList<User>();

  list.push(john);
  list.push(gregory);

  for (const value of list.traverse()) {
    console.log(value);
  } // { name: 'john' }, { name: 'gregory' }
```
