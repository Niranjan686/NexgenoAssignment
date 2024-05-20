Project: Taskify
Description:
Taskify is a web application designed to help users organize their daily
tasks and manage their time effectively. It features CRUD operations for
task management and user authentication via Google.
Features:
● User Authentication:
Users can log in to the application using their Google accounts,
thanks to the integration with the Google API using the
“passport-google-oauth2” library. This enables fast and secure login,
and user data is stored in the database.
● Profile Management:
The “Dashboard” feature allows users to view and update their
profile information. Although modifying the profile data is not
implemented due to time constraints, users can still retrieve their
data from the database.
● Todo Module:
Users can manage their tasks efficiently with the following
capabilities:
● Add Task: Create new tasks.
● Read Task: View existing tasks.
● Update Task: Edit tasks as needed.
● Delete Task: Remove tasks when they are no longer needed.
● Complete Task: Mark tasks as completed for review.
Technology Stack:
● React.js:
Used for creating various components and managing the frontend of
the application.
Technical Round Task
● Node.js:
Serves as the runtime environment to integrate the frontend with the
database.
● Express.js:
Handles the server-side operations and works as an API for the
application.
● MongoDB:
Utilized for storing user data, with MongoDB Atlas as the cloud
database service.
● Bootstrap:
Employed for styling components quickly and efficiently, saving
time on custom CSS.
__________________________________________________________________________________________________
step 1) cd server and cd taskify-frontend
step 2) node index.js and npm start
step 3) create the .env file and pass the [ DATABASE, CLIENTID,SECRETID,PORT]
step 4) Backend will start at htpp://localhost:1000
step 5) Frontend will start at htpp://localhost:3000
