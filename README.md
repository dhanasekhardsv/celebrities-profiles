# Celebrities Dashboard

## Table of Contents
- Introduction
- Features
- Technologies Used
- Installation and Usage
- Contributing
- Contact

## Introduction
Welcome to the Celebrities Dashboard! This powerful and user-friendly web application is designed to help you manage celebrity profiles around the globe efficiently and effectively.

## Features
### 1. Celebrities List:
- On the landing page, there will be a list of cebrities around the globe showing each user profile picture and full name.
### 2. Details of each user:
- Each user card is an accordion. You can expand and collapse the user details by clicking on down/up arrow placed at right side of profile card.
- You can expand one user at a time. On expanding the user, you can find the details of corresponding user like Age, Gender, Country and Description.
### 3. User management:
- After expandig the user details, you will find couple of user management options like delete and edit.
- On click of Delete icon, a popup will be showed up and you are asked to confirm the deletion of selected user. On confirming deletion, the corresponding user will be removed from the list. On clicking on the cancel button in popup, the user deletion operation will be aborted.
- You can edit the usr details by clicking on edit icon on expanded user profile. On enabling the edit mode of selected user, you can find text fields to edit user name, age, country and description and a dropdown to select gender.
- You cannot update your details with invalid details.
- After entering valid details, you can save the changes by clicking on Tick icon.
- You cannot edit multiple users at same time.
- If not willing to update the details, you can abort edit by clicking on Cancel icon which will keep previous changes.
### 4. User search functionality
- One can search for users by giving user name in the search bar.
- If search value is an empty string or just spaces, all users will be showed as search results.
### 5. Responsive design
- The dashboard is a responsive web application.
- The web application will adjust the view as per the resolution and will work in all desktops, tables and mobiles.
### 6. Reusable components
- Implemented a reusable Modal Popup component which can be used to import and can shape the modal content as per the requirement.
### 7. Performance optimization
- Implemented debouncing for user search which is an important performance optimization technique when it comes to limiting frequent API calls.

## Technologies Used
- Frontend: HTML, CSS, JavaScript, React, TailwindCSS
- State Management: Redux Toolkit, React-Redux

## Installation and Usage
Follow these steps to set up and run the React application on your local machine:
1. Clone the repository:
    `https://github.com/dhanasekhardsv/celebrities-profiles.git`
2. Navigate to the project directory:
    cd celebrities-profiles
3. Install dependencies:
⋅⋅⋅Using npm: npm install
⋅⋅⋅Using yarn: yarn install
4. Start the development server:
⋅⋅⋅Using npm: npm start
⋅⋅⋅Using yarn: yarn start
5. Open your browser and navigate to `http://localhost:3000` to view the website
6. Build for production:
⋅⋅⋅Using npm: npm run build
⋅⋅⋅Using yarn: yarn build

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding standards for new features.

## Contact
For any questions or feedback, please contact me at `dhanasekhardsv@gmail.com` or `https://www.linkedin.com/in/dhana-sekhar/`.