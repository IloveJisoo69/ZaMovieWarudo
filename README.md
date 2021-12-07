Change Log 0.1 !

Changed many file structures
    - In js/screens, those are the screens that are used to display in the blade files
    - The components folder is where most of our react files will be
    - The api folder is where we will store our api implmentations
    - (Tentative) Maybe a routes folder that contains all our route files
    - Added two blade files namely: adminDashboard and userDashboard
    - created a new css folder and placed the css file there

Implmented user type verification:
    - There are two user types: user and admin
    - user cannot enter admin pages and vice versa
    - there is a guest home page (welcome.blade) where it will just display the movies and that is where the user is able to login and register
    - if the user tries to enter an admin page, the user is disconnected and sent back to the guest home page
    - edited kernel.php, added UserType.php middleware 
    
Edits made:
    - edited the blade files to extend layouts.app that way we can implement the login and register and be able to safetly logout
    - added the admin and user dashboard routes to web.php
    - removed logo and moved it on the top navbar
    - added 
    - edited login and register controllers
    
    
    
How to test and run our application:
    - git clone our url
    - npm install
    - turn on xammp and turn on the stuff
    - npm run dev or npm run watch
    - php artisan serve
    

    
