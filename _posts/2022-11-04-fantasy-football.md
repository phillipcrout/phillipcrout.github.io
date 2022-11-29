---
title: "Have I been (statistically signficiantly) unlucky in my Fantasy Football League this year?"
layout: post
mathjax: true
---

A number of years ago, I joined an (American) Fantasy Football League. It's in a format that means you roll players on year to year, and after a couple of fallow seasons I 
felt, coming into 2022 like I had rebuilt the side. I've scored fairly well, but I'm currently sitting 4-8 (4 wins to 8 defeats) and looking at missing the playoffs again.
I'm currently sitting 7th (with 1701 points so far this year) while my playoff spot is occupied by a team with a 6-6 record and only 1501 points on the season. This state of affairs is made possible by the fact that rankings are assigned as week to week wins and losses and not total points. So the question is how likely is it that my point 
total would get me into the playoffs?


To illustrate the problem at bit more clearly, I've plotted the 10 league participants points totals against their number of wins. You can clearly see that I've come away with fewer wins than you might expect given my points total.


Approach one is a crude analytical solution. Each week of the fantasy football season 10 teams each get a score. This means that you are playing one of the 9 possible other scores. If you have the best score in the league, you'll win. If you have the second best score, you win on $$\frac{8}{9}$$ of occasions and so on. This then becomes something very close to a binomial picking problem. Now, in the interest of simplicity (and to give us an interesting baseline to compare against next time) we're going to neglect some quirks of playing actual fantasy football (in the first 9 weeks you play each team exactly once for example) and assume that 6 wins would be sufficent to make the playoffs (this may not actually be the case, as changing the schedule will change who wins which games). This means that we can save the simulations for another time.

The simplest calculation to perform is to figure out how likely it was I would have won every game, which is given by:

$$\prod_{i} \frac{n_{i}}{9}$$

where $$ n_{i} $$ is my ranking in a given week $$r = ()$$, which comes to . You can extend this to solve the other win number cases, for example the probability of
getting exactly eleven wins from twelve games is:

$$\sum_{i} \prod{n_{i}}{9}$$

which follows from an elementary understanding of the rules of addition and summation of independent probabilities. However, exploiting the fact that these are binomial
distribution makes this a lot simpler. Specifically, we use the fact that the sum of binomial variables with variable success rates (ranks) comes out to the mean result:


$$ \mathcal{B}(n,X) + \mathcal{B}(m,Y) = \mathcal{B}(n+m,\frac{X+Y}{2})  $$

so we are looking for the distribution $$ \mathcal{B}(n=12,p=\bar{r}) $$ where $$ \bar{r} $$ is our average ranking ($$=$$). This is very quick to code up and histogram in Python, and gives us our first answer - under this crude model I make the playoffs in xx% of seasons. Next time I'll investigate if this number changes much as we drop some of assumptions (broadly allowing for strength of schedule and the variable barrier for entry to the playoffs), but for now I'm confident in feeling a little hard done by.