<!-- PROJECT DESCRIPTION -->

# <a name="about-project"> Traveli </a>

This project serves as the frontend component of a larger system, seamlessly interfacing with the corresponding [backend counterpart](https://github.com/romans-adi/travel-booking-backend) developed using the Rails framework. Its primary function is to execute GET requests, retrieving and rendering data from the specified endpoint.

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Tech Stack](#tech-stack) 🛠️
- [Key Features](#key-features) ✨
- [Getting Started](#getting-started) 🚀
  - [Setup](#setup) 🔧
  - [Installation](#installation) ⚙️
  - [Usage](#usage) 🧰
- [Authors](#authors) 🖋️
- [Future Features](#future-features) 🌟
- [Contributing](#contributing) 🤝
- [Support](#support) 🆘
- [Acknowledgments](#acknowledgments) 🌲
- [License](#license) 📄

<!-- TECH STACK -->

## Tech Stack 🛠️ <a name="tech-stack"></a>

  <ul>
     <li><a href="https://react.dev/">React</a></li>
      <li><a href="https://axios-http.com/docs/intro">Axios</a></li>
     <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
     <li><a href="https://www.w3.org/Style/CSS/Overview.en.html">CSS</a></li>
  </ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->

## ✨ Key Features<a name="key-features"></a>

- [x] React Router Integration: The project uses React Router to manage routing, allowing for navigation between different views within the application.
- [x] Redux State Management: Redux is utilized to manage the application's state. The store is configured using Redux Toolkit, and the reducers handles state updates.
- [x] Asynchronous Data Fetching: The application incorporates asynchronous data fetching using Redux Toolkit's createAsyncThunk. It fetches data from a specified API endpoint using Axios.
- [x] Component-Based Architecture: The code is organized into separate components for improved maintainability and readability.
- [x] Responsive Design: The application's design includes responsiveness and flexible styling for various screen sizes.

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

3. Start Development Server: Once you've confirmed that your server is running, you can start the development server for your React app. To avoid conflicts with the Rails app (which uses port 3000), choose a different port for your React app. Run the following command:

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

<!-- AUTHORS -->

## 🖋️ Authors & Contributors<a name="authors"></a>

👤 **Daniel Carrera**

- GitHub: [@carreraprogrammer](https://github.com/carreraprogrammer)
- Twitter: [@carreraprogrammer](https://twitter.com/carreraprog)
- LinkedIn: [Daniel Carrera](https://www.linkedin.com/in/carreraprogrammer/)

👤 **Romans Š.**

- GitHub: [@romans-adi](https://github.com/romans-adi/)
- LinkedIn: [Romans Špiļaks](https://www.linkedin.com/in/obj513/)

👤 **Mohamed Gamil Eldimardash**

- GitHub: [@github](https://github.com/MMGGYY66)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/mohamed-eldimardash-0023a3b5/)
- Twitter: [twitter](https://twitter.com/MOHAMEDELDIMARd)
- Facebook: [facebook](https://www.facebook.com/MOHAMED.ELDIMARDASH/)
- StackOverflow: [stackoverflow](https://stackoverflow.com/users/13605630/mohamed-gamil-eldimardash)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🌟 Future Features <a name="future-features"></a>

- [ ]User Authentication: Implement user login and sign-up functionality to enhance security and user management.
- [ ] Reservation Page: Create a reservation page where users can make bookings for your service.
- [ ] API Documentation: Develop comprehensive API documentation to assist developers in using your API effectively.
- [ ] Project Deployment: Deploy the project to both staging and production environments for testing and production use.
- [ ] Project Documentation: Create detailed project documentation to help users and developers understand the project's structure and functionality.
- [ ] API Endpoints: Generate API endpoints and controllers to handle data interactions efficiently.
- [ ] Reducer and Redux Integration: Implement Reducer and Redux to facilitate API calls for the "place" feature.
- [ ] Main Page: Design and develop the main page of the application, providing an entry point for users.
- [ ] Home Page: Create a user-friendly home page to showcase key features and content.
- [ ] Place Adding Form: Develop a form for adding new places to your platform, enhancing user convenience.
- [ ] Place Details Page: Build a dedicated page to display detailed information about specific places or locations.
- [ ] Booking Functionality: Implement booking functionality to allow users to reserve places or services.
- [ ]Cancel Reservation Page: Develop a feature that enables users to cancel their reservations easily.

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
