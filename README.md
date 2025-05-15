# Setup instructions

Steps to set up frontend

1 to create react app with Vite 
npm create vite@latest  <project name> --template react

2 cd project name

3 npm install

4 npm run dev

Steps to setup BE

1 . cd  src > cd mockServer

2  node server.js // make sure BE is running on port 3000


# Architectural Explanation

HR Dashboard project is fosused is on modularity. It has seperate folders for 
1.Components > focused is on all the components of the project includes login , header, background, Dashboarde etc
2.MockServer > contains code for BE mainly api's
3.Routes > contains routes for the application and protected routes
4.utils > contains constants file and mock Data(mocked service files )


# Application Architecture Overview

1.Authentication & Access Control
The application features a secure login system with role-based access for Admin and Employee users. All application routes are protected — unauthenticated users are restricted from accessing any part of the system.

2.Company Selection & Employee Management
After a successful login, users are prompted to select a company from a dropdown menu. Upon selection, a dynamic employee list is displayed using infinite scrolling for seamless navigation.

3.Dashboard Interface
The dashboard utilizes a tabbed view layout, allowing users to switch between key sections of the application efficiently.

4.Leave Management
The Leaves section provides a visual overview using a pie chart, giving users a summary of leave statistics.

5.Announcements Module
The Announcements section presents data in a table format with infinite scrolling, enabling users to browse updates without pagination.










