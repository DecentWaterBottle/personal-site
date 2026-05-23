---
title: "Automated Decrypter for Traditional Substitution Ciphers"
description: "Bachelor Thesis work, the purpose of which was to develop an algorithm to automatically decrypt monoalphabetic substitution ciphers."
type: academic
tags: ["codes", "monoalphabetic", "hill-climbing algorithm"]
link: "https://github.com/DecentWaterBottle/primitive-cipher-decrypter"
order: 3
---

This project is the culmination of my years of education at Munster Technological University, and served as the subject of my final year project. The purpose of this project was to develop an algorithm to automatically decrypt monoalphabetic substitution ciphers. The project was split into two main sections. The first phase was the exploratory and algorithm-development phase, which involved testing and experimenting with different algorithms and variations of said algorithms to find the most optimal solution. The second phase involved taking the resulting algorithm and implementing it into a web application using Flask.

## How it works
This project provides an effective solution for decrypting traditional substitution ciphers by using a combination of the hill-climbing algorithm and bigrams/quadgrams.

The project is broken into two distinct sections:
- Algorithm
- Web Application

The former focuses on the creation and testing of the decryption algorithm. The latter implements the resulting algorithm into a web application.

By using the hill-climbing algorithm, we iteratively search for the most likely decryption key by choosing a random starting key and making small changes to improve its fitness over time. Both bigrams and quadgrams can be used to assess the keys fitness. A new random key is picked 20 times, and each key is iteratively improved 2000 times. The key providing the highest fitness score is chosen as the most likely contender to be the correct key.

![Algorithm Comparison](/images/algorithm-accuracy.png)

## Stack
Python, Flask, Javascript, TailwindCSS