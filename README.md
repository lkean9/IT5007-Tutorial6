# IT5007-Tutorial6 Instruction
The project follows most of the instructions provided by the textbook and lecture. 

## 1.	Instructions to Execute the Backend Server & Database from Tutorial 5.
Since the Tutorial 6 mobile app front end is developed based on the previous Tutorial 5 backend, please follow the below steps to activate server and database provided in the Tutorial 5:

- __Download the Tutorial 5 source code [Here](https://github.com/lkean9/IT5007-Tutorial5). Follow the belows steps to initialize backend server and database. (Exactly same as the previouls Tutorial 5 assessment steps).__

- __*Please kindly note that the server port is 2021.*__ Please forgive me not using the required port 3000, since it is currently being used by another project of mine.

- __*npm install*__ to install required dependencies and packages.

- __*screen mongod*__ to start the mongoDB (ctrl + A followed by D to return to the terminal).

- __*mongo waitlist scripts/init.mongo.js*__ to initialize the mongoDB.

- __*npx babel src --out-dir public*__ to compile the jsx file.

- __*npm start*__ to activate the application.

- __*localhost:2021*__ to open the application on the browser. You may also add __*/graphql*__ to open the GraphQL playground. 

## 2.	Start React Native for Tutorial 6 Mobile App
The Tutorial 6 mobile app source code can be obtained from [Here](https://github.com/lkean9/IT5007-Tutorial6).

- __*Open Android Studio to start up an Android Virtual Device.*__

- __*Go to the Android App folder and open the cmd at current directory.*__

- __*npm install*__ to install relevant dependencies and packages.

- __*Open App.js file*__ to change the IP address based on your own device IP config. 
```const client = new ApolloClient({ uri: "http://[YOUR IP ADDRESS]:2021/graphql" });```

- __*react-native run-android*__ to start the android app.

Then you can add the reservation by specifying the name and phone number in the mobile app, and you may check website, GraphQL playground or simply check MongoDB backend to find the newly inserted reservation information. 


