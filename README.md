# html5-canvas-practice
## General
|Method Name & Syntax|Usage|
|--------------------|-----|
|getContext()|Getting context of a canvas|

## Image
|Method Name & Syntax|Usage|
|--------------------|-----|
|`drawImage(image,x,y,width,height)`|Addding image to canvas. [called inside onload method of image]|

## Shapes
|Method Name & Syntax|Usage|
|--------------------|-----|
|`strokeRect(x,y,width,height)`|Create a rectangle with outline|
|`fillRect(x,y,width,height)`|Create a rectangle with fill|
|`beginPath()`|Start a polygon's path|
|`moveTo(x,y)`|Moves the pointer to the specified point|
|`lineTo(x,y)`|Forms a path from current point to the specified point|
|`fill()`|Polygon with Fill [used at the end]|
|`stroke()`|Polygon with Stroke [used at the end]|

## Color
|Method Name & Syntax|Usage|
|--------------------|-----|
|`fillStyle="<color_name>"`|Sets the fill color for a shape|
|`strokeStyle="<color_name>"`|Sets the stroke color for a shape|

## Tranformations
|Method Name & Syntax|Usage|
|--------------------|-----|
|`scale(x,y)`|Multiplies the X and Y values|
|`translate(x,y)`|Moves the X and Y axis|
|`rotate(angleRadians)`|Rotates an object|

## Text
|Method Name & Syntax|Usage|
|--------------------|-----|
|`font="<size><font_face>"`|Sets the font face and font size|
|`lineWidth = <width>`|Sets the font's stroke's width|
|`strokeText(<string>,x,y)`|Draws a string [with stroke color]|
|`fillText(<string>,x,y)`|Draws a string [with fill color]|

## Miscellaneous
|Method Name & Syntax|Usage|
|--------------------|-----|
|`save()`|Saves the current state of the canvas|
|`restore()`|Restores the last stored state of canvas|
