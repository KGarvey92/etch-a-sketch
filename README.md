# Etch-a-Sketch

## What is this app?
This simple etch-a-sketch app allows you to draw by hovering over the grid with your mouse. You can select the size of the individual squares, change colour and even use a randomised effect on each square!

## What were the biggest challenges?

### Revisiting CSS
I had been mainly focused on learning and experimenting with javascript recently, so my CSS skills and knowledge had gotten a little rusty.

It took me some time to figure out how to get everything to line up on the page how I wanted it with flexbox and how to make it responsive for different resolutions.

### Working with event listeners
This was my first time using event listners in my own project. My understanding of events and arrow functions is still developing, but with some helpful examples on the mdn docs I was able to configure them how I wanted without too much difficulty in the end.

### How to change a css class dynamically
My app was set up in such a way that each grid square div had an event listener attached that would add a class to the div when moused over which would change the colour. 

I then faced the problem of how to change a css class property through javascript. After some digging around I came across the wonderful power of CSS custom properties (variables) and implemented a solution.

## What skills and knowledge did I gain in making it?

### Media queries
This was my first time using media queries and testing my site against a multitude of different resolutions and devices through chrome's dev tools.

### CSS variables
As mentioned above, discovering and experimenting with CSS variables was a lightbulb moment for me and I'm sure will prove hugely useful in the future.

### Flexbox and grid
I brushed up on my flexbox capabilties and also got some practice of implementing a grid using cssgrid.

### Event listeners
I now know how to make my webpages more dynamic through the use of event listeners. There are still many events I haven't began to explore, but I feel comfortable working with click and mouseover events.