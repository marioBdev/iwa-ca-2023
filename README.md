<h2 style="color:#a903fc">Building steps that were involved in the project</h2>
The core task of the project was to set up an API service (using Node.js and MongoDB) that supports full CRUD for the existing CA1 app.

The next steps was to update the existing CA1 app to allow populating the HTML table with JSON data provided by the API, then implement the ability to Add and Delete items from that table using the new API only from the front-end. The frontend 
frameworks/plugins that I used to implement that functionality was bootstrap, mongo for vs code, prettier, npm intellisense..

The next step was then to deploy the application to Heroku and the database to MongoDB Atlas. As part of this I uploaded the process to GitHub which is available to view at the above link. 

As part of the project, I recorded the process and steps involved to complete the API and that shows the API functionality. 

I’ve outlined the steps below in a bullet form to show the progression of the project and how the API was slowly built up over the course of the project. 

•	1st step:  Read the college brief, understand exactly what was required
•	2nd step: Install packages and these were done in order with Node first, then Express, Mongoose, EJS followed by dot envy then slugify
•	3rd step: Installed marked and method override 
•	4th step: Installed dompurify
•	5th step: Installed MonNov 
•	6th step: Started creating the Mongoose document which contained all the connections to the database
•	7th Step: Set up the server .js
•	8th Step: Listing port 5000
•	9th Step: Set up the view engine EJS
•	10th step: Create a database in Atlas, MongoDB
•	11th step: Then got the string connection 
•	12th step: Set up the password for the connection
•	13th step: Then created a dot env file to hide the password
•	14th step: Created the controller in the file structure
•	15th Step: Create the model 
•	16th Step: Set up all the routes to connect the view and the model
•	17th Step:  Then created the views with the main index edit
•	18th Step: Created new.js, show.js and partial formfields.js [crud]
•	19th Step: Then set up the github
•	20th Step: Set up js dome
•	21st Step: Then set up the gitignore
•	22 nd Step: Set up the method override, slugify 
•	23rd Step: The form fields were then embedded through the files edit and new.ejs
•	24th Step: Set up Heroku Account
•	25th Step: Installed CLI Heroku
•	26th Step: Got the deploy commands
•	27th Step: Website has been deployed 

As part of this process there was a lot of trouble shooting when I tried to deploy and started getting errors with mongoose deprecations.  This was the trickiest part of the project and took time to analyse and search online for how to solve this.  I can see that the object is filled with the whole form information, and I can see the object hits the database but the information doesn’t go through to the schema. This took time to figure out and was done by in-depth analysis and also that I could identify the issues through the browser console network, the status codes was 200 which meant that there is no issues. 

Technologies used in the project
The below are the technologies that I used to complete the project.  Below are a full and comprehensive list of the technologies that I used and a definition of each type below. 
 
<h2 style="color:#a903fc">EJS</h2>
EJS is a very simple templating language that lets you ’generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript’. Source: https://ejs.co. The longer term for EJS is Embedded JavaScript Templating) and it is seen as one of the ‘most popular template engines for JavaScript’. By using EJS it lets us embed the JavaScript code into ‘a template language that is then used to generate HTML’. Source: https://blog.logrocket.com/how-to-use-ejs-template-node-js-application/. 

How it works is that it ‘retains the syntax of HTML while allowing data interpolation, unlike Pug (another template engine) which uses a different syntax with indentation and spaces. EJS files are saved with the .ejs file extension’. Source: https://blog.logrocket.com/how-to-use-ejs-template-node-js-application/. There are a number of benefits to used using EJS which are that its similar to html, uses same jargon as java, ha smart error handling mechanisms built into it with simple template tags and custom delimiters. Source: https://www.codementor.io/@kishandevaliya/why-use-ejs-template-engine-with-expressjs-instead-of-handlebars-15tc0hiefq

<h2 style="color:#a903fc">Express</h2>
Express is a ‘minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications’. Source:  https://expressjs.com. When using this it allows you to set up a robust API both quickly and easily and in addition it provides broad features for building web and mobile applications. It can be ‘used to build a single page, multipage, and hybrid web application’. Source: https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js

<h2 style="color:#a903fc">Jsdom</h2>
Jsdom is a ‘library which parses and interacts with assembled HTML just like a browser. The benefit is that it isn’t actually a browser. Instead, it implements web standards like browsers do’. Source: https://www.testim.io/blog/jsdom-a-guide-to-how-to-get-started-and-what-you-can-do/. Using JSDOM is quite easy –  once the html has been passed on to its constructor, it will then ‘parse that HTML just like a browser does’. Once that has been done –  ‘you as a developer have an API which reads and changes the content of the in-memory DOM’.  Source https://www.testim.io/blog/jsdom-a-guide-to-how-to-get-started-and-what-you-can-do/ and https://github.com/jsdom/jsdom

<h2 style="color:#a903fc">Marked</h2>
Marked or marked documentation is a simple and ‘plain text formatting syntax aimed at making writing for the internet easier. The philosophy behind Markdown is that plain text documents should be readable without tags mussing everything up, but there should still be ways to add text modifiers like lists, bold, italics, etc. It is an alternative to WYSIWYG (what you see is what you get) editors, which use rich text that later gets converted to proper HTML’. Source https://www.ultraedit.com/company/blog/community/what-is-markdown-why-use-it.html.  Markdown is intended to be used and seen as ‘easy-to-read and easy-to-write as is feasible. Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions’. Source: https://daringfireball.net/projects/markdown/syntax

Marked is built for speed but also used as ‘a low-level markdown compiler for parsing markdown without caching or blocking for long periods of time’. In addition to this is also seen as ‘light-weight while implementing all markdown features from the supported flavors & specifications but also available as a command line interface (CLI) and running in client- or server-side JavaScript projects’. The only drawback to marked is that its doesn’t clean the html and needs to be filtered to ensure its safe. 
Source; https://marked.js.org

<h2 style="color:#a903fc">Method-override</h2>
Method override is a Node.js module available through the npm registry. Installation is done using the npm install command: $ npm install method-override
Source: https://www.npmjs.com/package/method-override and image source https://www.javatpoint.com/method-overriding-in-java

Overriding is a feature that ‘allows a subclass, or a child class, to specifically implement a method already given in one of its super-classes, or parent classes, in any object-oriented programming language. Thus, the process of redefining a parent class’s method in a subclass is known as method overriding. It is also called run time polymorphism or dynamic binding because the compiler doesn’t really know the type of object passed on compilation’. Source https://www.educative.io/answers/what-is-method-overriding-in-java  Source: https://www.simplilearn.com/tutorials/java-tutorial/overriding-in-java#why_is_overriding_in_java_useful

The benefits to overriding is that it can be used for the implementation of runtime or dynamic polymorphism but also can be used to ‘give specific implementation or definition of a method in a class, which is already in an existence in its superclass’. In addition to these benefits it can also be used to define ‘what behavior a class can have and how that behavior will be implemented by the class that will inherits it’. However there can be limitation to using this method override such as ‘both the parent class and the child class must have the same method name, the same return type and the same parameter list’. Also its important to remember that ‘methods declared final and static cannot be overridden’ and also a ‘method cannot be overridden if it cannot be inherited’. Source https://www.educative.io/answers/what-is-method-overriding-in-java

 
Source: https://www.geeksforgeeks.org/overriding-in-java/
 
<h2 style="color:#a903fc">Mongoose</h2>
Mongoose provides a simple and very straight forward ‘schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box’. It basically is an Object Data Modeling (ODM) library for MongoDB and Node.js and it also can manage the relationships ‘between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB’. Source https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
https://mongoosejs.com  


  
<h2 style="color:#a903fc">slugify</h2>
A Slug refers to the ‘unique identifying part of a web address, typically at the end of the URL. In the context of MDN, it is the portion of the URL following "<locale>/docs/"’ but it can also refer to the ‘final component when a new document is created under a parent document; for example, this page's slug is Glossary/Slug ‘. Source https://developer.mozilla.org/en-US/docs/Glossary/Slug

The slugifying ‘is the action of converting a string into a valid URL (a slug). For example: le blog de Lulu will become le-blog-de-lulu’.

As a rule of thumb – slugs are created and used especially for when making optimised urls for search engines such as google. For example ‘the url of this post is https://medium.com/@davesag/whats-a-slug-f7e74b6c23e0. There are actually two slugs in that url, my username, @davesag and the slug for this specific post, whats-a-slug-f7e74b6c23e0. Of that the whats-a-slug part comes from the title, and, for reasons only known to the people at Medium, they’ve added a short uuid to the end of it. The only reason I’d think of for doing that is if a user was able to write two stories with the same title, so I guess that can happen’. Source https://itnext.io/whats-a-slug-f7e74b6c23e0


<h2 style="color:#a903fc">Outcomes of project with references</h2>
The outcomes of the project were as follows:

•	A working API ( <span style="color:blue">There is some DB Conflicts to be fixed</span> )
•	A clear understanding of where issues lay and ability to trouble shoot
•	Understanding of how to set up a web server
•	How to set up the source code versioning
•	Better understanding of different technologies and libraries 

I’ve also attached some reference images of the code itself. 

What I learned was that setting up an API takes time, and there are a number of sequential steps involved that need to be carefully adhered to it for it to deploy correctly. The process was time consuming and involved getting really embedded in the code, technologies, injection of javascript protection, validation and processes. 
