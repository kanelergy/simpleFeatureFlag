# Welcome to feature flag management with LaunchDarkly
# A step-by-step guide for newbies and beginners alike to better understand how the LaunchDarkly SDK can be added to your app

## Sign-up and get up to speed on the basics for LaunchDarkly
1. **LaunchDarkly Trial**
	1. Sign up for a free LaunchDarkly 14-day trial at https://launchdarkly.com/start-trial/
	2. Verify email to spin up LD trial environment
2. Getting Started with LaunchDarkly platform and feature flag management!  https://docs.launchdarkly.com/home/getting-started

## Level-up your knowledge of SDKs via LaunchDarkly's SDK documentation
**Understanding how to implement SDK in React app**
1. Chosen React for programming lang: https://launchdarkly.com/features/sdk/
2. Acclimate to client-side SDK for React : React Web SDK Reference:  https://docs.launchdarkly.com/sdk/client-side/react/react-web
3. Visit React Web example app on Github:  https://github.com/launchdarkly/react-client-sdk/tree/main/examples/hoc2

## Creating Feature Flags in your LaunchDarkly environment
1. In your LaunchDarkly environment, select `Feature Flags` from the menu
2. Click the `Create Flag` button
3. Let's go with `Release` as the use case
4. Click Next
5. Name it `showButton`
6. Click Next (Optional, but you can also add a contextual Description)
7. Select `Boolean`, and configure the variations 
8. Click `Create Flag`

## Setting up React app in your environment
	a. If you want to use this app, simply `git clone {FILL IN THE GIT HTTPS WITHOUT THE BRACKETS}`
	b. OR, if you prefer to setup the LaunchDarkly SDK in your own React app FROM SCRATCH, simply [Create React App](https://github.com/facebook/create-react-app)

## Connecting the LaunchDarkly React SDK to your app
	a. once you have a React app created, now we'll need to connect the SDK using the provided code snippets. This part will require a bit of time and finesse if you're coding is a bit rusty ;)
	b. First step is to go to your LaunchDarkly platform and go to "Feature Flags" on the menu and click on "[Connect an SDK](https://app.launchdarkly.com/get-started/connect-an-sdk)" *Make sure you're in the right Project*

	c. This page is critical. Follow the step by step onscreen instructions on how to connect LaunchDarkly to your application, from `Selecting and environment and SDK` all the way through to `Testing your application`
	### Some useful notes:
	
	In your IDE you MAY need to:
	> edit your app.js file:
	```
	- Import the `withLDProvider` higher order function given in the code snippet.
	- *you may comment out the other context if needed/preferred (e.g. kind, key, name, etc.)
	- Add `import { withLDProvider } from 'launchdarkly-react-client-sdk';` to the app.js file`
	```

### That's it! Now you can `npm start` to run the app locally (if executed successfully, browser window should open to http://localhost:3000); and you can test the events sent to your LaunchDarkly instance.

---

## APPENDIX
## General React and NPM stuff

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

This command will run the app in the development mode and will open the app locally at 
[http://localhost:3000](http://localhost:3000) within your browser window.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

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
