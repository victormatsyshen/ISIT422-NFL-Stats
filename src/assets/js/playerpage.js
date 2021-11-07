// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Variables
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Sets the API key globally across the whole js page. 
keyID = 'key=c0317e0db7f949468693647038bd0909';

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Retrive URL parameters (team selected)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const queryStringPlayer = window.location.search;
const urlParamsPlayer = new URLSearchParams(queryStringPlayer);
const playerID = urlParamsPlayer.get('id')
console.log("Player ID: " + playerID);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup (player info)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Url Setup - runs automatically
let apiData_PlayerData = 
{   
    url_PlayerData: 'https://api.sportsdata.io/v3/nfl/',
    field_PlayerData: 'scores/json/Player/',
    input_PlayerData: playerID,
    key_PlayerData: keyID
}

// Url JSON string
let {url_PlayerData,field_PlayerData,input_PlayerData,key_PlayerData} = apiData_PlayerData
let apiUrl_PlayerData = `${url_PlayerData}${field_PlayerData}${input_PlayerData}?${key_PlayerData}`

//Url Fetch
fetch(apiUrl_PlayerData) 
.then( (data) => 
{
    return data.json()
})
.then((nflStats) => generateHtml_PlayerData(nflStats))

//

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_PlayerData = (data) => 
{
    // // Original Html output is empty
    // // We will compound buttons and html as the for loop progresses. 
     let output = data;

     const html =`
     <div class="name">${data.Name}</div>
     <img src=${data.PhotoUrl}>
     <div>Position: ${data.Position} </div>
     <div>Height: ${data.Height} </div>
     <div>Weight: ${data.Weight} </div>
     <div>Age: ${data.Age} </div>
     <div>College: ${data.College} </div>
     <div>Team Status: ${data.Status} </div>
     <div>Current Team: ${data.CurrentTeam} </div>
     `
     const testDIV = document.querySelector('.infoOutput')
     testDIV.innerHTML = html

}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup (player stats)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Url Setup - runs automatically
let apiData_PlayerStats =
{   
    url_PlayerStats: 'https://api.sportsdata.io/v3/nfl/',
    field_PlayerStats: 'projections/json/PlayerSeasonProjectionStatsByPlayerID/2021/',
    input_PlayerStats: playerID,
    key_PlayerStats: keyID
}

// Url JSON string
let {url_PlayerStats,field_PlayerStats,input_PlayerStats,key_PlayerStats} = apiData_PlayerStats
let apiUrl_PlayerStats = `${url_PlayerStats}${field_PlayerStats}${input_PlayerStats}?${key_PlayerStats}`

//Url Fetch
fetch(apiUrl_PlayerStats) 
.then( (data) => 
{
    return data.json()
})
.then((nflStats) => generateHtml_PlayerStats(nflStats))

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_PlayerStats = (data) => 
{
    // // Original Html output is empty
    // // We will compound buttons and html as the for loop progresses. 
    let output = data;
    
    if(data.Position == "QB")
    {
        const html =`
        <h3>QB Stats</h3>

        <div>Passing Attempts: ${data.PassingAttempts} </div>
        <div>Passing Yards: ${data.PassingYards} </div>
        <div>Completion Percentage: ${data.PassingCompletionPercentage} </div>
        <div>Passing Touchdowns: ${data.PassingTouchdowns} </div>
        <div>Rushing Touchdowns: ${data.RushingTouchdowns} </div>
        <div>Touchdowns: ${data.Touchdowns} </div>
        <div>Interceptions: ${data.PassingInterceptions} </div>
        <div>Fumbles: ${data.Fumbles} </div>
        <div>Passing Rating: ${data.PassingRating} </div>
    `
        const testDIV = document.querySelector('.statsOutput')
        testDIV.innerHTML = html
    }

    if(data.Position == "WR")
    {
        const html =`
        <h3>WR Stats</h3>

        <div>Targets: ${data.ReceivingTargets} </div>
        <div>Receptions: ${data.Receptions} </div>
        <div>Receiving Yards: ${data.ReceivingYards} </div>
        <div>Yards Per Reception: ${data.ReceivingYardsPerReception} </div>
        <div>Receiving Touchdowns: ${data.ReceivingTouchdowns} </div>
    `
        const testDIV = document.querySelector('.statsOutput')
        testDIV.innerHTML = html
    }

    if(data.Position == "DT")
    {
        const html =`
        <h3>Defensive Stats</h3>

        <div>Tackles: ${data.Tackles} </div>
        <div>Solo Tackles: ${data.SoloTackles} </div>
        <div>Assisted Tackles: ${data.AssistedTackles} </div>
        <div>Sacks: ${data.Sacks} </div>
        <div>Quarterback Hits: ${data.QuarterbackHits} </div>
        <div>Passes Defended: ${data.PassesDefended} </div>
        <div>Fumbles Forced: ${data.FumblesForced} </div>
        <div>Defensive Touchdowns: ${data.DefensiveTouchdowns} </div>
    `
        const testDIV = document.querySelector('.statsOutput')
        testDIV.innerHTML = html
    }

    if(data.Position == "K")
    {
        const html =`
        <h3>Kicker Stats</h3>

        <div>Field Goals Attempted: ${data.FieldGoalsAttempted} </div>
        <div>Field Goals Made: ${data.FieldGoalsMade} </div>
        <div>Extra Points Made: ${data.ExtraPointsMade} </div>
    `
        const testDIV = document.querySelector('.statsOutput')
        testDIV.innerHTML = html
    }
}