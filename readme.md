**Laravel and Angularjs application with Grunt task runner**
This application uses angularjs as frontend and laravel as backend.The request between front-end and backend is donw with rest calls.It also uses bootstrap for css and Grunt as task runner.When this application loads in the browser it uses minified  main.js and app.css from dist folder.

**To use this application**
- Dowload it.
- composer update, to update the laravel.
- Make database config chenges in the app/config/database.php .
- php artisan migrate to migrate the database.
- *cd public* directory then Install the grunt dependencies with *npm install* for Grunt.
- grunt php and open ur browser localhost:5000
- Happy Coding :)
