---
title: "How I cracked substitution ciphers with hill climbing"
date: 2026-05-22
description:
---
![Gandalf with the Money](/images/gandalf_with_the_money.jpg)

The idea came as I was reading The Code Book by Simon Singh, which explores the history of codes and cryptography, and their evolution throughout. Inspired by pioneers like Alan Turing, one of the greatest minds of the 20th century, I decided to explore eactky how the advent of modern computing, (which Turing himself is partially responsible for) would affect the decryption of primitive ciphers. 

Here we explore the features of substition ciphers, specifically Mono-alphabetic substition ciphers. Transposition ciphers also exist, which maintain the letters but scramble the order in which they appear. A subsitution cipher does the opposite. 

## Mono-Alphabetic vs Poly-Alphabetic
There exists two main types of primitive substition cipher. A mono-alphabetic cipher swaps one letter directly for another letter and maintains this swap throughout the message. An R will always mean E, regardless of where it appears in the message. One of the most famous examples of this is the Caesar cipher, where the order of the alphabet is shifted one letter to the right or left. Given there are only 26 possible keys, this cipher is very easily brute-forced in a matter of minutes with nothing more than pen and paper. It serves as a way to obfuscate the message if one were to glance at it, but offers no real protection. 
There is of course nothing stopping one from simply rearranging the order of letters at will, however the arrangement will have to somehow be communicated with the intended recipient for them to decode it. Other mono-alphabetic ciphers include the Affine cipher, which uses 2 numbers and a mathematical formula to encrypt the message by turning the characters into their numerical counterpart. (a * x + b)*mod*26 where a and b are the keys and x is the numerical value of the letter. This provides a total of 12 x 36 = 312 possible keys. An improvement, but still crackable, especially with the use of frequency analysis. 

Poly-alphabetic ciphers are considerably harder to crack. Polyalphabetic ciphers break the rules of monoalphabetic ciphers by allowing the same letter to be encrypted as different letters throughout the text. An E may be encrypted as H in one place, and K in another. There are a plethora of different poly-alphabetic ciphers to choose from, some offering greater protection than others. This paper however, mainly focuses on monoalphabetic ciphers.


## So how do we break them?
One of the oldest and most primitive ways of decrypting a monoalphabetic cipher is by frequency analysis. The effectiveness of frequency analysis improves with the length of the text and its similarity to common language. 
Naturally in English, some letters appear more frequently than others. *E* being the most common, followed by *T* and then by *A*. Therefore if we look at the encrypted text and see that *R* is the most common letter, it would be a good guess to assume that the real letter is *E*. Is it fool-proof method? Definitely not, but it's a good place to start and with some trial and error and a bit of practice, can yield real results. After a while, patterns emerge. *THE* is the most common word in the English language, and so ifthe encrypted text contains *ZIT* in numerous places, one can assume that *Z I T* correspond to *T H E* respectively. With that, 3 letters are already cracked. 

### Hll-Climbing Algorithm

In Progress