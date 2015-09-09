// Create outer part of iPhone from image on file.
var iPhone = new Layer({
  x: 0,
  y: 0,
  width: 870,
  height: 1738,
  image: "images/iphone-6-silver.png"
})

// Create the screen of the iPhone. 
var iPhoneScreen = new Layer({
  x: 54,
  y: 197,
  width: 762,
  height: 1346,
  backgroundColor: "black"
})

// Create a new layer and have it inherit from iPhoneScreen
// This allows you to set coordinates with respect
// to the screen of the phone, and not globally
var blob = new Layer({
  superLayer: iPhoneScreen, 
  x: 0,
  y: 0
})

