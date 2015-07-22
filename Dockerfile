FROM node

MAINTAINER hello@bluecap.se

WORKDIR /yarr

COPY . ./

RUN make setup

EXPOSE  8080

CMD ["yarr"]
