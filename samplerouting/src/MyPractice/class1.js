
const class1 = () => {

    return(
    <>
      <h1>My Favorite Fruits</h1>
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
        <li>Grapes</li>
        <li>Strawberry</li>
    </ul>
    <h1>Steps to Make a Sandwich</h1>
    <ol>
        <li>Get two slices of bread.</li>
        <li>Spread mayonnaise on one slice.</li>
        <li>Add lettuce, tomatoes, and cheese on the other slice.</li>
        <li>Put the two slices together.</li>
        <li>Cut the sandwich in half, if desired.</li>
        <li>Serve and enjoy!</li>
    </ol>
    
    <h1>Responsive Image with srcset</h1>
    <img
        src="public\logo192.png"
        srcset="public\logo192.png 400w, medium-image.jpg 800w, large-image.jpg 1200w"
        alt="Responsive Image"
    />
    
    {/* he <img> element is used to display an image.
The src attribute specifies the default image source (small-image.jpg in this case).
The srcset attribute specifies a list of image sources separated by commas.
Each image source in the srcset is followed by a descriptor, in this case, 400w, 800w, and 1200w. These descriptors represent the image's width in pixels. The browser uses this information to determine which image to load based on the user's screen width.
The alt attribute provides alternative text for the image, which is important for accessibility.
In this example, the browser will select the appropriate image based on the user's screen width. For example:

If the screen width is less than or equal to 400 pixels, it will load small-image.jpg.
If the screen width is between 401 and 800 pixels, it will load medium-image.jpg.
If the screen width is greater than 800 pixels, it will load large-image.jpg. */}
    </>
    
    );
    
    };
    export default class1;