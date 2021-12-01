// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Variables and Runtime
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Sets the API key globally across the whole js page. 
keyID = 'key=4b5d1fc50f20475a99c5b658bc02c4c3';

// Run Schedule Function
ApiHomeTeams();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Functions
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------
//  Move to Team ID by button
// ----------------------------------------------------------------------------------
function testFunction(clicked_key)
{
   document.location.href = "http://localhost:4200/teams?id=" + clicked_key ;
}  

// ----------------------------------------------------------------------------------
//  Test Mongo connection
// ----------------------------------------------------------------------------------
function testMongo(clicked_key)
{
   console.log("Mongo Data: " + clicked_key);
   

}  

// ----------------------------------------------------------------------------------
// Display Teams
// ----------------------------------------------------------------------------------
function ApiHomeTeams()
{
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
        let output1 = "";
        let output2 = "";
        let output3 = "";
        let output4 = "";
        let output5 = "";
        let output6 = "";
        let output7 = "";

        // Collect the total amount of resataurant elements and repeat for each result
        for(let i=0;i<data.length;i++)
        {

            let next_item = data[i];

            if (next_item.Conference == "NFC" && next_item.Division == "North") {

                let html = 
                `
                    <button type="button" id="${next_item.Key}" onClick="testFunction(this.id); testMongo(this.id);">${next_item.FullName}</br><img src=${next_item.WikipediaLogoUrl} class="homeTeamLogo"></button>
                `;
                html += `
                `;

                output += html
                const testDIV = document.querySelector('.nfcNorth')
                testDIV.innerHTML = output
                
            }

            if (next_item.Conference == "NFC" && next_item.Division == "West") {

                let html = 
                `
                    <button type="button" id="${next_item.Key}" onClick="testFunction(this.id); testMongo(this.id);">${next_item.FullName}</br><img src=${next_item.WikipediaLogoUrl} class="homeTeamLogo"></button>
                `;
                html += `
                `;

                output1 += html
                const testDIV = document.querySelector('.nfcWest')
                testDIV.innerHTML = output1
                
            }

            if (next_item.Conference == "NFC" && next_item.Division == "South") {

                let html = 
                `
                    <button type="button" id="${next_item.Key}" onClick="testFunction(this.id); testMongo(this.id);">${next_item.FullName}</br><img src=${next_item.WikipediaLogoUrl} class="homeTeamLogo"></button>
                `;
                html += `
                `;

                output2 += html
                const testDIV = document.querySelector('.nfcSouth')
                testDIV.innerHTML = output2
                
            }

            if (next_item.Conference == "NFC" && next_item.Division == "East") {

                let html = 
                `
                    <button type="button" id="${next_item.Key}" onClick="testFunction(this.id); testMongo(this.id);">${next_item.FullName}</br><img src=${next_item.WikipediaLogoUrl} class="homeTeamLogo"></button>
                `;
                html += `
                `;

                output3 += html
                const testDIV = document.querySelector('.nfcEast')
                testDIV.innerHTML = output3
                
            }

            if (next_item.Conference == "AFC" && next_item.Division == "North") {

                let html = 
                `
                    <button type="button" id="${next_item.Key}" onClick="testFunction(this.id); testMongo(this.id);">${next_item.FullName}</br><img src=${next_item.WikipediaLogoUrl} class="homeTeamLogo"></button>
                `;
                html += `
                `;

                output4 += html
                const testDIV = document.querySelector('.afcNorth')
                testDIV.innerHTML = output4
                
            }

            if (next_item.Conference == "AFC" && next_item.Division == "West") {

                let html = 
                `
                    <button type="button" id="${next_item.Key}" onClick="testFunction(this.id); testMongo(this.id);">${next_item.FullName}</br><img src=${next_item.WikipediaLogoUrl} class="homeTeamLogo"></button>
                `;
                html += `
                `;

                output5 += html
                const testDIV = document.querySelector('.afcWest')
                testDIV.innerHTML = output5
                
            }

            if (next_item.Conference == "AFC" && next_item.Division == "South") {

                let html = 
                `
                    <button type="button" id="${next_item.Key}" onClick="testFunction(this.id); testMongo(this.id);">${next_item.FullName}</br><img src=${next_item.WikipediaLogoUrl} class="homeTeamLogo"></button>
                `;
                html += `
                `;

                output6 += html
                const testDIV = document.querySelector('.afcSouth')
                testDIV.innerHTML = output6
                
            }

            if (next_item.Conference == "AFC" && next_item.Division == "East") {

                let html = 
                `
                    <button type="button" id="${next_item.Key}" onClick="testFunction(this.id); testMongo(this.id);">${next_item.FullName}</br><img src=${next_item.WikipediaLogoUrl} class="homeTeamLogo"></button>
                `;
                html += `
                `;

                output7 += html
                const testDIV = document.querySelector('.afcEast')
                testDIV.innerHTML = output7
                
            }
        }
    }
}  


