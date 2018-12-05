<h1>gitSearchHub</h1>
<h3>Made it with Laravel and React</h3>
<p>Using <a href=''>KnpLabs</a> github api<br></p>

Requeriments:
- PHP
- Composer
- Npm

Clone the repositorie and run <code>composer install</code>, maybe you also have to run <code>composer update</code><br>
Run <code>php artisan preset react</code> and then <code>npm install</code><br>
Include a <code>.env</code> file, with the next format (same as the default in a new laravel project):
<br>
<br>
APP_NAME=Laravel<br>
APP_ENV=local<br>
APP_KEY=base64:fP6akxeXgCwKq43m/L+mcdjLuNvLgLQWhfwQ+640hLs=<br>
APP_DEBUG=true<br>
APP_URL=http://localhost<br>
<br>
<br>
Note: the app also search local repositories in a <code>localRepos</code> folder. If you don't make the folder, is going to be created the first time you hit the api. Then you can create local repos inside

