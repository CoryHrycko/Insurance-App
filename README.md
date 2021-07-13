# Insurance-App

## Run me

1. Make in the root directory a folder called:  `mysql`
2. docker-compose up -d --build site       
3. docker-compose exec php php /var/www/html/artisan migrate 
4. docker-compose exec php php /var/www/html/artisan passport:install
5. docker-compose run --rm npm run dev  
6. docker-compose run --rm --service-ports npm run watch 
7. Navigate to http://localhost/
8. Enjoy

## How to enjoy.

1. Grab a Dr. Pepper Zero
2. Click on register link
3. register yourself
4. click on login link (I know it should have forwarded you. That is the Work in progress portion)
5. login
6. forwards you to the quote page
7. enter in all the information your heart desires.
8. Watch your sweet sweet all time low travel quote come in.

## Architecture

* Docker
* MySQL
* Redis
* Dockerized PHP with version lookup (Can't get it wrong because the ini file is located inside.)
* Laravel
* Laravel Passport (Yes we can easily switch to OAuth here if we really wanted to)
* React
* React Flux
* MailGun (For all the mail spamming.)

## To improve before launch

* Better error messaging for the front end.
* better forwarding on the register ignition.
* use a better library for alerts such as sweetalert2 
* Better spacing int he front. 
* More than just the basic UI template from matrials react