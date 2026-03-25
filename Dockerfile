ARG ARG_RUBY_VERSION
FROM ruby:${ARG_RUBY_VERSION}-slim

ARG ARG_LINUX_LOCALE ARG_BUNDLE_VERSION

RUN apt update && \
  apt upgrade -y && \
  apt install -y sudo locales-all && \
  apt autoremove --purge && \
  apt autoclean

ENV LC_ALL=$ARG_LINUX_LOCALE LANG=$ARG_LINUX_LOCALE LANGUAGE=$ARG_LINUX_LOCALE

RUN adduser --disabled-password --gecos "" --uid 1000 user && \
  usermod -aG sudo user && \
  passwd -d user && \
  echo 'user ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

USER user
WORKDIR /home/user

RUN gem install bundler:$ARG_BUNDLE_VERSION

RUN sudo apt install -y \
  g++ \
  make \
  cmake \
  dh-autoreconf \
  git-core \
  bash-completion

RUN ruby -v && \
  locale && \
  bundler -v
