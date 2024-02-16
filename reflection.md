## WEB322 - Assignment 2 Reflection 
##### Lamim Rashid - 017156142

### Converting from csv to json
I parsed the data to json format so number values would not be saved as string values. I feel this will be more useful for any data manipulation that may be required, and it is fairly easy to convert numbers back to string if needed in javascript. 

"themeData.json" also had to have it's numbers parsed from string values to number values for this. I used https://csvjson.com/json_beautifier for this. Since ID uses unique key values there shouldn't be any duplicate values.

I also saved all the data in a master "data" key to help with keeping things organized, especially if this program is ever expanded on.

### Initialization function
I considered using JSON.parse to put the json data into an object array since it would be less code, but realized it may be better to use a for loop (which should be more efficient than foreach from what I read online) and the push method so I can add the matching theme data to the array every iteration of the loop. I ended up rewriting this function using foreach and arrow functions instead in case this was more preferred for assignement grading.

### The server
There's a console.log that let's the user know the server is running (and it's port). I added this for debugging purposes (so I know the server is running and have a convenient localhost link). 

I made variables for name, student ID, assignment 2 and return it using template literals because I think it looks nicer, with better readability and reusability.

I also added some scripts to the package.json for convenient commands to run the server (with npm run start) or run it in watch mode (with npm run dev).