This project is designed to manage flight bookings and provide CRUD (Create, Read, Update, Delete) operations for flight data.

The main functionalities of this project include:

Creating new flight records
Retrieving all flight records
Updating existing flight records
Deleting flight records
The project is structured as follows:

Controllers: Handle the logic for each route (e.g., flightController.js).
Models: Define the data schema using Mongoose (e.g., flightModel.js).
Routes: Define the endpoints and link them to controller functions (e.g., flightRoutes).
The code in this project is written in JavaScript and utilizes the Express framework for the server and Mongoose for MongoDB interactions.

To get started with this project, follow these steps:

Install dependencies: Run npm install to install all required packages.
Set up MongoDB: Ensure MongoDB is running and update the connection string in the configuration file.
Run the project: Use npm start to start the server.
This documentation aims to provide a clear understanding of the project's purpose, structure, and usage.


https://owasp.org/www-project-top-ten/


🔐 What OWASP Does

Provides best practices, tools, documentation, and standards to help developers build secure applications.

Offers open-source projects and guides that anyone can use for free.

Organizes conferences, training, and community events around application security.
rganizations understand where apps are most vulnerable and how to fix them — it’s considered a gold standard in web application security.

One of OWASP’s most well-known projects is the OWASP Top 10 — a regularly updated list of the 10 most critical web application security risks.
The latest categories include (simplified):

Broken Access Control – Users can access data or actions they shouldn’t.

Cryptographic Failures – Weak or missing encryption.

Injection – Malicious data injected into queries (e.g., SQL injection).

Insecure Design – Poor architecture decisions leading to vulnerabilities.

Security Misconfiguration – Unsafe default settings or incomplete configurations.

Vulnerable and Outdated Components – Using outdated libraries/frameworks.

Identification and Authentication Failures – Broken login or session handling.

Software and Data Integrity Failures – Code or data integrity isn’t verified.

Security Logging and Monitoring Failures – Missing or ineffective logging.

Server-Side Request Forgery (SSRF) – Server makes unintended requests.
