// Sets the API key globally across the whole js page. 
keyID = 'key=a95bac84d42f4b7d81ce5c7ac50ea139';



// Url Setup - runs automatically
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

//

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml = (data) => 
{
    // Original Html output is empty
    // We will compound buttons and html as the for loop progresses. 
    let output = "";

    // Collect the total amount of resataurant elements and repeat for each result
    for(let i=0;i<data.length;i++)
    {
        // This portion allows us to create the first two buttons that contain
        // the restaurant info and menu for each restaurant
        //<button type="button" id="${next_item.Key}" onClick="testFunction(this.id)">${next_item.FullName}</br><img src=${next_item.WikipediaLogoUrl}></button>
        let next_item = data[i];
        let html = 
        `
            <button type="button" id="${next_item.Key}" onClick="testFunction(this.id); testMongo(this.id);">${next_item.FullName}</br><img src=${next_item.WikipediaLogoUrl} class="homeTeamLogo"></button>
        `;
        html += `
            
        `;
        output += html
        const testDIV = document.querySelector('.teamOutput')
        testDIV.innerHTML = output

        //.addEventListener("click", testFunction());

        // function testFunction()
        // {
        //     console.log(next_item.FullName);
        // }   
    }
}

function testFunction(clicked_key)
{
   console.log(clicked_key);
   document.location.href = "http://localhost:4200/teams?id=" + clicked_key ;
}  

function testMongo(clicked_key)
{
   console.log("Mongo Data: " + clicked_key);

}  



