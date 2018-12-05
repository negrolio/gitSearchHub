<h1>gitSearchHub</h1>
<h3>Developed with Laravel and React</h3>
<p>Using <a href='https://github.com/KnpLabs/php-github-api'>KnpLabs</a> github api<br></p>

Requeriments:
- PHP
- Composer
- Npm

Clone the repository and run <code>composer install</code>, or maybe <code>composer update</code><br>
Rename <code>.env.example</code> file to <code>.env</code><br>
Run <code>php artisan key:generate</code><br>
Run <code>php artisan preset react</code> and then <code>npm install && npm run dev</code><br>
Modify line 16 in file "/resources/js/app.js". Change <code>require('./components/Example)</code> to <code>require('./components/App)</code><br>
In other terminal run <code>npm run watch</code>
<br>
Run <code>php artisan serve</code> open the browser and go to localhost:8000
<br>
<br>
Note: the app also search local repositories in a <code>localRepos</code> folder. If you don't make the folder, is going to be created the first time you hit the api. Then you have to create a folder inside and initialize it as a repo

