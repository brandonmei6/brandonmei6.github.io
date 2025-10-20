# Instructions for completing CSS Lab (Practice before Project 2)
## Styling Your HTML

**Objective:**

Take the css rules below and properly attach them to the html so that your index.html matches the image "*final_output*". 

**Process:**
1.	Use a *index.html* file, the *css* folder, and the *images* folder to create your lab repository. Include the css and image files found inside the folders.
2.	Open the image "*final_output*" and use that as a guide for styling.
3.	Below are a series of CSS rules stacked in groups and a series of CSS selectors.
4.	Your task is to figure out which CSS selector goes with which CSS rule stack in order to mimic the image "*final_output*".
5.	Follow the video instructions for testing and turning in labs (*How to Turn In Labs*). 
6.	Turn in the following:
    * Repo Link
    * Live Link
    * Image of Validation Screen Capture
    

***

## CSS Selectors

1.	body
2.	#page-wrapper
3.	#header
4.	#header h1
5.	#header a#logo1 img
6.	#header #toplink
7.	#footer
8.	#content-wrapper
9.	#main-content
10.	h2 strong
11.	.image-r
12.	#side-content
13.	#main-nav
14.	#main-nav ul
15.	#main-nav ul li
16.	#main-nav ul li a
17.	#main-nav ul li a:hover
18.	#center
19.	strong

***

## CSS Rule Stacks (You do not need to split up the chunks)
***
<!--This is one of very few situations where br is justified, a semantic break in the text. REMOVE the br in your final CSS -->
6.
{ text-decoration: none;<br>
    position: absolute;<br>
    top:-34px;<br>
    right: 10px;<br>
    color: white;<br>
  font-size: 1.8em;}
***
5.
{ margin-top: 20px;<br>
  margin-left: 20px;<br>
  margin-bottom: 20px;}
***
4.
{   position: absolute;<br>
    left: 420px;<br>
    top:5px;<br>
  font-size: 3em;<br>
    font-family: 'Devonshire', cursive;<br>
  color: #E35335;}
***
3.
{ position: relative;<br>
  margin-top: 40px;<br>
  border-radius: 12px 12px 0px 0px;}
***
7.
{   background-color: #777;<br>
    height: 80px;<br>
    clear: both;}
***
14.
{   list-style-type: none;<br>
    margin: 0;<br>
    padding: 0;<br>
    float: left;<br>
    position: relative;<br>
    left:50%;}
***
7.
{   background-image: url("../images/repeating.png");<br>
    float: left;}
***
1.
{   background-image: url("../images/black.jpg"); }
***
9.
{   min-height: 300px;<br>
    width: 715px;<br>
    margin-right: 30px;<br>
    float: left;<br>
    margin-left: 15px;}
***
10.
{ font-size: 2em;<br>
  font-weight: 900;}
***
11.
{   float: right;<br>
    border: 2px solid blue;<br>
  width: 300px;<br>
    padding: 5px;<br>
    background-color: white;<br>
    margin: 10px 0 10px 20px;}
***
12.
{   min-height: 150px;<br>
    width: 200px;<br>
    float: left;}
***
13.
{   float: left;<br>
    width: 100%;<br>
    background-color: #333;}
***
16
{   padding: 10px 25px;<br>
    display: block;<br>
    text-decoration: none;<br>
    color: #ccc;}
***
17
{   background-color: #ccc;<br>
    color: #333;}
***
2.
{   width: 960px;<br>
    margin: 0 auto;<br>
    box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 1);<br>
    border-radius: 12px 12px 0px 0px; }
***
  
{   float: left;<br>
    position: relative;<br>
    right: 50%;}
***
18.
{       width: 960px;<br>
        text-align: center;}
19.
***
{       font-weight: 900;<br>
        font-size: 48px;}


