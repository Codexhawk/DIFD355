/*
CREATE TABLE USER_ACCOUNT (
	id INT UNSIGNED NOT NULL auto_increment,
	Email VARCHAR(400) UNIQUE NOT NULL,
	FirstName VARCHAR(20) NOT NULL,
	LastName VARCHAR(30) NOT NULL,
	Phone VARCHAR(15),
	StreetAddress  VARCHAR(60),
	City VARCHAR(40),
	State VARCHAR(2), // Change to CHAR()
	Zip VARCHAR(5), // Change to CHAR()
	PRIMARY KEY(id)
);

Insert INTO USER_ACCOUNT (id, Email, FirstName, LastName, Phone, StreetAddress, City, State, Zip) Values (NULL, "mail@mail.org", "John", "Doe", "18033332222", "123 abblebrook road", "New York", "NY", "12345");
*/

const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'deltona.birdnest.org',
  user: 'my.smitho3',
  database: 'my_smitho3_Netflix',
  password: 'sequel'
});
 
var answer;
var contin = Y;
console.log("welcome to the Netflix database, with this program you can add change and remove your user.");

while (contin == 'Y') {
  console.log("what would you like to do today?(SELECT, CREATE, UPDATE, DELETE");
  answer = readline().toUpperCase();

  if (answer == 'SELECT') {
    console.log("Who would you like find? first name: ");
    var fname = readline();
    console.log("last name:");
    var lname = readline();
    console.log("Here is you Select statements results: ");

    connection.execute(
      'SELECT * FROM USER_ACCOUNT WHERE FirstName = ? AND LastName = ?',
      [fname, lname],
      function(err, results) {
        console.log(results);
      }
    );

    console.log("would you like to continue? (Y or N");
    contin = readline();
  }

  if (answer == 'CREATE') {
    console.log("Please input the content into the fields as they are provided.");
    console.log("Email: ");
    var Email = readline();
    console.log("First Name: ");
    var FirstName = readline();
    console.log("Last Name: ");
    var LastName = readline();
    console.log("Phone number(no spaces, hyphens or parenthese): ");
    var Phone = readline();
    console.log("Street address: ");
    var StreetAddress = readline();
    console.log("City: ");
    var City = readline();
    console.log("State: ");
    var State = readline();
    console.log("Zipcode: ");
    var Zip = readline();

    connection.execute(
      'Insert INTO USER_ACCOUNT (id, Email, FirstName, LastName, Phone, StreetAddress, City, State, Zip) Values (NULL, ?, ?, ?, ?, ?, ?, ?, ?)',
      [Email, FirstName, LastName, Phone, StreetAddress, City, State, Zip],
      function(err, results) {
        console.log(results);
      }
    );
    
    console.log("would you like to continue? (Y or N");
    contin = readline();
  }

  if (answer == 'UPDATE') {
    console.log("What variable would you like to access? case sensitive (id, Email, FirstName, LastName, Phone, StreetAddress, City, State, Zip)");
    var variable = readline();
    console.log("What will be the new content?");
    var content = readline();
    console.log("What is the first name of the person you are trying to update the info of?"); //i am using name instead is to find the instance bacuse the user would not know the id number redily
    var firstname = readline();
    console.log("What is the first name of the person you are trying to update the info of?");
    var lastname = readline();
    connection.execute(
      'UPDATE USER_ACCOUNT SET ?=? WHERE FirstName=? AND LastName=?',
      [variable, content, firstname, lastname],
      function(err, results) {
        console.log(results);
    
      }
    );
    
    console.log("would you like to continue? (Y or N");
    contin = readline();
  }

  if (answer == 'DELETE') {
    console.log("Enter the id for the person you are trying to DELETE. If you do not know the id, enter 'no' and then when promted perform a select statement.)
    connection.execute(
      'DELETE FROM USER_ACCOUNT WHERE id = ?;',
      [id],
      function(err, results) {
        console.log(results);
    
      }
    );
    
    console.log("would you like to continue? (Y or N");
    contin = readline();
  }

  else {
    console.log("you cannot follow instructions so goodbye! (if you would like to follow instructions run the program again");
  }
}