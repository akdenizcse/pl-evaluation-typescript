<p align="center">
<img src="https://collabtr.com/wp-content/uploads/2019/04/typescript.png" width="200" class>
</p>

## History 
### Background

TypeScript is an open-source multi-paradigm programming language which is developed and maintained by Microsoft. The main goal of the TypeScript is being a super-set of Javascript by having types and strict features that are not included in Javascript.

It is a relatively new language. The first appearance of the language was on 1st October 2012 as the version 0.8 of the language. The first release was authored by Anders Hejlsberg who is a Danish software engineer and the author of the C#, Turbo Pascal and Delphi programming languages. He is currently working for Microsoft as lead architect of C# and the core developer of the TypeScript.

After the first release, the language praised by various programmers. Primarly, the language supported and developed by Miguel de Icaza who is a Mexican programmmer. By the development progress goes, he criticized the lack of IDE support of the language. Only Microsoft Visual Studio has support on the TypeScript, however by 2013 the IDE support steadily increased and various platforms started to support the languages as Eclipse, Sublime Text, Vim Emacs, Webstrom, Atom and Visual Studio Code.

A new compiler for the TypeScript was announced at 2014 by its development team which brings lots of performance gains and also a language service. This language service is to provide intellisense, code formatting, colorizing, outlining and signature help by wrapping the compiler.

### Influenced Languages

Since the core developer Anders Hejlsberg is the lead architect of the C#, TypeScript has similarities with in the scope of dynamic typing of JavaScript.

In addition, as C# developed by inspiration of the Java, TypeScript also has some features which are included in the Java (like Generics).

Since the list as C#, Java and JavaScript it can be safely said for this language is, it's not only based on a paradigm. From the JavaScript, the paradigms can be inherited as functional, generic and imperative and from C# and the Java as object-oriented.

## The Reason Behind The Language : Why was it invented?
The main language of the web development is currently JavaScript due to the fact that it is a flexible and powerful programming language that is implemented consistently by various web browsers. According to the [Github](https://octoverse.github.com/) 
the most trendy language is the JavaScript (TypeScript is also the

#7 most trending language at 2019). Although JavaScript is at a good point among other languages, it has its own drawbacks. In the past, Javascript was only used for client-side programming language and had a limited source and capability. In time, when developers started to using Javascript and then developers understand that Javascript can be used as a server-side programming language (Node.js by Chrome's V8 Engine) the development and open source libraries with this language started to increase but this growth came across with some troubles with itself. As the JavaScript code develops, it becomes more complex and slower than other languages. For this reason, when more than one person works in a JavaScript project, this makes it difficult to develop the project and maitain of the dynamic code.

All the variables and function typings have no type therefore developers could not find a declared variable after lines of code the variable overrides started to increase because of the fact that Javascript was not able to fullfill the requirement of the Object-Oriented programming language. From the enterprise work area, not being a Object-Orientented language made Javascript to fail on server-side

programming. The main idea of the TypeScript is developed by the development team to fill this gap of the Javascript by not compromising

Javascrip's dynamic typing with optional static typing.

To sum up, the main reason of the TypeScript's development is providing a language which has Javascript's dynamic typings, web capabilities and also by being an object-oriented and strongly typed infastructure.
## When, Why Shall We Use It?
As mentioned earlier, Typescript has capabilities of being both strongly and dynamically typing while also being an Object-Oriented language. The language could be used when a full-stack development is aimed with below projects with many people work on;

Front-end Development (a Web App)

Backend (An Api Provider)

Mobile App

There are many examples that could be presented for this development scenarios; A formerly Javascript framework "AngularJS", present Angular is a single-page-application framework which is maintained by Google and based on TypeScript language. If a web application is desired to developed in Angular, TypeScript should be used. Node.js, and it's package management npm is includes lots of "type" files of Javascript libraries, so that developers could develop Node.js projects on TypeScript by using these type files and TypeScript.

The mobile app phase has lots of alternatives, since the hybrid mobile development exists and this type of development depends of Javascript the TypeScript can be used for development rather than Javascript.
As an example to usage of the Typescript, a bank is developed their [mobile app](https://www.linkedin.com/posts/efecantekin_mobil-ui-reactnative-activity-6610441657311604737-4-8e)  app by using a Javascript library called "React Native" and TypeScript.  As a conclusion, a developer team could work on Javascript using TypeScript might be a satisfactory idea to easy maintain the development process.

## How to Setup Environment 
- ### Windows 

	 **First Step** | Download and Install Nodejs
		  To install TypeScript via npm (node package manager), firstly the Node.js must be installed.
	From _[https://nodejs.org/en/download](https://nodejs.org/en/download/), latest version of the 					Node.js can be downloaded. 
After then, run the .msi file for the Node. Finally, check if the installation was successfull or not by typing command ```node -v``` in command line. 
If command line shows the version of the  Node.js the installation was successfully completed.
	**Second Step** | Install TypeScript
	After successfully installing TypeScript, open a command line and run below command;
	``` js
	npm install -g typescript
	```
- ### Linux

	**First Step** | Download and Install Nodejs
Get  Node.js repository using curl as a user with sudo permissions by typing;
	```
	curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
	```
	Once the Node.js source repository enabled, install Node.js and npm by typing ;
	```
	sudo apt install nodejs
	```
	**Second Step** | Install TypeScript
	After successfully installing TypeScript, open a command line and run below command;
	``` js
	npm install -g typescript
	```
- ### MacOs
	**First Step** | Download and Install Nodejs
		  To install TypeScript via npm (node package manager), firstly the Node.js must be installed.
	From _[https://nodejs.org/en/download](https://nodejs.org/en/download/), latest version of the 					Node.js can be downloaded. 
	Install the package from the  **.dmg**  by following the install wizard which will install both node and  **npm**. npm is Node Package Manager which facilitates installation of additional packages for node.js.
	
	**Second Step** | Install TypeScript
	After successfully installing TypeScript, open a command line and run below command;
	``` js
	npm install -g typescript
	```
	
## Things That Are Specific to TypeScript

TypeScript's place between software languages, as mentioned earlier, to fill the gap between enterprise languages ​​and JavaScirpt.Since the language is developed by the aim of filling the gap of Javascript, the specifications are based on this aim.

Typescript has own specific files called "declaration files" which does not exists on any other languages. The concept of the compile process of the language differentiates the code from other scripting languages by providing intellisense for types, function calls, and variable. With this method the coding process could be maintained efficiently using this declaration files.

TypeScript has a modular hierarchy in itself. It means that as the object-oriented code paradigm works, modules could be applicable by importing the classes to allow the codes are re-useable. However, Javascript does not have modular hierarchy system.

  

The key feature of TypeScript supports not only static typing but also dynamic typing. This feature makes it possible to use TypeScript wherever JavaScript can be used.

TypeScript includes all Javascript libraries. There is a code block exists for JavaScript it could be converted to TypeScript without any error or if a code exists it could be re-used in a TypeScript project. Javascript libraries could be used in a TypeScript project. A block of code written in the JavaScript language can be translated into TypeScript. Since TypeScipt supports dynamic typing, JavaScript code can be used directly in TypeScript.

The compilation process is a feature of TypeScript in fact it points out the compilation errors at the time of development only. Because of the feature, the probability of the receiving errors are limited during the run time whereas Javascript has a greater probability of receiving error due to the fact that Javascript is an interpreted language.

  

After the compilation of the code could be converted to the Javascript .In JavaScript, when the code is compile, it doesn't give an error, the code gives an error during run-time. Typescript gives an error while being compile and this indicates that TypeScript has a superior error checking mechanism on compilation JavaScript.

  

To summarize the significant features of TypeScript, the codes developed in JavaScript could also be developed in TypeScript. TypeScript is designed to make JavaScript easier to define variables and develop the code. TypeScript code management is easier than JavaScript such as Object Oriented Programming languages. Developing code is easier because it includes static typing and language service. It also contains error finding and intellisense features. When more than one person works on a TypeScript project, defining the variable is easier compared to JavaScript. TypeScript fails when compiling in a potential error, thus preventing the program from failing during run-time. JavaScript does not create error when compiling and displays the error during run-time, which means that TypeScript is a better error mechanism.



