init: docker-down-clear docker-build-pull docker-up
down: docker-down-clear

docker-up:
	docker-compose up

docker-down-clear:
	docker-compose down -v --remove-orphans

docker-build-pull:
	docker-compose build --pull

install:
	docker-compose run --rm php-cli composer install

init-prod:
	docker-compose -f docker-compose-production.yml up --build -d --remove-orphans

down-prod:
	docker-compose -f docker-compose-production.yml down -v --remove-orphans