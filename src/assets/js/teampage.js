// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Variables
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Sets the API key globally across the whole js page. 
keyID = 'key=a95bac84d42f4b7d81ce5c7ac50ea139';

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Retrive URL parameters (team selected)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamKey = urlParams.get('id')
console.log("Team Key: " + teamKey);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup (team data)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Url Setup - runs automatically
let apiData_TeamData = 
{   
    url_TeamData: 'https://api.sportsdata.io/v3/nfl/',
    field_TeamData: 'scores/json/',
    input_TeamData: 'Teams',
    key_TeamData: keyID
}

// Url JSON string
let {url_TeamData,field_TeamData,input_TeamData,key_TeamData} = apiData_TeamData
let apiUrl_TeamData = `${url_TeamData}${field_TeamData}${input_TeamData}?${key_TeamData}`
console.log(apiUrl_TeamData);

//Url Fetch
fetch(apiUrl_TeamData) 
.then( (data) => 
{
    return data.json()
})
.then((nflStats2) => generateHtml_TeamData(nflStats2))

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_TeamData = (data) => 
{
    // Original Html output is empty. We will compound buttons and html as the for loop progresses. 
    let output = "";

    // Collect the total amount of data elements and repeat for each result
    for(let i=0;i<data.length;i++)
    {
        let next_item = data[i];

        if(next_item.Key == teamKey)
        {
            let html = 
            `
                <div>Team Name: ${next_item.FullName}</div>
                <div>Head Coach: ${next_item.HeadCoach}</div>
                <div>Offensive Coordinator: ${next_item.OffensiveCoordinator}</div>
                <div>Defensive Coordinator: ${next_item.DefensiveCoordinator}</div>
                <div>Special Teams Coach: ${next_item.SpecialTeamsCoach}</div>
            `;
            html += `
                <br />
            `;
            output += html
            const testDIV = document.querySelector('.teamDataOutput')
            testDIV.innerHTML = output
        }
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup (player list)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Url Setup - runs automatically
let apiData_TeamPlayers = 
{   
    url_TeamPlayers: 'https://api.sportsdata.io/v3/nfl/',
    field_TeamPlayers: 'scores/json/Players/',
    input_TeamPlayers: teamKey,
    key_TeamPlayers: keyID
}

// Url JSON string
let {url_TeamPlayers,field_TeamPlayers,input_TeamPlayers,key_TeamPlayers} = apiData_TeamPlayers
let apiUrl_TeamPlayers = `${url_TeamPlayers}${field_TeamPlayers}${input_TeamPlayers}?${key_TeamPlayers}`

//Url Fetch
fetch(apiUrl_TeamPlayers) 
.then( (data) => 
{
    return data.json()
})
.then((nflStats) => generateHtml_TeamPlayers(nflStats))

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_TeamPlayers = (data) => 
{
    // Original Html output is empty
    let output = "";

    // Collect the total amount of data elements and repeat for each result
    for(let i=0;i<data.length;i++)
    {
        let next_item = data[i];

        //test
        if (next_item.Number == null) {
            
                let html = 
            `
                <button type="button" id="${next_item.PlayerID}" onClick="testFunction2(this.id)"> New Player! <img src=${next_item.PhotoUrl}> ${next_item.Name} ${next_item.Position} ${next_item.Age} ${next_item.Height} ${next_item.Weight}</button>
            `;
            html += `
                <br />
            `;
            output += html
            const testDIV = document.querySelector('.playerOutput')
            testDIV.innerHTML = output

        }
        else{
                let html = 
            `
                <button type="button" id="${next_item.PlayerID}" onClick="testFunction2(this.id)"> #${next_item.Number} <img src=${next_item.PhotoUrl}> ${next_item.Name} ${next_item.Position} ${next_item.Age} ${next_item.Height} ${next_item.Weight}</button>
            `;
            html += `
                <br />
            `;
            output += html
            const testDIV = document.querySelector('.playerOutput')
            testDIV.innerHTML = output
        }


        // let html = 
        // `
        //     <button type="button" id="${next_item.PlayerID}" onClick="testFunction2(this.id)"> #${next_item.Number} <img src=${next_item.PhotoUrl}> ${next_item.Name} ${next_item.Position} ${next_item.Age} ${next_item.Height} ${next_item.Weight}</button>
        // `;
        // html += `
        //     <br />
        // `;
        // output += html
        // const testDIV = document.querySelector('.playerOutput')
        // testDIV.innerHTML = output
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup (team news)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Url Setup - runs automatically
let apiData_TeamNews =
{   
    url_TeamNews: 'https://api.sportsdata.io/v3/nfl/',
    field_TeamNews: 'scores/json/NewsByTeam/',
    input_TeamNews: teamKey,
    key_TeamNews: keyID
}

// Url JSON string
let {url_TeamNews,field_TeamNews,input_TeamNews,key_TeamNews} = apiData_TeamNews
let apiUrl_TeamNews = `${url_TeamNews}${field_TeamNews}${input_TeamNews}?${key_TeamNews}`

//Url Fetch
fetch(apiUrl_TeamNews) 
.then( (data) => 
{
    return data.json()
})
.then((nflStats) => generateHtml_TeamNews(nflStats))
console.log("Player News: "+apiUrl_TeamNews);

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_TeamNews = (data) => 
{
    // // Original Html output is empty
    // // We will compound buttons and html as the for loop progresses. 
     let output = data;

     const html =`
     <div>Updated: ${data[0].Updated} </div></br>
     <div>${data[0].Title} </div></br>
     <div>${data[0].Content} </div></br>
     <div>Source: ${data[0].Source} ${data[0].Url} </div>
     `
     const testDIV = document.querySelector('.teamNewsOutput')
     testDIV.innerHTML = html

}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Functions
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function testFunction2(clicked_key)
{
   console.log("hi");
   console.log(clicked_key);
   document.location.href = "http://localhost:4200/players?id=" + clicked_key ;
}  