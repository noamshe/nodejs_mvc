mysql -u root -e "DROP DATABASE users_tasks_db;"
mysql -u root -e "CREATE DATABASE users_tasks_db;"
./node_modules/.bin/db-migrate up --config conf/database.json -e development
