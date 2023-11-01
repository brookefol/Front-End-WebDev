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
                scientistData = parseCSV(contents);

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
        const row = rows[i].split(";");

        const name = row[0];
        const field = row[1];
        const discovery = row[2];
        const year = row[3];
        const bio = row[4];

        dataObj[name] ={
            field,
            discovery,
            year,
            bio,
        };

    }
    return dataObj; // 10/31 - continue from here ahahah idk

}

/**
 * Takes in an object of scientists and create a <li> element for each scientist
 * @param scientists
 */
function displayScientistsList(scientists) {
    // TODO: STEP 2

}

/**
 * Takes in a name and add the innerHTML for the
 */
function displayScientistInformation(name) {
    // TODO: Step 3
}
