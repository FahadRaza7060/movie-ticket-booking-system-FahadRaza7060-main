[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11572217&assignment_repo_type=AssignmentRepo)
# Movie Ticket Booking System

## Task Description
Develop a Movie Ticket Booking System with seat selection and booking confirmation. The system should allow users to view available movies, select seats, and complete the booking process.

## Project Details
Your task is to build a web application using React that allows users to book movie tickets. The application should have the following features:

1. **Movie Listing**: Display a list of available movies retrieved from an API endpoint. Each movie should include its title, genre, and a thumbnail image.
2. **Movie Details**: When a user clicks on a movie, they should be taken to a page displaying more details about the movie, such as the release date, runtime, and a synopsis.
3. **Seat Selection**: On the movie details page, users should be able to select their desired seats from a seating chart. The seating chart should indicate available and booked seats.
4. **Seat Validation**: Validate the seat selection to prevent double booking. If a seat is already booked by another user, show an error message and prompt the user to select a different seat.
5. **Booking Confirmation**: After selecting seats, the user should be able to review their selected movie, seats, and total price before confirming the booking.
6. **Booking Submission**: When the user confirms the booking, send a POST request to the specified API endpoint to create the booking record.
7. **Success Message**: Display a success message to the user after a successful booking. Include the booking reference number or any other relevant details.
8. **Error Handling**: Handle errors gracefully and display appropriate error messages to the user in case of any failures during the booking process.
9. **Responsive Design**: Ensure that the application is responsive and works well on different screen sizes and devices.

## Folder Structure

``` bash

├── src
│   ├── components
│   │   ├── MovieList.js
│   │   ├── MovieDetails.js
│   │   ├── SeatSelection.js
│   │   └── BookingConfirmation.js
│   ├── services
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── public
│   ├── index.html
│   └── ...
├── package.json
└── README.md

```
## Requirements
- Use React to build the application.
- Use the provided folder structure as a starting point.
- Implement the required components as mentioned above.
- Utilize React hooks and functional components.
- Implement error handling and validation to provide a smooth user experience.
- Apply responsive design principles to ensure the application works well on different devices.
- Feel free to use any additional libraries or tools that you think will help accomplish the task effectively.

## API
For movie data and booking simulation, you will use the JSONPlaceholder API.

**API Documentation:** https://jsonplaceholder.typicode.com/

## Example Endpoints:

**Retrieve list of movies:** https://jsonplaceholder.typicode.com/posts

**Create a booking:** https://jsonplaceholder.typicode.com/posts

## Evaluation Criteria
Your submission will be evaluated based on the following criteria:

- Completion of the core functionality as described in the task.
- Clean and well-organized code structure.
- Code clarity and readability.
- Proper use of React hooks and components.
- User interface design and responsiveness.
- Error handling and validation.
- Adherence to coding best practices and standards.

### Submission
Please submit your completed project as a compressed folder or a GitHub repository link. Include clear instructions on how to run the application.

Good luck with your task!
