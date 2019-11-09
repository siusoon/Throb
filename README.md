# Throb (2019) - Installation

## Setting:
The project is run in such an environment: 
- Raspiberry PI 4 with node installed and Firefox ESR (as it works well for full screen without the menu bar + auto download file in the default download folder)
- Raspiberry PI setting to off the screensaver and blank screen.
- ESPON Dot-Matrix Printer LQ350 (24 PIN): the printer driver can be installed via CUPS `sudo apt-get install cups`
- nodejs with the following modules: npm, sleep, hound, opn

## How it works:
- type `node path/Throb_print(print).js`
- The terminal will then start the web server and listen to the directory of 'Downloads' (checking if any new generated images). Then it will trigger the firefox -ESR browser to run the Throb.js. (For exhibition purpose: full screen and refresh)

## Logic:
- A browser runs the index.html, showing the rotating throbber in black background 
- It will display the throbber's stroke randomly and statically
- Pick one and then display in red, rotating clockwise by using the 4 strokes
- Set a 'timer' to save a snapshot of the screen for printing (generate the image in the "Downloads" folder)
- The EPSON printer will print out the snapshot of the generated image (need to set the default resolution and server default via `localhost:631`

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
