# Cyber-Capstone-2025
Cyber Capstone Project for 2025.
_________________________________________________________________________________
## Table of Contents 
1. What the project is
2. Project goals
3. Gantt chart
4. How to get contents of database web-based
5. Break-down of pages coded and folders to organize
_________________________________________________________________________________
### Personal Cybersecurity Learning Platform 
This project is a full-stack web dev project. It will be a website that stands as a personal cybersecurity learning platform.
_________________________________________________________________________________
### Project Goals
1. Get a website up and running.
2. Learn about cybersecurity.
3. Create learning content and modules for different subjects. Goal = 6 modules.
4. Add a fun and appealing aesthetic, promo, and user experience.
5. Properly configure and route. This includes taking care of and learning about infrastructure needs, domain name, servers, etc.. 
_________________________________________________________________________________
### Gantt Chart 
[Gantt Chart](https://github.com/alexisbernt/Cyber-Capstone-2025/blob/4bbb2e042558c8a302b7f76d46724e21dad608ce/documentation/Cyber%20Capstone%20Website%20Development%20Process%20Gantt%20Chart.png)
_________________________________________________________________________________
### Database: SQLiteviewer.app
Super cool tool to see the contents of a database (web-based): https://sqliteviewer.app/
_________________________________________________________________________________
### Pages and folders
### Front-end:
- App.js: Where the different pages are brought together. According to Simplilearn.com - "React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view."
- index.js - Creates and Renders the Root React Component. A root container according to ChatGPT - "A root container in React refers to the HTML element where your React application is mounted. This is typically a <div> element in your index.html file with an id of "root"." Rendering happens which, in web development, is the process of converting code into viewable, interactive web content for users. The script initializes a React app by rendering (applying) the App component inside the HTML element (that will be) with the id="root". If you uncomment at the end of the file, it includes optional performance monitoring.
- Home.js - The starter screen that the user is brought to when they reach the website. useEffect(() => {...}, []) ensures the fetch request runs only once when the component mounts. .catch((error) => console.error(...)) helps handle errors gracefully.
### Back-end:
- server.js: node server.js
