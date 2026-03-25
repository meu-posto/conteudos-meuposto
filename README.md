# conteudos-meuposto

=======

# conteudos-meu-posto

run

```
$ bundle install
$ bundle exec jekyll serve
```

### Developement with Docker and Docker Compose

- Image documentation: https://hub.docker.com/r/juniormesquitadandao/ubuntu-on-rails
- Install Docker: https://docs.docker.com/get-docker
- Install Docker Compose: https://docs.docker.com/compose/install
- Build one time

```bash
cd conteudos-meu-posto
docker-compose build
docker rm -f $(docker ps -aq)
docker rmi -f $(docker images | grep none)
docker ps -a
docker images
```

- Always start

```bash
cd conteudos-meu-posto
docker-compose up -d
docker-compose exec app bash
bundle
jekyll serve
exit
docker-compose down
```
