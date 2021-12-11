Change Log 0.2

Changes Made:
- In the home page, the css adjustments were made 

Fixes:
- Fixed bugs that wouldn't allow javascript to work as intended 

Things we still need to do:
- [ ] Implement ticket booking system
- [ ] Implement movie adding system
- [ ] adding, edit, and delete movies
- [ ] storage linking in order to access photos uploaded
- [ ] Style the website
- [ ] Add the appropriate tabs for each user type

Notes:
- If you want to see the past changes simply check the changelog.txt 
- Edit the README.md file on vscode and not on github so the commits wont get complicated (learned that the hard way)

How to test and run our application:
- git clone our url
- head to folder location via cmd
- composer install
- npm install
- configure .env using .env.example
- use php artisan key:generate to get app key
- rename .env.example to .env
- turn on xammp and turn on the stuff
- if database has not been set up create a database called zamoviewarudo
- run php artisan migrate
- npm run dev or npm run watch
- php artisan serve
    
