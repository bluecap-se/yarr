FROM node:0.12

MAINTAINER bluceap

WORKDIR /yarr
COPY . /yarr
RUN make setup

COPY docker-entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE  8080

CMD ["serve"]
