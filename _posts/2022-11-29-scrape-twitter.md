---
title: "Scraping my liked posts (including images!) off Twitter"
layout: post
---

A couple of weekends back, I got nervous that Twitter might collapse. This isn't a huge problem in the general sense, Twitter is one of many places I like to go on the
internet. However, for some time I've used the 'like tweet' button as a kind of notebook for useful information, cool websites, good books and similar, and I 
was rather keen to have a back up for this fount of interesting things. I started by downloading my data using the in-built functionality, which provides 
all your liked tweets, but crucially does not include the images (instead providing a link to the original tweet, which clearly isn't twitter collapse proof). This
renders tweets such as "I enjoyed this" with an image of a novel completely useless.


Fortunately, Twitter was still providing a working API at this point, so I pulled down all my liked tweets from that. I ended up adapting twitters documented case to my own needs, as much of the existing publically avaliable code used the old v1 API. The information returned by the GET request is sufficient to 
form the URL of a given tweet (once you realise that 'www.twitter.com/username/tweet/tweetnumber' will accept a users id in place of the username) meaning a scrape can be run fairly easily. This meant that I got to use use selenium for the first time in over five years. It wasn't a smooth ride, but I was eventually able to point an automated browser at each of my liked tweets and take a full page screenshot. Hardly a perfect solution, but I do now have a screenshot of every single one of my liked tweets on a hard drive. You can see the source code [here](https://github.com/pc494/smlt).