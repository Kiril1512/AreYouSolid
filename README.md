# AreYouSolid

Innovation project to test SOLID and Defensive Programming skills.

This angular project was created to practice some angular 2+ development and SOLID skills. It's a simple page where you can learn about SOLID principles and take a quiz of 15 questions about it. Next you will be given a score witch you can share and compare results with others.

## Features/Build with

1. [Firebase Anonymous Authentication](https://firebase.google.com/docs/auth/web/anonymous-auth?hl=en-US). These temporary anonymous accounts can be used to track if a user has done the quiz, get the results and work with data protected by security rules.

2. [Firebase realtime Database](https://firebase.google.com/docs/database). Real time database alow a user to submit his score and see the other users scores. You can't see others users score if you did not submit your own results.

3. [Angular Material](https://material.angular.io/). This was used to style the tables, spinners, buttons, etc...

4. [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs). This package allows the example code used in the questions to get highlighted and not be displayed as simple text.

### Prerequisites

1. [Angular CLI](https://cli.angular.io/)

2. [Nodejs](https://nodejs.org/en/)

3. [Fireabase](https://firebase.google.com/docs/web/setup?hl=pt)

### Installing

1. First download or clone this repository.
2. Then install the packages.

```node
npm install
```

3. Create an firebase project in the [Firebase Console](https://console.firebase.google.com/).

4. Activate the anonymous provider in the **Authentication configuration** ```(https://console.firebase.google.com/project/<yourProject>/authentication/providers)```.

5. Create an **Realtime Database** ```(https://console.firebase.google.com/project/<yourProject>/database)``` in the test mode (*These rules give anyone, even people who are not users of your app, read and write access to your database so you may change it later*).

6. Create an aplication in the **Project settings** ```(https://console.firebase.google.com/project/<yourProject>/settings/general/)```.

7. Save your aplication **configuration** and replace it at ```./src/app/app.module.ts```.

```typescript
const firebaseConfig = {
  apiKey: "yourApiKey",
  authDomain: "yourAuthDomain",
  databaseURL: "yourDataBaseURL",
  projectId: "yourProjectID",
  storageBucket: "",
  messagingSenderId: "yourSenderID",
  appId: "yourAppId"
};
```

8. Start the application.

```node
ng serve --aot --open
```

## Authors

* **Kyrylo Yavorenko** - *Full-Stack Developer* - [Linkedin](https://www.linkedin.com/in/kyryloyavorenko/)

See also the list of [contributors](https://github.com/Kiril1512/AreYouSolid/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Application preview

Home page will give you the option to start the quiz or learn about SOLID. Learn SOLID will give you some useful links and a brief summary about SOLID principles.

![Home](https://i.ibb.co/TvHzcrQ/home2.png)

You can answer the multiple questions and then the explanation for the correct answer.

![Quiz](https://i.ibb.co/6Jq2rRM/Questions.png)
![QuizWithAnswer](https://i.ibb.co/Zzkyh5z/questions-With-Result.png)

Also there are some code questions.

![Code Questions](https://i.ibb.co/xSnBhPB/questions-With-Code-And-Results.png)

At the end you will have your results which you can share.

![Results](https://i.ibb.co/9G8Hmxr/results.png)
![ResultsSubmited](https://i.ibb.co/h7H2F4f/results-Submited.png)

## Project Structure

```text
|-- app
	|-- Firebase
		|-- Auth
		|-- Data
	|-- Pages
		|-- About
		|-- Home
		|-- LearnSlid
		|-- Quiz
			|-- Questions
			|-- Register
			|-- Results
	|-- Shared
		|-- Points
```

## Acknowledgments

* Courses I have done to create this project: [Angular 8 - The Complete Guide](https://www.udemy.com/the-complete-guide-to-angular-2/), [SOLID Principles for C# Developers](https://www.pluralsight.com/courses/csharp-solid-principles) and [Defensive Coding in C#](https://www.pluralsight.com/courses/defensive-coding-csharp).
* Tools I used: [Visual Studio Code](https://code.visualstudio.com/), [Firebase Console](https://console.firebase.google.com/).
* You can add more code languages to highlight at ```app.module.ts``` in the ```hljsLanguages()``` function. See the [full list of supported languages](https://github.com/highlightjs/highlight.js/tree/master/src/styles).
* The code examples for questions and for the correct answers can be found in ```./assets/code_example``` as simple txt files. Those files are imported by ```http.get```.

### Application/Code logic

* The authGuard was created to not let the authenticated user (user which have completed the quiz) to start a new quiz and not authenticated users to see the results. The problem of anonymous authentication is that the user can simple switch the browser, clear local storage or use the incognito mode to the app consider that this is a different user. In normal situation, the user can see his results again after the browser was closed since the users "iud" is associated with the points after the results be submitted.
* Each user can do the quiz only once (this is done to prevent in normal circumstances the user to do the quiz again after knowing the answers).
* Various questions have different scores from 0.25 to 1.5 points. The maximum score is 20 points.
* When the answer is clicked, the correct answer turns green and the others red and it shows a justification for the correct answer.
* The authentication occurs when the user answers the last question and clicks in "Done" button.
* You can only see the others users results if you submitted your own results.
* If user did not submit the results and the application is closed, the points will be lost and you can not do the quiz again (related to the first point).
