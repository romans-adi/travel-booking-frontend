<!-- PROJECT DESCRIPTION -->

# <a name="about-project"> Traveli </a>

Traveli App is a user-friendly travel planning and booking platform that seamlessly integrates cutting-edge technologies. It utilizes React Router for smooth navigation, Redux for efficient state management, and Redux Toolkit's createAsyncThunk for real-time data fetching. With a responsive design, secure user authentication, and robust [backend support from here](https://github.com/romans-adi/travel-booking-backend), Traveli simplifies travel planning and booking, making it a delightful experience for users.

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Tech Stack](#tech-stack) 🛠️
- [Key Features](#key-features) ✨
- [Getting Started](#getting-started) 🚀
  - [Setup](#setup) 🔧
  - [Installation](#installation) ⚙️
  - [Usage](#usage) 🧰
  - [Testing](#testing) :nut_and_bolt:
- [Authors](#authors) 🖋️
- [Future Features](#future-features) 🌟
- [Contributing](#contributing) 🤝
- [Kanban Board](#kanban) :orange_book:
- [Support](#support) 🆘
- [Acknowledgments](#acknowledgments) 🌲
- [License](#license) 📄

<!-- TECH STACK -->

## Tech Stack 🛠️ <a name="tech-stack"></a>

  <ul>
    <li><a href="https://react.dev/">React</a></li>
    <li><a href="https://axios-http.com/docs/intro">Axios</a></li>
    <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
    <li><a href="https://jestjs.io/">Jest</a></li>
    <li><a href="https://www.w3.org/Style/CSS/Overview.en.html">CSS</a></li>
  </ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->

## ✨ Key Features<a name="key-features"></a>

 - **React Router Integration**: The project utilizes React Router to manage routing, enabling seamless navigation between various views within the application.
 - **Redux State Management**: Redux is employed to efficiently manage the application's state. The store is configured using Redux Toolkit, and the reducers handle state updates effectively.
 - **Asynchronous Data Fetching**: The application incorporates asynchronous data fetching using Redux Toolkit's createAsyncThunk. It retrieves data from a specified API endpoint using Axios.
 - **Component-Based Architecture**: The code is thoughtfully organized into separate components, enhancing maintainability and code readability.
 - **Responsive Design**: The application's design is responsive, adapting gracefully to various screen sizes and ensuring a consistent user experience.
 - **User Authentication**: The application implements user login and sign-up functionality using JWT authorization to enhance security and streamline user management.
 - **API Endpoints**: All data retrieval is performed through the [backend part](https://github.com/romans-adi/travel-booking-backend) of the project.
 - **Reducer and Redux Integration**: Reducers and Redux are seamlessly integrated to facilitate API calls for the most crucial features.
 - **Home Page**: This serves as the entry point for users, providing user-friendly Sign Up and Login options.
 - **Main Page**: A user-friendly landing page that showcases various destinations, enticing users to explore the services offered.
 - **Place Adding & Travel Adding Forms** These two consecutive forms empower agencies (one of the user roles) to add new places and travels, expanding the application's functionality.
 - **Booking Page** Users can easily book their dream travel experience by selecting a date and choosing a trip from the dropdown list.
 - **Reservations List Page**: This page allows users to view their booked travels, giving them the option to remove or unbook a travel if needed.
 - **Place Details Page**: A detailed travel page that provides comprehensive information about the selected trip associated with the chosen place.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🌐 Live Demo

Explore the live demo of the Traveli App to see it in action:

[Traveli](https://traveli.onrender.com/)

Feel free to interact with the application to get a firsthand experience of its features and functionalities. Please note that the live demo represents a snapshot of the project and may not include all the latest updates and features. For the most up-to-date version of the application, you can refer to the GitHub repository.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 🚀 Getting Started<a name="getting-started"></a>

### Setup 🔧<a name="setup"></a>

1. To get a local copy up and running, follow these steps.
Choose the directory on your local machine where you want to copy project. For example:

```
cd /home/user/name-of-your-directory
```

Clone the project using one of the options.

Using SSH-key:

```
git clone git@github.com:romans-adi/travel-booking-frontend.git
```
Using HTTPS:

```
git clone https://github.com/romans-adi/travel-booking-frontend.git
```

You can also create the new directory just adding the name of it in the end of command. For example:

```
git clone https://github.com/romans-adi/travel-booking-frontend.git frontend-traveli
```
### Installation ⚙️<a name="installation"></a>

To run this project locally, follow these steps:

1. Open your terminal or command prompt.

2. Navigate to the directory where you have cloned or downloaded the Traveli repository.

3. Run the following commands to install any required dependencies:

```
npm install
```

### Usage 🧰<a name="usage"></a>

Follow these steps to use the Traveli:

1. Setup Completion: Ensure that you have completed the setup process as mentioned earlier.

2. Backend Server Check: Make sure your Rails backend is up and running. You can verify its accessibility by opening your web browser and navigating to the following URL:

```
http://localhost:3000/api/v1/places
```

This URL should display the backend's response (random greeting message).

3. Once you've confirmed that your server is running, you can start the development server for your React app. To avoid conflicts with the Rails app (which uses port 3000), choose a different port for your React app. Currently, we are using port 3001, which won't trigger any errors at this moment.

Run the following command:

```
npm start
```

This will launch the development server for your React frontend.
By following these steps, you'll be able to use the Traveli in conjunction with your Rails backend.

4. By default, you can access the app by opening your web browser and navigating to the following URL (assuming that port 3000 is used by Rails app):

```
http://localhost:3001
```

5. If you have future features like GUI or interactive mode, follow the specific instructions provided for those features in the app's documentation.

### Testing :nut_and_bolt:<a name="usage"></a>

1. Use the following command to run the tests:

```
npm test
```

This will execute the test suite and provide you with information on test results and any potential issues.

2. Interpreting Test Results: Keep in mind that this project is dynamically growing and evolving. As a result, some tests may occasionally fail due to the latest improvements and changes. It's essential to review the test results carefully, especially if you encounter failures.

3. Reporting Issues: If you encounter any issues during testing, such as failing tests or unexpected behavior, please report them to the development team. You can do this by opening a new issue in the project's repository or contacting the project maintainers directly.

Testing is an ongoing process, and the development team is actively working to maintain and improve the application. Your feedback is valuable in ensuring the continued quality of the project. Thank you for your cooperation in testing this application!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 🖋️ Authors & Contributors<a name="authors"></a>

👤 **Daniel Carrera**

- GitHub: [@carreraprogrammer](https://github.com/carreraprogrammer)
- Twitter: [@carreraprogrammer](https://twitter.com/carreraprog)
- LinkedIn: [Daniel Carrera](https://www.linkedin.com/in/carreraprogrammer/)

👤 **Romans Š.**

- GitHub: [@romans-adi](https://github.com/romans-adi/)
- LinkedIn: [Romans Špiļaks](https://www.linkedin.com/in/obj513/)

- We extend our special thanks to [Mohamed Gamil Eldimardash](https://github.com/MMGGYY66) for his valuable contributions to the initial stages of our project, where he played a crucial role in creating models and establishing relations in the backend.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🌟 Future Features <a name="future-features"></a>

- [ ] Travel Package Creation: Implement a feature that allows travel agencies to create custom travel packages for specific destinations.
- [ ] User Reviews and Ratings: Enable users to leave reviews and ratings for travel packages and destinations. Implement a rating system to help users make informed choices (for now the rating system is static and default).
- [ ] Search and Filter Options: Enhance the search functionality with advanced filters such as price range, travel dates, destination type, and more to help users find their ideal travel package.
- [ ] Interactive Maps: Integrate interactive maps that display the destinations and attractions within a selected travel package. Users can explore and plan their trips visually.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- KANBAN BOARD -->

## :orange_book: Kanban Board <a name="kanban"></a>

[Here](https://github.com/users/romans-adi/projects/2/views/1) you can find our Kanban Board.

The initial state of our board:

![Kanban Initial State](https://user-images.githubusercontent.com/83185550/269739351-fdc966b5-916b-47b1-b180-27c20cd55a48.png)

We completed a project as a duo (a team of 2 people). One task was completed by a teammate who left the project on the second working day.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

We welcome contributions to enhance the functionality and user experience of the Traveli Application. If you have any ideas, suggestions, or bug reports, feel free to open an issue or submit a pull request. Let's share ideas!

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository, explaining your changes in detail.

Please adhere to the coding conventions and guidelines specified in the project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## 🆘 Support <a name="support"></a>

If you encounter any issues or have any questions or suggestions, please open an issue on the [issue tracker](../../issues/).
Furthermore, if you would like to get in touch with me, you can find our contact information in the <a href="#authors">Authors</a> section.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🌲 Acknowledgements <a name="acknowledgments"></a>

- [Murat Korkmaz ](https://www.behance.net/muratk) : We would like to express our sincere appreciation to Murat Korkmaz for providing the [design on Behance](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign).

<!-- LICENSE -->

## 📄 License <a name="license"></a>

This project is [MIT](LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
