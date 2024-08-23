# Implement Data Import Functionality for Book and Author

## Objective

This project aims to implement a feature that allows users to upload an Excel sheet containing book and author data. Once uploaded, the data is displayed in a table for user review and confirmation before it is stored in the database. The project ensures that the data is validated and handles errors gracefully to provide a smooth user experience.

## Features and Requirements

### 1. Upload Feature
- **File Types Supported:** Users can upload Excel files with `.xls` or `.xlsx` extensions.
- **Data to Upload:** The Excel file should contain information about books and their corresponding authors.

### 2. Data Models
- **Book Model:**
  - `Name`: The title of the book.
  - `ISBN Code`: A unique identifier for the book.
  - `Author Id`: A reference to the author of the book.

- **Author Model:**
  - `Name`: The name of the author.
  - `Email`: The email address of the author.
  - `Date of Birth`: The birthdate of the author.

### 3. Display Table
- After the Excel file is uploaded, the contents are displayed in a table format.
- This allows the user to review and confirm the data before it is saved to the database.

### 4. Database Storage
- **Storage Logic:** Once the user confirms the data, it is validated and then stored in the database.
- **Relational Integrity:** The relationship between books and authors is maintained using foreign keys.

### 5. Data Validation
- **Validation Checks:**
  - Ensure all required fields are present.
  - Validate data types (e.g., date format for birthdate, string format for email).
  - Check for duplicate entries, particularly for ISBN codes and author emails.
  
### 6. Error Handling
- **Graceful Handling:** Any errors during the upload, validation, or storage process are handled gracefully.
- **User Feedback:** Users receive feedback if the uploaded data is invalid or if any other issues occur, with clear messages to guide them on what needs to be corrected.


## Setup and Installation

1. **Clone the Repository:**
  ```git clone https://github.com/KeyurD1010/shipmnt-task1```
2. **Install Dependencies:**
  ```bash
    cd your-repo-name
    npm install
  ```
4. **Environment Variables:**
- Create a `.env` file at the root of the project.
- Define the following environment variables:
  ```
  MONGODB_URI=<your-mongodb-uri>
  BASE_URL=<your-base-url>
  ```

4. **Run the Application:**

5. **Access the Application:**
- The application will be available at `http://localhost:3000`.

## Usage

1. **Upload Excel File:**
- Navigate to the upload section of the application.
- Select and upload the Excel file containing the book and author data.

2. **Review Data:**
- After upload, the data is displayed in a table.
- Review the data for accuracy.

3. **Confirm and Save:**
- Confirm the data, and it will be validated and stored in the database.

4. **Error Handling:**
- If there are any issues with the upload or data, appropriate error messages will be displayed.

## Sample Excel File

A sample Excel file structure is provided for reference. Ensure that your Excel file follows this format for successful upload.

## Technologies Used

- **Backend:**
- Node.js
- Express.js
- Mongoose (for MongoDB integration)

- **Frontend:**
- React.js
- Material-UI (for UI components)

- **Other Libraries:**
- Axios (for HTTP requests)
- XLSX (for handling Excel file parsing)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.


---

This README provides a comprehensive overview of the project, from setup to usage. If you encounter any issues, please open an issue on GitHub, and I'll be happy to assist.


