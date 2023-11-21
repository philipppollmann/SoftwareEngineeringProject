FROM ubuntu:latest
LABEL authors="philipp"

ENTRYPOINT ["top", "-b"]