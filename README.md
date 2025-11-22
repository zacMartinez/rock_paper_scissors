# rock_paper_scissors
A JavaScript console based rock-paper-scissors game created for the The Odin Project's Foundations course.

## Features
I included some features beyond the strict scope of the assignment. They include:

### Input Handling
The `getHumanInput` function takes a regular expression as a parameter that it use to check user input to make sure it matches. The regexp is generated dynamically from an array of string representing the items in play.

### Support for Extra 'Weapons'
The method for determining which item wins is based on an array of strings with an arbitrary length and some funky math with the `%` operator, so in theory you could have extra items.

I had help from [this article](https://medium.com/@jp.mfichtl/rock-paper-scissors-lizard-spock-or-why-math-is-awesome-for-coding-405dabe30f4) by Juan F. on Medium on modular arithmetic.
