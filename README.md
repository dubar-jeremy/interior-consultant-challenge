<!-- Please update value in the {}  -->

<h1 align="center">Interior consultant challenge</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://dubar-jeremy.github.io/interior-consultant-challenge/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/dubar-jeremy/interior-consultant-challenge">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/Jymh2b2FyebRTUljkNcb">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)

<!-- OVERVIEW -->

## Overview

![screenshot](https://github.com/dubar-jeremy/interior-consultant-challenge/blob/main/mobile.png)
![screenshot](https://github.com/dubar-jeremy/interior-consultant-challenge/blob/main/mobile2.png)
![screenshot](https://github.com/dubar-jeremy/interior-consultant-challenge/blob/main/desktop.png)

L'objectif de ce projet était principalement d'apréhender javascript pour la première fois.
J'ai donc décidé d'utiliser ce langage pour créer un menu "hamburger" avec une animation.

Le design n'est (volontairement) pas 100% responsive. Il a été développé pour des écrans :
* 414 * 736 (>iphone 6)
* 1440 * 1024

Je me suis donc confronter à un problème : Il est "impossible" de faire une animation à partir d'un "display: none;".

Deux solutions s'offraient donc à moi :
* Cacher mon menu avec les propriétés css opacity et hidden
* Trouver une alternative. [disponible ici](https://www.impressivewebs.com/animate-display-block-none/).


J'ai opté pour l'alternative pour le plaisir d'essayer quelque chose de peu commun. 
De plus cacher un élément ne le supprime pas du flux et donc il m'aurait été obligé de supprimer chacun des lien lorque l'utilisateur clique sur le menu afin de n'avoir aucune zone cliquable.

### Built With


- [HTML](https://developer.mozilla.org/fr/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/fr/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript)