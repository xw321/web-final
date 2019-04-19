# Web-final-exam

Final exam for Web Development course(CS5610) in Northeastern University, Silicon Valley (Spring 2019 semester). You can find the couse web page [here](http://johnguerra.co/classes/webDevelopment_spring_2019/ "CS-5610 Web Development Spring 2019").

This project is made by [Xun Wang](https://xw321.github.io/).

## Description

Final exam for web dev class at NEU. Using wiki api to search wiki.

## Demo image

![](https://raw.githubusercontent.com/xw321/web-final-exam/master/demo.png)

## Features

Search wiki and navigate via history/links buttons. All Link buttons will be updated in the History Section, unless a new search querry is submitted, which will clear the history section.

## Creative part

Add a loading stae/icon to better serve user while fetching data.

Add a segment with scroll bar for Links section, since often times there are many links.

## Requires/ Tech Stack used

Meteor

npm

React

Semantic UI (just a few)

[node-wikipedia API wrapper](https://www.npmjs.com/package/node-wikipedia)

## Usage

Clone the repo, then open the terminal, navigate to the project forlder. On the folder created and run

```
meteor npm install
meteor
```

then visit (http://localhost:3000) and you should see the app running.

## License

This project is under standard MIT license.
