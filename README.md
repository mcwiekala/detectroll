<h2 align="center">detecTroll</h2>

## Project Overview

detecTroll was created to educate about culture on the Internet and to identify people who spread disinformation and toxicity (trolls)

![alt text](./docs/detectroll.png)

![alt text](./docs/detectroll2.png)
<p align="center">
     <img src="./docs/detectroll3.png">
</p>


## Tech

### Perspective API

DetecTroll uses machine learning from Perspective API to gauge message content by 4 attributes: insult, profanity, threat and toxicity in scale from 0 to 1

DetecTroll counts these data into troll score measured as a percentage

### Twitter API

App uses Twitter API to get user by username and 3 lat user tweets by their ID.



## Troll attributes

insult - Insulting, inflammatory, or negative comment towards a person or a group of people.

profanity - Swear words, curse words, or other obscene or profane language.

threat - Describes an intention to inflict pain, injury, or violence against an individual or group.

toxicity - A rude, disrespectful, or unreasonable comment that is likely to make people leave a discussion.


## Installation

```bash

git clone https://github.com/mcwiekala/detectroll.git

npm install

npm run start:dev

```

## Live 

http://detectroll.herokuapp.com/
