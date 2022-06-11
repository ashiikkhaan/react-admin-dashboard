# Getting Started with Create React App and SASS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and I have used [SASS](https://sass-lang.com) for styling.

## Description and Instruction of this project

Here, I will write how I have completed this project:

### `npx create-react-app react-admin-dashboard`

First of all, I need to set up my development environment with [Create React App](https://create-react-app.dev/).

### `npm install sass`

In this project I have used [SASS](https://sass-lang.com) for styling. 

### Deploy React App on Github Pages

It was an important part. I didn't know about React App Deployment on Github Pages. Now, I can deploy. For this I have just followed the instructions from [this documentation](https://create-react-app.dev/docs/deployment). The steps are given below: 
 step-1: open package.json file and add this: 
 		"homepage": "https://myusername.github.io/my-app",    
 step-2: install github pages form your terminal: 
         ### `npm install -save gh-pages`      
 step-3: add the following scripts in- scripts field in- package.json:
		    "predeploy": "npm run build", 
		    "deploy": "gh-pages -d build",      
 step-4: push all changes to git: 
 		 git add
 		 git commit -m "your commit"
         git push      
 step-5: Now final command: 
         npm run deploy 











### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
