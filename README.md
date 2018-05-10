# Sakura Chaser

A Japanese cherry blossom guide website

## Important versions

### v1.0 - initial layout
* relase time: 2018.03.20
* create the initial layout for the website with three pages
* bugs
	* broken links exists
	* transparent text on landing page is "fake"
	* the display on Safari is bad

### v1.1 - improvement on CSS
* release time: 2018.03.29
* modify the website layouts
	* overall
	    * add a logo to the header
	    * make the website responsive to the size of the screen
    	* fix the `-webkit-background-clip: text` couldn't show up on Safari problem
    	* modify the footer
    	* support Safari layout
    	* change some background photos
    * index page
    	* use svg to make the landing page text actual transparent
	    * add a background image to the Japanese map on index page
    	* remove the icons for places on index page
    * map page
    	* modify the Japanese map to create a 3D texture
    	* place the icons to be responsive to the size of the screen
    	* add a font to the title (not sure if it looks better)
    	* rearrange the structure and recolor the text
    * attractions page
    	* change the background photo

### v2.0 - more responsive and functional
* release time: 2018.05.09
* modify the website layouts to be responsive with Bootstrap
	* overall
		* add subscription part on the bottom of each page
		* rewrite the header navigation bar to be responsive with "hamburger" icon in mobile size
		* modify the CSS and add Bootstrap classes to be responsive
	* index page
		* at the bottom part, change the redundant sites and links to a search box
	* attractions page
		* add a google map to show all the places mentioned
* add JavaScript funtions
	* index page
		* add an auto-suggest function for the search box (enables arrow keys and mouse clicks)
	* map page
		* create a JSON file for cherry blossom data by sites
		* add a function to automatically load JSON data to map page
	* attraction page
		* create a JSON file for information of recommend sites
		* add a function to automatically load JSON data to attraction page based on desired site from link
		* add a function to show mentioned places on google map

### TODOs:
* CSS:
	* change the fonts
	* add flower blooming animation / series of images
	* modify the site icons to be responsive on map page
* JavaScript:
	*  add a scroll bar for timeline
	*  add scrollify effect
* Other:
	* get more data from other websites, and update the contents automatically
