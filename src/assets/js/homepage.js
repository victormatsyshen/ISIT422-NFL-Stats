// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Variables
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Sets the API key globally across the whole js page. 
keyID = 'key=c0317e0db7f949468693647038bd0909';

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Setup runs on page load
let apiData = 
{   
    url: 'https://api.sportsdata.io/v3/nfl/',
    field: 'scores/json/',
    input: 'Teams',
    key: keyID
}

// Url JSON string
let {url,field,input,key} = apiData
let apiUrl = `${url}${field}${input}?${key}`

//Url Fetch
fetch(apiUrl)
.then( (data) => 
{
    return data.json()
})
.then((nflStats) => generateHtml(nflStats))

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// HTML loading
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml = (data) => 
{
    // Original Html output is empty, we will compound buttons and html as the for loop progresses. 
    let output = "";

    // Collect the total amount of team elements and repeat for each result
    for(let i=0;i<data.length;i++)
    {
        // Create HTML for every data set within the for loop
        let next_item = data[i];
        let html = 
        `
            <button type="button" id="${next_item.Key}" onClick="testFunction(this.id)">${next_item.FullName}</br><img src=${next_item.WikipediaLogoUrl} class="homeLogo"></button>
        `;
        html += `
            <br />
        `;
        output += html
        const testDIV = document.querySelector('.teamOutput')
        testDIV.innerHTML = output
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Functions
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function testFunction(clicked_key)
{
   console.log("hi");
   console.log(clicked_key);
   document.location.href = "http://localhost:4200/teams?id=" + clicked_key ;
}  




