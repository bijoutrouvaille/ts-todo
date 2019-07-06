# Session Notes July 6, 2019

## Accompanying files

- sessions/jul6.ts
- notes/jul6-console.js

## Overview

- Previous Session Review
- Function types

## Previous Session

- Homework
- Values vs Variables
- Assignment vs Change
- Primitive / Object types / Function types
- Functions as values of variables
- Functions as parameters

## Functions in Typescript

- Event handlers / callbacks
- Type signature

see sessions/jul16.ts

## Exercises

For these exercises, create a new typescript file in your project and enter answers into it. Create interfaces where convenient.

1. Annotate the type for the all the variables below. Also annotate the return values for functions. 
```
let x = 3;

const language = "typescript";

const programer = {
  level: "beginner",
  language: language
}

const describeRatio = (a, b) => "the ratio is " + a + "/" + b + ".";

```

2. Annotate the variable `runCommand` below.
```
const runCommand = function (cmd: string, argv: string[]) {
  const error = shell.run(cmd, argv);
  if (error == "") return true;
  else return false;
}
```

3. Use the above type annotation to annotate the second parameter of the function below (by replacing the `...`). Finish by annotating the variable `touchFile`.
```
const touchFile = function (filePath: string, execCommand: ...) {
  return execCommand("touch", [filePath]);
}
```
P.S. the `touch` shell command creates the file if it does not exist and updates its `modified` time to current time if it does exist.