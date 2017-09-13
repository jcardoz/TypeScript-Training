# TypeScript-Training
Simple repository for training on TypeScript

### Introduction
- started by the folks at Microsoft, as a way to make JavaScript scale easily for large applications.
- Some Caveats of Typescript
	- Its a superset of JavaScript, with the introduction of types
	- it compiles back into JavaScript which your browser can understand
	- given that it compiles back into JavaScript, you need a compiler

### Installation
- through NPM: 
```
	npm install -g typescript
```
	
### Compiling	
- How can you compile typescript? There are multiple ways:
	1. Use terminal and the TypeScript Compiler
	- tsc stands for TypeScript compiler
	- Syntax:
	```
	tsc fileName.ts
	tsc folderName
	``` 
	-This will compile the typescript file or all TS files in that folder into JavaScript files, with the same name
	2. You can also install the compiler into your favorite IDE and build from there
	3. For actual projects, this will be included in your build system or build tool - so that you will have browser ready JavaScript for your project 

###	Setting up your IDE for typescript use
- VS Code has in-built support for building and intellisense for TS
- Sublime Text: Install the TypeScript Package from Package Control [Sublime Text TypeScript Package](https://github.com/Microsoft/TypeScript-Sublime-Plugin)
- Atom: Install the TypeScript package for Atom from apm: [Atom package for TypeScript](https://atom.io/packages/atom-typescript)
 

