# Unlocking Wellness

### A health-care web and mobile app that allows patients to find and assemble a team of providers who are specially trained to care for marginalized communities and people groups.


|![Alt text](/client/lib/uw001.PNG?raw=true "home page")|
|:--:|
| <b>Home page of the application.</b>|

## Tech Stack

### Front End
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![Material UI](https://img.shields.io/badge/materialui-%230081CB.svg?style=flat&logo=material-ui&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=flat&logo=npm&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?flat&logo=figma&logoColor=white)

### Back End
![NodeJS](https://img.shields.io/badge/node.js-%2343853D.svg?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase)


### Version Control & Deployment
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white)


## Getting Started

Installing:

```bash
cd server && npm install
cd client && npm install
```

Then, run the development server:

```bash
cd server && npm run next start
cd client && npm start
```

Place and export Yelp API key in
```
server/config/config.js
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Firebase for Authentication

The project currently offloads its authentication, log in, and registration to Firebase. In order to deploy the project, create a Firebase account and project, then update the following variables in client/.env.local :

[x] NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY

[x] NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN

[x] NEXT_PUBLIC_FIREBASE_PROJECT_ID

[x] NEXT_PUBLIC_SERVER_IP

## Team
[Ran An](https://www.linkedin.com/in/ran-an2021/)

[Zach Bretz](https://www.linkedin.com/in/zach-bretz/)

[Caleb Broderick](https://www.linkedin.com/in/caleb-broderick/)

[Keefe Dashiell](https://www.linkedin.com/in/keefe-dashiell-b617111b6/)

[Ubin Jung](https://www.linkedin.com/in/ubin-jung/)

[Zadok Kim](https://www.linkedin.com/in/zadok-kim/)

[Brian Lee](https://www.linkedin.com/in/brian-christopher-lee/)

[Sophie Nguyen](https://www.linkedin.com/in/sophia-x-nguyen/)

## Screenshots

| ![Alt text](/client/lib/uw002.PNG?raw=true "search page") |
|:--:|
| <b>Provider Search Results</b>|

| ![Alt text](/client/lib/uw003.PNG?raw=true "search page dark mode") |
|:--:|
| <b>Provider Search Results in Dark Mode</b>|


|![Alt text](/client/lib/uw004.PNG?raw=true "results map")|
|:--:|
| <b>Results Map</b>|


|![Alt text](/client/lib/uw005.PNG?raw=true "chatbot")|
|:--:|
| <b>Chatbot</b>|

| ![Alt text](/client/lib/uw006.PNG?raw=true "login/registration") |
|:--:|
| <b>Login Page</b>|
