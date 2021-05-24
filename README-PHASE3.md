# CCAPDEV Machine Project: Web Application
## Concept:
The concept is about a platform that provides an online marketplace that allows the users to buy and sell anything, as long as it is legal, that ranges from brand new items to used items.
## Instruction to run and view the built website:
### Set up locally
1. Clone the repository: `git clone https://github.com/kether82/site---MP`
2. Make sure to install `Node.js` and `MongoDB`
3. Run `npm install` in your cmd
4. Run `node add_data.js` to initialize and add dummy data to the database.
5. After adding the data, you can now start the application via `node index.js`
### Access through web
1. Access the website through this link: https://apdev-navi-market.herokuapp.com/  
**NOTE: Loading may take a while sometimes, but afterwards you should be able to access the website.**

## Features:
* Home Page
  * Serves as the very main page of the site, as well as the landing page.
  * Top selling items are automatically displayed here. 
  * The visitors are not required to be users in order to view the listed items. 
* Profile
  * This is where the user can view his/her own profile.
* Chat (Discontinued - not connected to database)
  * This is where the user can contact the user.
  * Page where you can view your contacts, and as well as chatting.
* Register
  * Buyers/Sellers must first create an account in order to do transactions, here the user must enter their full name,username ,password , and contact number.
* Login
  * The user is prompted to enter their username and password. Upon a successful login, the user will be redirected to his profile page and will be allowed to use the features       that are only open to users.
* Accounts
  * Search Account
    * This feature allows the user to search a specific account.
  * View Account
    * This feature views the information of a user’s account.
  * Edit Account
    * This feature allows the user to update their account of the following personal details:
      * Full Name
      * Contact Number
      * Description
      * Password
      * User Image
  * Delete Account
    * This feature allows the users to permanently delete their own account.
* Logout
  * The user may log out of their account.
## User default data:
## Screenshots:
### Home Page
![Image of Home Page]()
### Profile Page
![Image of Profile Page]()
### Chat Page (Discontinued)
![Image of Chat Page](https://i.imgur.com/pQePXJr.png)
### Register Page
![Image of Register Page](https://i.imgur.com/58X0oSz.png)
### Login Page
![Image of Login Page](https://i.imgur.com/HzuPkeU.png)
### Accounts Page
![Image of Accounts Page]()
## Author(s):
* Ivan Lim
* Patrick Ong
* Kyle Chua
