#UMD GRADE CHECKER PROJECT 

#Description 
This application accesses the PlantTerp API and grabs its grade data. By entering a course name you can find all the grades recieved in that course throughout the semester. 



#Team Member 
 - Andy Pineda 


#Check Out The APP 
You can check out the UMD Grade Checker at 
http://umdgradechecker.herokuapp.com/


#Target Browsers 
This application is mainly for Desktop users so you're able to fully analyze the table data. Mobile will be too crowded and require scrolling which can make it a bit more difficult. 


#How to use 
Load the web application at 
umdgradechecker.herokuapp.com


At the bottom you will see a text entry option. To search for a course just type in the course name. For example to search INST377 you just type inst377. The application is not case senestive so INST377 and inst377 will result in the same data. 




#Developer Manuel 
To install the application clone the repoistry above or copy this repo link 


Once you have copied the repo, type npm install into your terminal. 
After type in npm start to launch the server to your local host. 


This application uses api calls to Planet Terp (https://api.planetterp.com/?python#get-grades) to access the grade data for UMD students. We use POST as the request to get data and recieve a json response. A couple bugs is after making a search you'll have to refresh your page to make another search. 



