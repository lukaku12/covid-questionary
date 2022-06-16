 <h1 >Covid Questionary</h1>

---
The Covid Questionnaire is an application that Redberry's new employees need to complete to understand their attitude towards the Covid situation and how Redbury can improve and contribute to the company's internal Covid policy.
The questionnaire consists of 6 pages:
* Questionnaire home page
* Personal Information
* Developer Covid-status
* Are you vaccinated or not?
* Preferred covid policy in the company
* Thanks page

#
### Table of Contents
* [Prerequisites](#prerequisites)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Development](#development)

#
### Prerequisites

* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558" height="15" style="position: relative; top: 4px" /> *Vue@5.0.4 and up*
* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png?20140904162625" width="35" style="position: relative; top: 4px" /> *npm@6.14.17 and up*


#
### Tech Stack 

* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558" height="20" style="position: relative; top: 4px" /> [Vue@5.0.4](https://vuejs.org/) - front-end framework
* <img src="https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png" height="19" style="position: relative; top: 4px" /> [Vuex](https://vuex.vuejs.org/guide/) - package for state management
* <img src="https://user-images.githubusercontent.com/7110136/29002858-a09570d2-7ab4-11e7-8faa-5dd6d4458b0d.png" height="19" style="position: relative; top: 4px" /> [Vue Router](https://router.vuejs.org/) - package for routing

#
### Getting Started
1\. First you need to clone Covid Questionary from github:
```sh
git clone https://github.com/RedberryInternship/covid-questionary-luka-kurdadze.git
```

2\. Next step requires you to run *npm install* in order to install all the dependencies.
```sh
npm install
```

3\. after that install vuex, for State Management:
```sh
npm install vuex@next --save
```
3\. after you have installed vuex you need to install vue router to use routing:
```sh
npm install vue-router@4
```

### Development

You can run vues built-in development server by executing:

```sh
  npm run serve
```