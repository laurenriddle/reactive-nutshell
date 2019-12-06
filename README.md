# Reactive Nutshell: The Information Application
```
 ________   ___  ___  _________  ________  ___  ___  _______   ___       ___          
|\   ___  \|\  \|\  \|\___   ___\\   ____\|\  \|\  \|\  ___ \ |\  \     |\  \         
\ \  \\ \  \ \  \\\  \|___ \  \_\ \  \___|\ \  \\\  \ \   __/|\ \  \    \ \  \        
 \ \  \\ \  \ \  \\\  \   \ \  \ \ \_____  \ \   __  \ \  \_|/_\ \  \    \ \  \       
  \ \  \\ \  \ \  \\\  \   \ \  \ \|____|\  \ \  \ \  \ \  \_|\ \ \  \____\ \  \____  
   \ \__\\ \__\ \_______\   \ \__\  ____\_\  \ \__\ \__\ \_______\ \_______\ \_______\
    \|__| \|__|\|_______|    \|__| |\_________\|__|\|__|\|_______|\|_______|\|_______|
                                   \|_________|                                       
                                                                                      
                                                                                      
```
## What is Reactive Nutshell?

Nutshell is an app for people to use to organize their daily tasks, events, news article, friends, and chat messages.

This multi-user app utilizes React library with Bootstrap and JSON-server.

Users should login or register if they have not previously logged in.

There are 5 features:
Friends - users can add other users as friends.
Messages - users can view all user messages and create, edit and delete their own messages.
Tasks - users can view, create, edit and delete their tasks and the checkbox will remove it from display.
Events - users can view their own events and their friends events; and are able to create, edit and delete their own events.
Articles - users can view their own articles and their friends articles; and are able to create, edit and delete their own articles.

User should log out once they are done.

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. In the `api` directory, create a copy of the `database.json.example` and remove the .example extension.
1. Run `npm install` and wait for all dependencies to be installed
1. Run `npm start` to verify that installation was successful.

## ERD

![nutshell ERD](./assets/nutshell-erd.png)

Enjoy!
