# BarFinderApp

This will be the repository for the application.

## Dependencies for installation

1. Some version of Linux (preferably an ubuntu flavor)
2. Ruby 2.3.1
3. Rails 5.0
4. Android Studio
5. JDK8
6. React Native CLI
7. Git

Install instructions. 
```
sudo apt install git

git clone https://github.com/rbenv/rbenv.git ~/.rbenv

echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc

echo 'eval "$(rbenv init -)"' >> ~/.bashrc

exec $SHELL

# setup git profile

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev

rbenv install 2.3.1

rbenv global 2.3.1

ruby -v # to verify that it is working

sudo apt install nodejs

gem install rails -v 5

rails new test # to test rails

sudo apt install npm

sudo apt install openjdk-8-jdk-headless

sudo npm install -g react-native-cli

# download android studio from https://developer.android.com/studio/install.html

export ANDROID_HOME=~/Android/Sdk

export PATH=${PATH}:${ANDROID_HOME}/tools

android avd # to setup virtual device

react-native init AwesomeProject # to test react

cd AwesomeProject 

react-native run-android # to run 
```
