/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#7bcd00',
        second: '#313037',
        supportive: '#e5e5e4',
<<<<<<< HEAD
      },
      dropShadow: {
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      boxShadow: {
        '4xl': '0 35px 35px rgba(0, 0, 0, 0.25), 0 45px 65px rgba(0, 0, 0, 0.15)',
=======
>>>>>>> 5a3cafe (Rename Reservations to Booking following the logic of the page created and general app logic. Provide two page components: Book Button which triggers a POST method which sends a reservation data to the server. date input which is a date selection option and select input which is a dropdown list of the existing places/tours. All components used in Booking view. Booking view itself is a logic center of booking functionality and provides creation handling, render random backgound from places.main_picture and provides a static heading and text. API functionality placed in the bookingReducer under the namespace redux.)
      },
    },
  },
  plugins: [],
};
