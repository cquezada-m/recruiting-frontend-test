DEV_PROJECT = bemmbo

# DEVELOPMENT
dev-build:
	docker-compose --project-name=$(DEV_PROJECT) build
dev-up:
	docker-compose --project-name=$(DEV_PROJECT) up -d --no-deps
dev-down:
	docker-compose --project-name=$(DEV_PROJECT) down
dev:
	make dev-build && make dev-down && make dev-up
console:
	docker-compose --project-name=$(DEV_PROJECT) exec app sh