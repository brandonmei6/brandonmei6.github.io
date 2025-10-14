# Instructions for completing Lab 5 
## HTML Forms

**Objective:**

Create a valid HTML form that submits its data to the provided processing script. 

**Process:**
1. Using your text editor VsCode, create a new HTML file. Add your HTML skeleton. 
2. Create an HTML form that gathers the same info as the lab5-sample.pdf.
    * The lab5-sample.pdf shows the same form twice. Once without and once with the dropdown list showing (circled in Red)
    * You only have to create the form once. Don't duplicated the questions. 
3. Use the POST method for your form.
4. Use html “action” url: http://bloomingdale.sat.iit.edu/kriedan/lab3formscript.php
5. Use the following controls in your form.
    * Single line text fields
    * Multi line text area
    * Drop Down Menu
    * Radio Buttons
    * Checkboxes
    * Hidden field
    * Proper label tags on all the controls
    * Use the fieldset & legend on the form surrounding some controls where appropriate
6. In the hidden field I want the form to submit your name as its value.
7. Form processing script expects the controls to have exactly the following name attributes.
    * first_name_field
    * last_name_field
    * phone_field
    * email_field
    * comments_field
    * gender_field
    * available_field[] (*note the php array syntax [] to allow multiple values*)
    * age_field
    * hidden_field 
9. Turn in the following:
    * Repo Link
    * Live Link
    * Image of Validation Screen Capture
    
***
## You need to fully test the form and make sure it submits all the data properly before you turn it in. Use w3schools.com, your practiceIndex.html we completed in class and weekly slides to help you complete the Lab.
You will know that the form works properly if you see the results page and all the data you entered is correct. If I press submit and get an error, you can expect a very poor grade.
  


