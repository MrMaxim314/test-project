# test-project
This app generates PDF file (first name + last name + image). Example of file you can see in the data folder.

# Setup

1. You must install MySQL, NodeJS, Postman.
2. Create testproject DB in Mysql
3. Clone this project using git clone.
4. Open project in your favourite IDE and write in terminal 'npm install'.
5. To start app write 'npm run dev'.

If everything is fine you will see 'Server is running on http://localhost:5000'

# Endpoints

# GET

Request:
    http://localhost:5000/list
Response: All users from DB

# GET

Request:
  http://localhost:5000/generate/:firstName
  Example: http://localhost:5000/generate/Ivan
Response: 
  true or false in JSON.

# POST

Request:
  http://localhost:5000/add
In Postman select body -> form-data. Fill in firstName, lastName, imagse(change type to file).
Response: 
  new user in JSON.
