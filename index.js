/*
CREATE TABLE USER_ACCOUNT (
	id INT UNSIGNED NOT NULL auto_increment,
	Email VARCHAR(400) UNIQUE NOT NULL,
	FirstName VARCHAR(20) NOT NULL,
	LastName VARCHAR(30) NOT NULL,
	Phone VARCHAR(15),
	StreetAddress  VARCHAR(60),
	City VARCHAR(40),
	State VARCHAR(2),
	Zip VARCHAR(5),
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
    console.log("Here is you Select statements results: ")
    connection.execute(
      'SELECT * FROM `table` WHERE `FirstName` = ? AND `LastName` = ?',
      [fname, lname],
      function(err, results) {
        console.log(results);
    
      }
    );

    console.log("would you like to continue? (Y or N");
    contin = readline();
  }

  if (answer == 'CREATE') {

    connection.execute(
      'insert INTO USER_ACCOUNTS (id, Email, FirstName, LastName, ',
      [name, age],
      function(err, results) {
        console.log(results);
    
      }
    );
    
    console.log("would you like to continue? (Y or N");
    contin = readline();
  }

  if (answer == 'UPDATE') {

    connection.execute(
      'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
      [name, age],
      function(err, results) {
        console.log(results);
    
      }
    );
    
    console.log("would you like to continue? (Y or N");
    contin = readline();
  }

  if (answer == 'DELETE') {

    connection.execute(
      'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
      [name, age],
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