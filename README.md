# OpenLens Augmented Reality

**OpenLens** is an augmented reality platform built for the web, using AR.js, Three.js, a-frame, and React that enables geo-objects, as well as marker based AR for any data -- text, pictures, audio, 360 video portals, you name it. 

The idea is to create an open platform to render data from people, events, and local business into an interactive world where you can share your experiences and create new memories in ways yet to be imagined!


## Lenses

Each data set is a "Lens" that you can add "Points" to. A Point is a piece of data that contains either lat/long coordinates or a marker model (think QR code) attached to media such as text, image, video, etc. 

Users can toggle between Lenses to filter what types of data they want to see, such as local events highlighted by columns of light, historical markers for augmented tours, parks and recreation in the area, as well as being able to point your phone at a restaurant to see its reviews before you go in. Memories with your pup at the park can be stored there to come back to, or shared with others that go there too.  

For geo-objects, the system will render Three.js spheres (by default) where the lat/long is in the world compared to the users location and rotation vectors, Pokémon Go style.

For markers, one can generate a QR-code like image to print onto a sticker or piece of paper that acts as the plane to render a Three.js model onto. This allows you to render portals, walls of text, images, video game characters, and any other 3D model one can imagine. 


## AR and 2D modes

Users can easily switch to a 2D map view to browse the data around them without using the camera as well, and plot out a trip or a tour of a new area based on their desired Lenses.


## Potential use cases

Here are some interesting ways OpenLens can be used:

* Local Events
* Business reviews
* Augmented Tours
* Gamified everything!
* "Dead Drops"
* Explore local parks, leave digital memories to come back to at your favorite trails
* Identify and research historic landmarks
* "Comment" walls on buildings
* AR Graffiti

The list goes on. You can render any 3D model, image, video, etc into OpenLens with ease! Businesses and other entities can access a dashboard to bulk manage Lenses and potentially create "coupon hunts" and other gamified activities to engage the public.
