// Initialize an empty array to store scientist data
let scientistData = {};

// Get the file the user inputted.
document
    .getElementById("csvFileInput")
    .addEventListener("change", function handleFile(e) {
        const file = e.target.files[0];

        // Check if the file is null
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const contents = e.target.result;
                // Calls the function parseCSV
                scientistData = parseCSV(contents); // scientistData = dataObj

                console.log(scientistData);

                // Display each scientist as a bullet in the list
                displayScientistsList(scientistData);
            };

            reader.readAsText(file);
        }
    });

/**
 * Takes in the data from the csv as a string.
 * Parse the string and create an object for each row.
 * @param data
 */
function parseCSV(data) {
    const rows = data.split("\n");
    const dataObj = {}

    

    // TODO: STEP 1
    for(let i = 1; i < rows.length; i++){
        console.log(rows[i]);
        const row = rows[i].split(";"); // makes each row a separate array
 
        // creates const variables for all separate indexes in array
        const name = row[0]; 
        const field = row[1];
        const discovery = row[2];
        const year = row[3];
        const bio = row[4];
 
        // Create an entry into my object, using variables continued from here
        dataObj[name] ={
            field,
            discovery,
            year,
            bio,
        };

    }
    return dataObj; // returns object

}

/**
 * Takes in an object of scientists and create a <li> element for each scientist
 * @param scientists
 */
function displayScientistsList(scientists) {
    // TODO: STEP 2

    //Iterating through the keys of the scientist object
    
    for (let scientistName in scientists) {

        console.log(scientistName); // prints out name
        const scientistItem = document.createElement("li"); 
        // creates empty <li></li> tag
        scientistItem.textContent = scientistName;
      
// gets the ul tag
        const ulTag = document.getElementById('scientist-list');
        ulTag.appendChild(scientistItem); // adds scientist item to it

        scientistItem.addEventListener("click", () => { // activates function displayScientistInformation when button is clicked
            displayScientistInformation(scientistName);
        })
    }

}

/**
 * Takes in a name and add the innerHTML for the
 */
function displayScientistInformation(name) {
    

    const scientistInfo = document.getElementById('scientist-info'); // gets variable from scientists.html

    scientistInfo.innerHTML = ` 
    <h2>${name}</h2>
 <p><strong>Field of Study:</strong> ${scientistData[name].field}</p>
 <p><strong>Notable Discovery:</strong> ${scientistData[name].discovery}</p>
 <p><strong>Year of Discovery:</strong> ${scientistData[name].year}</p>
 <p><strong>Biography:</strong> ${scientistData[name].bio}</p>`;
}
