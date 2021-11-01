// Sets the API key globally across the whole js page. 
keyID = 'key=c0317e0db7f949468693647038bd0909';


// get url param ID
const queryString = window.location.search;
//console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const playerID = urlParams.get('id')
console.log(playerID);

//

// Url Setup - runs automatically
let apiData = 
{   
    url: 'https://api.sportsdata.io/v3/nfl/',
    field: 'scores/json/Player/',
    input: playerID,
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

//

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml = (data) => 
{
    // // Original Html output is empty
    // // We will compound buttons and html as the for loop progresses. 
     let output = data;

     const html =`
     <div class="name">${data.Name}</div>
     <img src=${data.PhotoUrl}>
     <div>Position: ${data.Position} </div>
     <div>Height: ${data.Height} Weight: ${data.Weight}</div>
     `
     const testDIV = document.querySelector('.statsOutput')
     testDIV.innerHTML = html

}