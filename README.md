# Throb (2019) - Installation

## Setting:
The project is run in such an environment: 
- Raspiberry PI 4 with node installed 
- ESPON Dot-Matrix Printer LQ350 (24 PIN) 

## How it works:
- A browser runs the index.html, showing the rotating throbber in black background 
- It will display the throbber's stroke randomly and statically
- Pick one and then display in red, rotating clockwise by using the 4 strokes
- Set a 'timer' to save a snapshot of the screen for printing (generate the image in the Download folder)
- Need to run the node application to detect if any new images are generated then it will send intruction to a printer 
- The EPSON printer will print out the snapshot of the generated image

# Throb (2018) - Screensaver on Mac

![image1](https://github.com/siusoon/Throb/blob/master/throbbering1.gif)

<img src ="https://github.com/siusoon/Throb/blob/master/screensaver.png" width="600px">

![image2](https://github.com/siusoon/Throb/blob/master/mac.gif)

# Throb
A screen saver about Throbber and (generative) throbbing 
- Mac only (tested on 10.12.6).
- Built in p5.js
- Work by Winnie Soon

Related project: [The Spinning Wheel of Life](http://siusoon.net/?p=7)

Related text: [Executing Micro-temporality](https://www.academia.edu/32663026/Executing_Micro-temporalities)

# How to install on your mac
1. Dowload the repository [here](https://github.com/siusoon/Throb) by clicking the clone/download green button 
<img src ="https://github.com/siusoon/Throb/blob/master/download.png" width="400px"> 

2. Unzip the file and double click the file "p5.js-screen-saver.saver"
<img src ="https://github.com/siusoon/Throb/blob/master/click.png" width="300px">

3. In the system preference: choose screensaver, choose Throb > click preview. (select your screensaver time)
<img src ="https://github.com/siusoon/Throb/blob/master/scrensaver1.png" width="500px"> 

# Credit
https://github.com/mactkg/p5.js-screen-saver by @mactkg

# Licience
CC BY 4.0

# Log
- ver 1 (9 Mar 2018)
