// Section 11: Document Object Model (DOM)

// Window vs Document 

// Window: 
// 1) It is the main container or we can say the global Object and any operations related to entire browser window can be a part of window object.
// 2) All the members like objects, methods or properties. If they are the part of window object then we do not refer the window object
// 3) Window has methods, properties and object. Eg. setTimeout() or setInterval() are the methods, whereas Document is the object of the Window and It also has a "screen" object with properites describing the physical display.

//  Document (DOM)
// 1) Child of window object
// 2) Here we need to refer the document, if we want to use the document object, method or properties.
// 3) It is just the object of the global object i.e., Window which deals with the document, the HTMl elements themselves.



// DOM vs BOM(Browser Object Model)

// DOM deals with the document, the HTM: elements themselves, eg., document and all traversal you would do in it, events, etc.
// For eg. change the background color, etc

// BOM deals with the borwser components aside from the document like history, location, navigator, and screen
// (All window operations which comes under BOM are performed using BOM)
// functions alert/confirm/prompt are also part of BOM they are directly not related to document, but represent pure browser methods of communicating wiht the user.


// DOM Navigation
// document.documentElement (returns the Element that is the root element of the document) 
// document.head, document.body
// document.body.childNodes(includes tab, enter, and whitespaces) -> returns total number of child nodes in body
// document.body.children -> ignores tab, enter, and whitespaces and return the child nodes
// document.body.children.length -> total number of child nodes
// document.body.hasChildNodes() -> returns if parent has child nodes
// document.body.firstChild -> (will probably return "text" i.e., empty space)
// document.body.firstElementChild -> if you want only the child elements (div, script, etc)
// document.querySelector() -> get specific element 
// document.body.parentNode(/parentElement) -> returns parent node
// document.body.nextSibling -> null
// document.head.nextSibling -> text (empty space)
// document.head.nextElementSibling -> body
// document.body.previousSibling -> text (empty space)
// document.body.previousElementSibling -> head



// How to search Elements & Reference of Elements
// document.getElementbyId()
// document.getElementsbyClassName('something here')
// document.getElementsbyTagName('something here')
// document.getElementsbyName('something here')
// document.querySelector() -> finds the first matching element and performs the operation
// document.querySelectorAll() -> same as getElementsby____