
var tests = module.exports = {}


// PNG alpha transparency
// Semi-transparent areas in PNG files
tests['png-alpha'] = function( content, type ){}

// Animated PNG (APNG)
// Like animated GIFs, but allowing 24-bit colors and alpha transparency
tests['apng'] = function( content, type ){}

// Video element
// Method of playing videos on webpages (without requiring a plug-in)
tests['video'] = function( content, type ){}

// Audio element
// Method of playing sound on webpages (without requiring a plug-in)
tests['audio'] = function( content, type ){}

// contenteditable attribute (basic support)
// Method of making any HTML element editable
tests['contenteditable'] = function( content, type ){}

// Drag and Drop
// Method of easily dragging and dropping elements on a page, requiring minimal JavaScript.
tests['dragndrop'] = function( content, type ){}

// querySelector/querySelectorAll
// Method of accessing DOM elements using CSS selectors
tests['queryselector'] = function( content, type ){}

// getElementsByClassName
// Method of accessing DOM elements by class name
tests['getelementsbyclassname'] = function( content, type ){}

// HTML5 form features
// Expanded form options, including things like date pickers, sliders, validation, placeholders and multiple file uploads. Previously known as "Web forms 2.0".
tests['forms'] = function( content, type ){}

// New semantic elements
// HTML5 offers some new elements, primarily for semantic purposes. The elements include: section, article, aside, header, footer, nav, figure, figcaption, time, mark, main.
tests['html5semantic'] = function( content, type ){}

// Offline web applications
// Method of defining web page files to be cached using a cache manifest file, allowing them to work offline on subsequent visits to the page
tests['offline-apps'] = function( content, type ){}

// Web Workers
// Method of running scripts in the background, isolated from the web page
tests['webworkers'] = function( content, type ){}

// @font-face Web fonts
// Method of displaying fonts downloaded from websites
tests['fontface'] = function( content, type ){}

// EOT - Embedded OpenType fonts
// Type of font that can be derived from a regular font, allowing small files and legal use of high-quality fonts. Usage is restricted by the file being tied to the website
tests['eot'] = function( content, type ){}

// WOFF - Web Open Font Format
// Compressed TrueType/OpenType font that contains information about the font's source.
tests['woff'] = function( content, type ){}

// CSS3 Multiple backgrounds
// Method of using multiple images as a background
tests['multibackgrounds'] = function( content, type ){}

// CSS3 Border images
// Method of using images for borders
tests['border-image'] = function( content, type ){}

// CSS3 Background-image options
// New properties to affect background images, including background-clip, background-origin and background-size
tests['background-img-opts'] = function( content, type ){}

// CSS Table display
// Method of displaying elements as tables, rows, and cells
tests['css-table'] = function( content, type ){}

// CSS Generated content
// Method of displaying text or images before or after the given element's contents using the :before and :after pseudo-elements
tests['css-gencontent'] = function( content, type ){}

// CSS position:fixed
// Method of keeping an element in a fixed location regardless of scroll position
tests['css-fixed'] = function( content, type ){}

// Hashchange event
// Event triggered in JavaScript when the URL's hash has changed (for example: page.html#foo to page.html#bar) 
tests['hashchange'] = function( content, type ){}

// CSS 2.1 selectors
// Allows more accurate element selecting, using >, +, [attr], :first-child, etc.
tests['css-sel2'] = function( content, type ){}

// CSS3 selectors
// Advanced element selection using selectors like :nth-child(), :last-child, :first-of-type, etc.
tests['css-sel3'] = function( content, type ){}

// CSS3 Text-shadow
// Method of applying one or more shadow or blur effects to text
tests['css-textshadow'] = function( content, type ){}

// CSS3 Box-shadow
// Method of displaying an inner or outer shadow effect to elements
tests['css-boxshadow'] = function( content, type ){}

// CSS3 Colors
// Method of describing colors using Hue, Saturation and Lightness (hsl()) rather than just RGB, as well as allowing alpha-transparency with rgba() and hsla().
tests['css3-colors'] = function( content, type ){}

// CSS3 Box-sizing
// Method of specifying whether or not an element's borders and padding should be included in size units
tests['css3-boxsizing'] = function( content, type ){}

// CSS3 Media Queries
// Method of applying styles based on media information. Includes things like page and device dimensions
tests['css-mediaqueries'] = function( content, type ){}

// CSS3 Multiple column layout
// Method of flowing information in multiple columns
tests['multicolumn'] = function( content, type ){}

// CSS3 Border-radius (rounded corners)
// Method of making the border corners round
tests['border-radius'] = function( content, type ){}

// CSS3 Transforms
// Method of transforming an element including rotating, scaling, etc.
tests['transforms2d'] = function( content, type ){}

// ECMAScript 5 Strict Mode
// Method of placing code in a "strict" operating context.
tests['use-strict'] = function( content, type ){}

// CSS3 3D Transforms
// Method of transforming an element in the third dimension
tests['transforms3d'] = function( content, type ){}

// Shared Web Workers
// Method of allowing multiple scripts to communicate with a single web worker.
tests['sharedworkers'] = function( content, type ){}

// CSS Hyphenation
// Method of controlling when words at the end of lines should be hyphenated using the "hyphens" property.
tests['css-hyphens'] = function( content, type ){}

// CSS3 Transitions
// Simple method of animating certain properties of an element
tests['css-transitions'] = function( content, type ){}

// Font feature settings
// Method of applying advanced typographic and language-specific font features to supported OpenType fonts.
tests['font-feature'] = function( content, type ){}

// CSS3 Animation
// Complex method of animating certain properties of an element
tests['css-animation'] = function( content, type ){}

// CSS Gradients
// Method of defining a linear or radial color gradient as a CSS image.
tests['css-gradients'] = function( content, type ){}

// CSS Canvas Drawings
// Method of using HTML5 Canvas as a background image
tests['css-canvas'] = function( content, type ){}

// CSS Reflections
// Method of displaying a reflection of an element
tests['css-reflections'] = function( content, type ){}

// CSS Masks
// Method of displaying part of an element, using a selected image as a mask
tests['css-masks'] = function( content, type ){}

// SVG (basic support)
// Method of displaying basic Vector Graphics features using the embed or object elements
tests['svg'] = function( content, type ){}

// SVG in CSS backgrounds
// Method of using SVG images as CSS backgrounds
tests['svg-css'] = function( content, type ){}

// SVG SMIL animation
// Method of using animation elements to animate SVG images
tests['svg-smil'] = function( content, type ){}

// SVG fonts
// Method of using fonts defined as SVG shapes
tests['svg-fonts'] = function( content, type ){}

// SVG filters
// Method of using photoshop-like effects on SVG objects including blurring and color manipulation.
tests['svg-filters'] = function( content, type ){}

// SVG effects for HTML
// Method of using SVG transforms, filters, etc on HTML elements using either CSS or the foreignObject element
tests['svg-html'] = function( content, type ){}

// Inline SVG in HTML5
// Method of using SVG tags directly in HTML documents. Requires HTML5 parser.
tests['svg-html5'] = function( content, type ){}

// Canvas (basic support)
// Method of generating fast, dynamic graphics using JavaScript
tests['canvas'] = function( content, type ){}

// Text API for Canvas
// Method of displaying text on Canvas elements
tests['canvas-text'] = function( content, type ){}

// Web Storage - name/value pairs
// Method of storing data locally like cookies, but for larger amounts of data (sessionStorage and localStorage, used to fall under HTML5).
tests['namevalue-storage'] = function( content, type ){}

// Web SQL Database
// Method of storing data client-side, allows Sqlite database queries for access and manipulation
tests['sql-storage'] = function( content, type ){}

// IndexedDB
// Method of storing data client-side, allows indexed database queries. Previously known as WebSimpleDB API.
tests['indexeddb'] = function( content, type ){}

// Server-sent DOM events
// Method of continuously sending data from a server to the browser, rather than repeatedly requesting it (EventSource interface, used to fall under HTML5)
tests['eventsource'] = function( content, type ){}

// Cross-document messaging
// Method of sending information from a page on one domain to a page on a different one (using postMessage)
tests['x-doc-messaging'] = function( content, type ){}

// Data URIs
// Method of embedding images and other files in webpages as a string of text
tests['datauri'] = function( content, type ){}

// MathML
// An XML language that allows mathematical formulas and notations to be written on web pages.
tests['mathml'] = function( content, type ){}

// CSS Feature Queries
// CSS Feature Queries allow authors to condition rules based on whether particular property declarations are supported in CSS using the @supports at rule.
tests['css-featurequeries'] = function( content, type ){}

// XHTML served as application/xhtml+xml
// A strict form of HTML, and allows embedding of other XML languages
tests['xhtml'] = function( content, type ){}

// XHTML+SMIL animation
// Method of using SMIL animation in web pages
tests['xhtmlsmil'] = function( content, type ){}

// WAI-ARIA Accessibility features
// Method of providing ways for people with disabilities to use dynamic web content and web applications.
tests['wai-aria'] = function( content, type ){}

// Geolocation
// Method of informing a website of the user's geographical location
tests['geolocation'] = function( content, type ){}

// Flexible Box Layout Module
// Method of positioning elements in horizontal or vertical stacks.
tests['flexbox'] = function( content, type ){}

// WebGL - 3D Canvas graphics
// Method of generating dynamic 3D graphics using JavaScript, accelerated through hardware
tests['webgl'] = function( content, type ){}

// File API
// Method of manipulating file objects in web applications client-side, as well as programmatically selecting them and accessing their data.
tests['fileapi'] = function( content, type ){}

// Shadow DOM
// Method of establishing and maintaining functional boundaries between DOM trees and how these trees interact with each other within a document, thus enabling better functional encapsulation within the DOM.
tests['shadowdom'] = function( content, type ){}

// Web Sockets
// Bidirectional communication technology for web apps
tests['websockets'] = function( content, type ){}

// async attribute for external scripts
// The boolean async attribute on script elements allows the external JavaScript file to run when it's available, without delaying page load first.
tests['script-async'] = function( content, type ){}

// Cross-Origin Resource Sharing
// Method of performing XMLHttpRequests across domains
tests['cors'] = function( content, type ){}

// calc() as CSS unit value
// Method of allowing calculated values for length units, i.e. width: calc(100% - 3em)
tests['calc'] = function( content, type ){}

// Ruby annotation
// Method of adding pronunciation or other annotations using ruby elements (primarily used in East Asian typography)
tests['ruby'] = function( content, type ){}

// CSS3 Opacity
// Method of setting the transparency level of an element
tests['css-opacity'] = function( content, type ){}

// Form validation
// Method of setting required fields and field types without requiring JavaScript
tests['form-validation'] = function( content, type ){}

// Session history management
// Method of manipulating the user's browser's session history in JavaScript using history.pushState, history.replaceState and the popstate event
tests['history'] = function( content, type ){}

// JSON parsing
// Method of converting JavaScript objects to JSON strings and JSON back to objects using JSON.stringify() and JSON.parse()
tests['json'] = function( content, type ){}

// classList (DOMTokenList )
// Method of easily manipulating classes on elements, using the DOMTokenList object.
tests['classlist'] = function( content, type ){}

// CSS3 Text-overflow
// Append ellipsis when text overflows its containing element
tests['text-overflow'] = function( content, type ){}

// WebM video format
// Multimedia format designed to provide a royalty-free, high-quality open video compression format for use with HTML5 video. WebM supports the video codec VP8 and VP9.
tests['webm'] = function( content, type ){}

// MPEG-4/H.264 video format
// Commonly used video compression format (not royalty-free)
tests['mpeg4'] = function( content, type ){}

// Ogg/Theora video format
// Free lossy video compression format.
tests['ogv'] = function( content, type ){}

// CSS3 Overflow-wrap
// Allows lines to be broken within words if an otherwise unbreakable string is too long to fit.
tests['wordwrap'] = function( content, type ){}

// Progress & Meter
// Method of indicating a progress state (progress element) or the current level of a gauge (meter element).

tests['progressmeter'] = function( content, type ){}

// CSS3 object-fit/object-position
// Method of specifying how an object (image or video) should fit inside its box. object-fit options include "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio), where object-position allows the object to be repositioned like background-image does.
tests['object-fit'] = function( content, type ){}

// XMLHttpRequest 2
// Adds more functionality to AJAX requests like file uploads, transfer progress information and the ability to send form data.
tests['xhr2'] = function( content, type ){}

// CSS min/max-width/height
// Method of setting a minimum or maximum width or height to an element. 
tests['minmaxwh'] = function( content, type ){}

// Details & Summary elements
// The &lt;details> element generates a simple no-JavaScript widget to show/hide element contents, optionally by clicking on its child &lt;summary> element.
tests['details'] = function( content, type ){}

// CSS text-stroke
// Method of declaring the outline (stroke) width and color for text.
tests['text-stroke'] = function( content, type ){}

// CSS inline-block
// Method of displaying an element as a block while flowing it with text. 
tests['inline-block'] = function( content, type ){}

// Web Notifications
// Method of alerting the user outside of a web page by displaying notifications (that do not require interaction by the user).
tests['notifications'] = function( content, type ){}

// getUserMedia/Stream API
// Method of accessing external device data (such as a webcam video stream). Formerly this was envisioned as the &lt;device> element.
tests['stream'] = function( content, type ){}

// SVG in HTML img element
// Method of displaying SVG images in HTML using &lt;img>
tests['svg-img'] = function( content, type ){}

// Datalist element
// Method of setting a list of options for a user to select in a text field, while leaving the ability to enter a custom value.
tests['datalist'] = function( content, type ){}

// dataset & data-* attributes
// Method of applying and accessing custom data to elements.
tests['dataset'] = function( content, type ){}

// CSS Grid Layout
// Method of using a grid concept to lay out content, providing a mechanism for authors to divide available space for lay out into columns and rows using a set of predictable sizing behaviors
tests['css-grid'] = function( content, type ){}

// Toolbar/context menu
// Method of defining a toolbar menu, a context menu or a list of (interactive) options using the &lt;menu> element.
tests['menu'] = function( content, type ){}

// rem (root em) units
// Type of unit similar to "em", but relative only to the root element, not any parent element. Thus compounding does not occur as it does with "em" units.
tests['rem'] = function( content, type ){}

// TTF/OTF - TrueType and OpenType font support
// Support for the TrueType (.ttf)and OpenType (.otf) outline font formats in @font-face. 
tests['ttf'] = function( content, type ){}

// Touch events
// Method of registering when, where and how the interface is touched, for devices with a touch screen. These DOM events are similar to mousedown, mousemove, etc.
tests['touch'] = function( content, type ){}

// matches() DOM method
// Method of testing whether or not a DOM element matches a given selector. Formerly known (and largely supported with prefix) as matchesSelector.
tests['matchesselector'] = function( content, type ){}

// CSS pointer-events (for HTML)
// This CSS property, when set to "none" allows elements to not receive hover/click events, instead the event will occur on anything behind it. 
tests['pointer-events'] = function( content, type ){}

// Blob constructing
// Construct Blobs (binary large objects) either using the BlobBuilder API (deprecated) or the Blob constructor.
tests['blobbuilder'] = function( content, type ){}

// FileReader API
// Method of reading the contents of a File or Blob object into memory
tests['filereader'] = function( content, type ){}

// Filesystem & FileWriter API
// Method of reading and writing files to a sandboxed file system.

tests['filesystem'] = function( content, type ){}

// Blob URLs
// Method of creating URL handles to the specified File or Blob object.
tests['bloburls'] = function( content, type ){}

// Typed Arrays
// JavaScript typed arrays provide a mechanism for accessing raw binary data much more efficiently.

tests['typedarrays'] = function( content, type ){}

// DeviceOrientation events
// API for detecting orientation and motion events from the device running the browser.
tests['deviceorientation'] = function( content, type ){}

// defer attribute for external scripts
// The boolean defer attribute on script elements allows the external JavaScript file to run when the DOM is loaded, without delaying page load first.
tests['script-defer'] = function( content, type ){}

// Navigation Timing API
// API for accessing timing information related to navigation and elements.
tests['nav-timing'] = function( content, type ){}

// Web Audio API
// High-level JavaScript API for processing and synthesizing audio
tests['audio-api'] = function( content, type ){}

// CSS Regions
// Method of flowing content into multiple elements.
tests['css-regions'] = function( content, type ){}

// Full Screen API
// API for allowing content (like a video or canvas element) to take up the entire screen.
tests['fullscreen'] = function( content, type ){}

// requestAnimationFrame
// API allowing a more efficient way of running script-based animation, compared to traditional methods using timeouts.
tests['requestanimationframe'] = function( content, type ){}

// Range input type
// Form field type that allows the user to select a value using a slider widget.
tests['input-range'] = function( content, type ){}

// matchMedia
// API for finding out whether or not a media query applies to the document.
tests['matchmedia'] = function( content, type ){}

// Date/time input types
// Form field widget to easily allow users to enter dates and/or times, generally by using a calendar widget.
tests['input-datetime'] = function( content, type ){}

// Color input type
// Form field allowing the user to select a color.
tests['input-color'] = function( content, type ){}

// Number input type
// Form field type for numbers.
tests['input-number'] = function( content, type ){}

// sandbox attribute for iframes
// Method of running external site pages with reduced privileges (e.g. no JavaScript) in iframes
tests['iframe-sandbox'] = function( content, type ){}

// CSS Counters
// Method of controlling number values in generated content, using the counter-reset and counter-increment properties.
tests['css-counters'] = function( content, type ){}

// CSS resize property
// Method of allowing an element to be resized by the user, with options to limit to a given direction. 
tests['css-resize'] = function( content, type ){}

// input placeholder attribute
// Method of setting placeholder text for text-like input fields, to suggest the expected inserted information.
tests['input-placeholder'] = function( content, type ){}

// SPDY networking protocol
// Networking protocol for low-latency transport of content over the web.
tests['spdy'] = function( content, type ){}

// CSS Repeating Gradients
// Method of defining a repeating linear or radial color gradient as a CSS image.
tests['css-repeating-gradients'] = function( content, type ){}

// CSS Filter Effects
// Method of applying filter effects (like blur, grayscale, brightness, contrast and hue) to elements, previously only possible by using SVG.
tests['css-filters'] = function( content, type ){}

// getComputedStyle
// API to get the current computed CSS styles applied to an element. This may be the current value applied by an animation or as set by a stylesheet.
tests['getcomputedstyle'] = function( content, type ){}

// CSS3 word-break
// Property to prevent or allow words to be broken over multiple lines between letters.
tests['word-break'] = function( content, type ){}

// Viewport units: vw, vh, vmin, vmax
// Length units representing 1% of the viewport size for viewport width (vw), height (vh), the smaller of the two (vmin), or the larger of the two (vmax).
tests['viewport-units'] = function( content, type ){}

// Content Security Policy
// Mitigate cross-site scripting attacks by whitelisting allowed sources of script, style, and other resources.
tests['contentsecuritypolicy'] = function( content, type ){}

// Page Visibility
// JavaScript API for determining whether a document is visible on the display
tests['pagevisibility'] = function( content, type ){}

// Strict Transport Security
// Declare that a website is only accessible over a secure connection (HTTPS).
tests['stricttransportsecurity'] = function( content, type ){}

// Scoped CSS
// Allows CSS rules to be scoped to part of the document, based on the position of the style element.
tests['style-scoped'] = function( content, type ){}

// SVG fragment identifiers
// Method of displaying only a part of an SVG image by defining a view ID or view box dimensions as the file's fragment identifier.
tests['svg-fragment'] = function( content, type ){}

// CSS outline
// The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style, outline-width and outline-color in a single rule. In most cases the use of this shortcut is preferable and more convenient.
tests['outline'] = function( content, type ){}

// Download attribute
// When used on an anchor, this attribute signifies that the resource it points to should be downloaded by the browser rather than navigate to it.
tests['download'] = function( content, type ){}

// Pointer events
// This specification integrates various inputs from mice, touchscreens, and pens, making separate implementations no longer necessary and authoring for cross-device pointers easier. Not to be mistaken with the unrelated "pointer-events" CSS property.
tests['pointer'] = function( content, type ){}

// CSS user-select: none
// Method of preventing text/element selection using CSS. 
tests['user-select-none'] = function( content, type ){}

// WebP image format
// Image format that supports lossy and lossless compression, as well as animation and alpha transparency.
tests['webp'] = function( content, type ){}

// Intrinsic & Extrinsic Sizing
// Allows for the heights and widths to be specified in intrinsic values using the fill-available, max-content, min-content, and fit-content properties.
tests['intrinsic-width'] = function( content, type ){}

// HTML templates
// Method of declaring a portion of reusable markup that is parsed but not rendered until cloned.
tests['template'] = function( content, type ){}

// Opus
// Royalty-free open audio codec by IETF, which incorporated SILK from Skype and CELT from Xiph.org, to serve higher sound quality and lower latency at the same bitrate.
tests['opus'] = function( content, type ){}

// JPEG XR image format
// The latest JPEG image format of Joint Photographic Experts Group which boasts better compression and supports lossless compression, alpha channel, and 48-bit deep color over normal jpg format.
tests['jpegxr'] = function( content, type ){}

// Channel messaging
// Method for having two-way communication between browsing contexts (using MessageChannel)
tests['channel-messaging'] = function( content, type ){}

// CSS3 tab-size
// Method of customizing the width of the tab character. Only effective using 'white-space: pre' or 'white-space: pre-wrap'.
tests['css3-tabsize'] = function( content, type ){}

// Mutation Observer
// Method for observing and reacting to changes to the DOM. Replaces MutationEvents, which is deprecated.
tests['mutationobserver'] = function( content, type ){}

// ::selection CSS pseudo-element
// The ::selection CSS pseudo-element applies rules to the portion of a document that has been highlighted (e.g., selected with the mouse or another pointing device) by the user.
tests['css-selection'] = function( content, type ){}

// Canvas blend modes
// Method of defining the effect resulting from overlaying two layers on a Canvas element. 
tests['canvas-blending'] = function( content, type ){}

// Clipboard API
// API to provide copy, cut and paste functionality using the OS clipboard.
tests['clipboard'] = function( content, type ){}

// WebRTC Peer-to-peer connections
// Method of allowing two users to communicate directly, browser to browser using the RTCPeerConnection API.
tests['rtcpeerconnection'] = function( content, type ){}

// CSS3 Cursors (original values)
// CSS3 cursor values added in the 2004 spec, including none, context-menu, cell, vertical-text, alias, copy, no-drop, not-allowed, nesw-resize, nwse-resize, col-resize, row-resize and all-scroll. 
tests['css3-cursors'] = function( content, type ){}

// WebVTT - Web Video Text Tracks
// Format for marking up text captions for multimedia resources.
tests['webvtt'] = function( content, type ){}

// Promises
// A promise represents the eventual result of an asynchronous operation.
tests['promises'] = function( content, type ){}

// CSS position:sticky
// Keeps elements positioned as "fixed" or "relative" depending on how it appears in the viewport. As a result the element is "stuck" when necessary while scrolling.
tests['css-sticky'] = function( content, type ){}

// CSS Variables
// Permits the declaration and usage of cascading variables in stylesheets.
tests['css-variables'] = function( content, type ){}

// Vibration API
// Method to access the vibration mechanism of the hosting device.
tests['vibration'] = function( content, type ){}

// Blending of CSS image
// Allows blending between CSS background images
tests['css-backgroundblendmode'] = function( content, type ){}

// Web Speech API
// Method to provide speech input and text-to-speech output features in a web browser.
tests['web-speech'] = function( content, type ){}

// High Resolution Time API
// Method to provide the current time in sub-millisecond resolution and such that it is not subject to system clock skew or adjustments. Called using performance.now()
tests['high-resolution-time'] = function( content, type ){}

// Battery Status API
// Method to provide information about the battery status of the hosting device.
tests['battery-status'] = function( content, type ){}

// User Timing API
// Method to help web developers measure the performance of their applications by giving them access to high precision timestamps.
tests['user-timing'] = function( content, type ){}