// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Variables
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Sets the API key globally across the whole js page. 
//keyID = 'key=a95bac84d42f4b7d81ce5c7ac50ea139';
//keyID = 'key=4b5d1fc50f20475a99c5b658bc02c4c3';
keyID = 'key=e26076ffdde9493d92c912506c132ccc';

var Year = 2021;
statsYear = Year.toString();
seasons = 5;


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Retrive URL parameters (player ID)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const queryStringPlayer = window.location.search;
const urlParamsPlayer = new URLSearchParams(queryStringPlayer);
const playerID = urlParamsPlayer.get('id')
//console.log("Player ID: " + playerID);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Retrive URL parameters (team selected)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const queryStringTeam = window.location.search;
const urlParamsTeam = new URLSearchParams(queryString);
const teamID = urlParamsTeam.get('team')





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
//console.log("Player Data: "+apiUrl_PlayerData);

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_PlayerData = (data) => 
{
    // // Original Html output is empty
    // // We will compound buttons and html as the for loop progresses. 
     let output = data;

     const html =`
        <div class="wrapTest">
            <div class="p1">
                <img src=${data.PhotoUrl}>
                <div class="name">${data.Name}</div>
            </div>
            <div class="scheduleInfoHeadings">
                <div>Position:</div>
                <div>Height:</div>
                <div>Weight</div>
                <div>Age</div>
                 <div>Birth Day</div>
            </div>
            <div class="p2">
                <div>${data.Position} </div>
                <div>${data.Height} </div>
                <div>${data.Weight} </div>
                <div>${data.Age} </div>
                <div>${data.BirthDateString} </div>
            </div>
            <div class="scheduleInfoHeadings">
                <div>Team Status</div>
                <div>Experience</div>
                <div>Current Team</div>
                <div>College</div>
                <div>College Draft Year</div>
            </div>
            <div class="p3">
                <div> ${data.Status} </div>
                <div> ${data.ExperienceString} </div>
                <div> ${data.CurrentTeam} </div>
                <div> ${data.College} </div>
                <div> ${data.CollegeDraftYear} </div>
            </div>
        </div>
     `
     const testDIV = document.querySelector('.infoOutput')
     testDIV.innerHTML = html

}






// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup (player news)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Url Setup - runs automatically
let apiData_PlayerNews =
{   
    url_PlayerNews: 'https://api.sportsdata.io/v3/nfl/',
    field_PlayerNews: 'scores/json/NewsByPlayerID/',
    input_PlayerNews: playerID,
    key_PlayerNews: keyID
}

// Url JSON string
let {url_PlayerNews,field_PlayerNews,input_PlayerNews,key_PlayerNews} = apiData_PlayerNews
let apiUrl_PlayerNews = `${url_PlayerNews}${field_PlayerNews}${input_PlayerNews}?${key_PlayerNews}`

//Url Fetch
fetch(apiUrl_PlayerNews) 
.then( (data) => 
{
    return data.json()
})
.then((nflStats) => generateHtml_PlayerNews(nflStats))
//console.log("Player News: "+apiUrl_PlayerNews);

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_PlayerNews = (data) => 
{
    // // Original Html output is empty
    // // We will compound buttons and html as the for loop progresses. 
     let output = data;

     const html =`
     <div><b>${data[0].Title}</b></div></br>
     <div>${data[0].Content} </div></br>
     <div>Updated: ${data[0].Updated} </div>
     <div>Source: ${data[0].Source} - <a href="${data[0].Url}">${data[0].Url}</a></div>
     `
     const testDIV = document.querySelector('.playerNewsOutput')
     testDIV.innerHTML = html

}






// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup (player stats by season)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Url Setup - runs automatically
let apiData_PlayerSeasonStats =
{   
    url_PlayerSeasonStats: 'https://api.sportsdata.io/v3/nfl/',
    field_PlayerSeasonStats: 'stats/json/PlayerGameStatsBySeason/',
    year_PlayerSeasonStats: statsYear,
    input_PlayerSeasonStats: '/' + playerID + '/All',
    key_PlayerSeasonStats: keyID
}

// Url JSON string
let {url_PlayerSeasonStats,field_PlayerSeasonStats,year_PlayerSeasonStats,input_PlayerSeasonStats,key_PlayerSeasonStats} = apiData_PlayerSeasonStats
let apiUrl_PlayerSeasonStats = `${url_PlayerSeasonStats}${field_PlayerSeasonStats}${year_PlayerSeasonStats}${input_PlayerSeasonStats}?${key_PlayerSeasonStats}`

//Url Fetch
fetch(apiUrl_PlayerSeasonStats) 
.then( (data) => 
{
    return data.json()
})
.then((nflStats) => generateHtml_PlayerSeasonStats(nflStats))
//console.log("Player SS: "+apiUrl_PlayerSeasonStats);

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_PlayerSeasonStats = (data) => 
{
    // Original Html output is empty. We will compound buttons and html as the for loop progresses. 
    let output = "";
    let output0 = "";

    // Collect the total amount of data elements and repeat for each result
    let next_item = data[0];
        
    if (next_item.Position == "QB") 
    {
        let html0 = 
        `
        <div class="playerStatsWrap">

            <div class="playerStatsHeaderContainer2">
                
            <div class="playerStatsHeader"><div class="hw-qb1">Passing</div><div class="hw-qb2">Rushing</div><div class="hw-qb3">Fantasy</div></div>

            </div>
        
            <div class="playerStatsHeaderContainer">
            
                <div class="playerStatsHeader"><div class="hc-qb1">Week</div><div class="hc-qb1">ATT</div><div class="hc-qb1">CMP</div><div class="hc-qb1">PCT</div><div class="hc-qb1">YDS</div><div class="hc-qb1">AVG</div><div class="hc-qb1">TD</div><div class="hc-qb1">INT</div><div class="hc-qb1">Passer Rating</div><div class="hc-qb1">ATT</div><div class="hc-qb1">RY</div><div class="hc-qb1">YPA</div><div class="hc-qb1">TD</div><div class="hc-qb1">Fumbles</div><div class="hc-qb1">Draft Kings</div><div class="hc-qb1">Fan Duel</div></div>

            </div>

        </div>
        `;
        output0 += html0
        const testDIV0 = document.querySelector('.seasonStatsHeader')
        testDIV0.innerHTML = output0
        
        for(let j=0;j<data.length;j++){

            let next_item = data[j];

            let html =
            `
            <div class = okok>
            <div class="sc-qb1">${next_item.Week} </div>
            <div class="sc-qb1">${next_item.PassingAttempts} </div>
            <div class="sc-qb1">${next_item.PassingCompletions} </div>
            <div class="sc-qb1">${next_item.PassingCompletionPercentage} </div>
            <div class="sc-qb1">${next_item.PassingYards} </div>
            <div class="sc-qb1">${next_item.PassingYardsPerAttempt} </div>
            <div class="sc-qb1">${next_item.PassingTouchdowns} </div>
            <div class="sc-qb1">${next_item.PassingInterceptions} </div>
            <div class="sc-qb1">${next_item.PassingRating} </div>
            <div class="sc-qb1">${next_item.RushingAttempts} </div>
            <div class="sc-qb1">${next_item.RushingYards} </div>
            <div class="sc-qb1">${next_item.RushingYardsPerAttempt} </div>
            <div class="sc-qb1">${next_item.RushingTouchdowns} </div>
            <div class="sc-qb1">${next_item.Fumbles} </div>
            <div class="sc-qb1">${next_item.FantasyPointsDraftKings} </div>
            <div class="sc-qb1">${next_item.FantasyPointsFanDuel} </div>
            </div>
    
            `;
            html += `
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }
    }

    if (next_item.Position == "WR") 
    {
        let html0 = 
        `
        <div class="playerStatsWrap">
        
            <div class="playerStatsHeaderContainer">
            
                <div class="playerStatsHeader"><div class="hc-qb1">Week</div><div class="hc-qb1">Targets</div><div class="hc-qb1">Receptions</div><div class="hc-qb1">Yards</div><div class="hc-qb1">Yards Per Reception</div><div class="hc-qb1">Touchdowns</div><div class="hc-qb1">Long</div><div class="hc-qb1">Percentage</div><div class="hc-qb1">Fumbles</div><div class="hc-qb1">Draft Kings</div><div class="hc-qb1">Fan Duel</div></div>

            </div>

        </div>
        `;
        output0 += html0
        const testDIV0 = document.querySelector('.seasonStatsHeader')
        testDIV0.innerHTML = output0
        
        for(let j=0;j<data.length;j++){

            let next_item = data[j];

            let html =
            `
            <div class = okok>
            <div class="sc-qb1">${next_item.Week} </div>
            <div class="sc-qb1">${next_item.ReceivingTargets} </div>
            <div class="sc-qb1">${next_item.Receptions} </div>
            <div class="sc-qb1">${next_item.ReceivingYards} </div>
            <div class="sc-qb1">${next_item.ReceivingYardsPerReception} </div>
            <div class="sc-qb1">${next_item.ReceivingTouchdowns} </div>
            <div class="sc-qb1">${next_item.ReceivingLong} </div>
            <div class="sc-qb1">${next_item.ReceptionPercentage} </div>
            <div class="sc-qb1">${next_item.Fumbles} </div>
            <div class="sc-qb1">${next_item.FantasyPointsDraftKings} </div>
            <div class="sc-qb1">${next_item.FantasyPointsFanDuel} </div>
            </div>
    
            `;
            html += `
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }
    }

    if (next_item.Position == "RB" || next_item.Position == "TE") 
    {
        let html0 = 
        `
        <div class="playerStatsWrap">

            <div class="playerStatsHeaderContainer2">
                
            <div class="playerStatsHeader"><div class="hw-qb1">Running</div><div class="hw-qb2">Receiving</div><div class="hw-qb3">Fantasy</div></div>

            </div>
        
            <div class="playerStatsHeaderContainer">
            
                <div class="playerStatsHeader"><div class="hc-qb1">Week</div><div class="hc-qb1">ATT</div><div class="hc-qb1">YDS</div><div class="hc-qb1">YPA</div><div class="hc-qb1">TD</div><div class="hc-qb1">LONG</div><div class="hc-qb1">Targets</div><div class="hc-qb1">Receptions</div><div class="hc-qb1">YDS</div><div class="hc-qb1">YPR</div><div class="hc-qb1">TD</div><div class="hc-qb1">LONG</div><div class="hc-qb1">Fumbles</div><div class="hc-qb1">Draft Kings</div><div class="hc-qb1">Fan Duel</div></div>

            </div>

        </div>
        `;
        output0 += html0
        const testDIV0 = document.querySelector('.seasonStatsHeader')
        testDIV0.innerHTML = output0
        
        for(let j=0;j<data.length;j++){

            let next_item = data[j];

            let html =
            `
            <div class = okok>
            <div class="sc-qb1">${next_item.Week} </div>
            <div class="sc-qb1">${next_item.RushingAttempts} </div>
            <div class="sc-qb1">${next_item.RushingYards} </div>
            <div class="sc-qb1">${next_item.RushingYardsPerAttempt} </div>
            <div class="sc-qb1">${next_item.RushingTouchdowns} </div>
            <div class="sc-qb1">${next_item.RushingLong} </div>
            <div class="sc-qb1">${next_item.ReceivingTargets} </div>
            <div class="sc-qb1">${next_item.Receptions} </div>
            <div class="sc-qb1">${next_item.ReceivingYards} </div>
            <div class="sc-qb1">${next_item.ReceivingYardsPerReception} </div>
            <div class="sc-qb1">${next_item.ReceivingTouchdowns} </div>
            <div class="sc-qb1">${next_item.ReceivingLong} </div>
            <div class="sc-qb1">${next_item.Fumbles} </div>
            <div class="sc-qb1">${next_item.FantasyPointsDraftKings} </div>
            <div class="sc-qb1">${next_item.FantasyPointsFanDuel} </div>
            </div>
    
            `;
            html += `
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }
    }

    if (next_item.Position == "CB") 
    {
        let html0 = 
        `
        <div class="playerStatsWrap">
        
            <div class="playerStatsHeaderContainer">
            
                <div class="playerStatsHeader"><div class="hc-qb1">Week</div><div class="hc-qb1">Tackles</div><div class="hc-qb1">Solo Tackles</div><div class="hc-qb1">Assisted Tackles</div><div class="hc-qb1">Tackles For Loss</div><div class="hc-qb1">Passes Defended</div><div class="hc-qb1">Fumbles Forced</div><div class="hc-qb1">Fumbles Recovered</div><div class="hc-qb1">INT</div><div class="hc-qb1">Return Yards</div><div class="hc-qb1">INT Return Touchdowns</div><div class="hc-qb1">Fantasy</div></div>

            </div>

        </div>
        `;
        output0 += html0
        const testDIV0 = document.querySelector('.seasonStatsHeader')
        testDIV0.innerHTML = output0
        
        for(let j=0;j<data.length;j++){

            let next_item = data[j];

            let html =
            `
            <div class = okok>
            <div class="sc-qb1">${next_item.Week} </div>
            <div class="sc-qb1">${next_item.Tackles} </div>
            <div class="sc-qb1">${next_item.SoloTackles} </div>
            <div class="sc-qb1">${next_item.AssistedTackles} </div>
            <div class="sc-qb1">${next_item.TacklesForLoss} </div>
            <div class="sc-qb1">${next_item.PassesDefended} </div>
            <div class="sc-qb1">${next_item.FumblesForced} </div>
            <div class="sc-qb1">${next_item.FumblesRecovered} </div>
            <div class="sc-qb1">${next_item.PassingInterceptions} </div>
            <div class="sc-qb1">${next_item.InterceptionReturnYards} </div>
            <div class="sc-qb1">${next_item.InterceptionReturnTouchdowns} </div>
            <div class="sc-qb1">${data[0].FantasyPointsPPR} </div>  
            </div>
    
            `;
            html += `
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }
    }

    if (next_item.Position == "S" || next_item.Position == "SS" || next_item.Position == "FS" || next_item.Position == "LS"|| next_item.Position == "DT")
    {
        let html0 = 
        `
        <div class="playerStatsWrap">
        
            <div class="playerStatsHeaderContainer">
            
                <div class="playerStatsHeader"><div class="hc-qb1">Week</div><div class="hc-qb1">Tackles</div><div class="hc-qb1">Solo Tackles</div><div class="hc-qb1">Assisted Tackles</div><div class="hc-qb1">Tackles For Loss</div><div class="hc-qb1">Passes Defended</div><div class="hc-qb1">Fumbles Forced</div><div class="hc-qb1">Fumbles Recovered</div><div class="hc-qb1">INT</div><div class="hc-qb1">Return Yards</div><div class="hc-qb1">INT Return Touchdowns</div><div class="hc-qb1">Fantasy</div></div>

            </div>

        </div>
        `;
        output0 += html0
        const testDIV0 = document.querySelector('.seasonStatsHeader')
        testDIV0.innerHTML = output0
        
        for(let j=0;j<data.length;j++){

            let next_item = data[j];

            let html =
            `
            <div class = okok>
            <div class="sc-qb1">${next_item.Week} </div>
            <div class="sc-qb1">${next_item.Tackles} </div>
            <div class="sc-qb1">${next_item.SoloTackles} </div>
            <div class="sc-qb1">${next_item.AssistedTackles} </div>
            <div class="sc-qb1">${next_item.TacklesForLoss} </div>
            <div class="sc-qb1">${next_item.PassesDefended} </div>
            <div class="sc-qb1">${next_item.FumblesForced} </div>
            <div class="sc-qb1">${next_item.FumblesRecovered} </div>
            <div class="sc-qb1">${next_item.PassingInterceptions} </div>
            <div class="sc-qb1">${next_item.InterceptionReturnYards} </div>
            <div class="sc-qb1">${next_item.InterceptionReturnTouchdowns} </div>
            <div class="sc-qb1">${data[0].FantasyPointsPPR} </div>  
            </div>
    
            `;
            html += `
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }
    }

    if (next_item.Position == "OLB" || next_item.Position == "ILB" || next_item.Position == "LB" || next_item.Position == "FB"|| next_item.Position == "OT"|| next_item.Position == "NT"|| next_item.Position == "DE"|| next_item.Position == "G")
    {
        let html0 = 
        `
        <div class="playerStatsWrap">
        
            <div class="playerStatsHeaderContainer">
            
                <div class="playerStatsHeader"><div class="hc-qb1">Week</div><div class="hc-qb1">Tackles</div><div class="hc-qb1">Solo Tackles</div><div class="hc-qb1">Assisted Tackles</div><div class="hc-qb1">Tackles For Loss</div><div class="hc-qb1">Passes Defended</div><div class="hc-qb1">Fumbles Forced</div><div class="hc-qb1">Fumbles Recovered</div><div class="hc-qb1">INT</div><div class="hc-qb1">Return Yards</div><div class="hc-qb1">INT Return Touchdowns</div><div class="hc-qb1">Fantasy</div></div>

            </div>

        </div>
        `;
        output0 += html0
        const testDIV0 = document.querySelector('.seasonStatsHeader')
        testDIV0.innerHTML = output0
        
        for(let j=0;j<data.length;j++){

            let next_item = data[j];

            let html =
            `
            <div class = okok>
            <div class="sc-qb1">${next_item.Week} </div>
            <div class="sc-qb1">${next_item.Tackles} </div>
            <div class="sc-qb1">${next_item.SoloTackles} </div>
            <div class="sc-qb1">${next_item.AssistedTackles} </div>
            <div class="sc-qb1">${next_item.TacklesForLoss} </div>
            <div class="sc-qb1">${next_item.PassesDefended} </div>
            <div class="sc-qb1">${next_item.FumblesForced} </div>
            <div class="sc-qb1">${next_item.FumblesRecovered} </div>
            <div class="sc-qb1">${next_item.PassingInterceptions} </div>
            <div class="sc-qb1">${next_item.InterceptionReturnYards} </div>
            <div class="sc-qb1">${next_item.InterceptionReturnTouchdowns} </div>
            <div class="sc-qb1">${data[0].FantasyPointsPPR} </div>  
            </div>
    
            `;
            html += `
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }
    }

    if (next_item.Position == "K") 
    {
        let html0 = 
        `
        <div class="playerStatsWrap">

            <div class="playerStatsHeaderContainer">
            
                <div class="playerStatsHeader"><div class="hc-qb1">Week</div><div class="hc-qb1">Field Goal ATT</div><div class="hc-qb1">Field Goals</div><div class="hc-qb1">LONG</div><div class="hc-qb1">Extra Points ATT</div><div class="hc-qb1">Extra Points</div><div class="hc-qb1">Draft Kings</div><div class="hc-qb1">Fan Duel</div></div>

            </div>

        </div>
        `;
        output0 += html0
        const testDIV0 = document.querySelector('.seasonStatsHeader')
        testDIV0.innerHTML = output0
        
        for(let j=0;j<data.length;j++){

            let next_item = data[j];

            let html =
            `
            <div class = okok>
            <div class="sc-qb1">${next_item.Week} </div>
            <div class="sc-qb1">${next_item.FieldGoalsAttempted} </div>
            <div class="sc-qb1">${next_item.FieldGoalsMade} </div>
            <div class="sc-qb1">${next_item.FieldGoalsLongestMade} </div>
            <div class="sc-qb1">${next_item.ExtraPointsAttempted} </div>
            <div class="sc-qb1">${next_item.ExtraPointsMade} </div>
            <div class="sc-qb1">${next_item.FantasyPointsDraftKings} </div>
            <div class="sc-qb1">${next_item.FantasyPointsFanDuel} </div>
            </div>
    
            `;
            html += `
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }
    }

    if (next_item.Position == "P") 
    {
        let html0 = 
        `
        <div class="playerStatsWrap">

            <div class="playerStatsHeaderContainer">
            
                <div class="playerStatsHeader"><div class="hc-qb1">Week</div><div class="hc-qb1">Punts</div><div class="hc-qb1">Punt YDS</div><div class="hc-qb1">Punt AVG</div><div class="hc-qb1">Punt LONG</div><div class="hc-qb1">Punt Inside 20</div><div class="hc-qb1">Punt Touchbacks</div></div>

            </div>

        </div>
        `;
        output0 += html0
        const testDIV0 = document.querySelector('.seasonStatsHeader')
        testDIV0.innerHTML = output0
        
        for(let j=0;j<data.length;j++){

            let next_item = data[j];

            let html =
            `
            <div class = okok>
            <div class="sc-qb1">${next_item.Week} </div>
            <div class="sc-qb1">${next_item.Punts} </div>
            <div class="sc-qb1">${next_item.PuntYards} </div>
            <div class="sc-qb1">${next_item.PuntAverage} </div>
            <div class="sc-qb1">${next_item.PuntLong} </div>
            <div class="sc-qb1">${next_item.PuntTouchbacks} </div>
            <div class="sc-qb1">${next_item.PuntInside20} </div>
            </div>
    
            `;
            html += `
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }
    }

}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup (team data)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Url Setup - runs automatically
let apiData_TeamData2 = 
{   
    url_TeamData2: 'https://api.sportsdata.io/v3/nfl/',
    field_TeamData2: 'scores/json/',
    input_TeamData2: 'Teams',
    key_TeamData2: keyID
}

// Url JSON string
let {url_TeamData2,field_TeamData2,input_TeamData2,key_TeamData2} = apiData_TeamData2
let apiUrl_TeamData2 = `${url_TeamData2}${field_TeamData2}${input_TeamData2}?${key_TeamData2}`
//console.log("Team data "+apiUrl_TeamData);

//Url Fetch
fetch(apiUrl_TeamData2) 
.then( (data) => 
{
    return data.json()
})
.then((nflStats2) => generateHtml_TeamData2(nflStats2))

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_TeamData2 = (data) => 
{
    // Original Html output is empty. We will compound buttons and html as the for loop progresses. 
    let output = "";
    let output2 = "";

    // Collect the total amount of data elements and repeat for each result
    for(let i=0;i<data.length;i++)
    {
        let next_item = data[i];

        if(next_item.Key == teamID)
        {
            // let html = 
            // `
            //     <div>${next_item.FullName}</div>
            //     <div>Head Coach ${next_item.HeadCoach}</div>
            //     <div>Offensive Coordinator ${next_item.OffensiveCoordinator}</div>
            //     <div>Defensive Coordinator ${next_item.DefensiveCoordinator}</div>
            //     <div>Special Teams Coach: ${next_item.SpecialTeamsCoach}</div></br>
            //     <div>Stadium ${next_item.StadiumDetails.Name}</div>
            //     <div>${next_item.StadiumDetails.City} ${next_item.StadiumDetails.State}</div>
            // `;
            // html += `
            //     <br />
            // `;
            // output += html
            // const testDIV = document.querySelector('.teamDataOutput')
            // testDIV.innerHTML = output

            document.querySelector('.playerPage').style.setProperty('--pc', "#"+next_item.PrimaryColor);
            document.querySelector('.playerPage').style.setProperty('--sc', "#"+next_item.SecondaryColor);
            document.querySelector('.playerPage').style.setProperty('--tc', "#"+next_item.TertiaryColor);

            let html2 = 
            `
                <div><img src=${next_item.WikipediaWordMarkUrl} class="homeTeamWordArt"></div>

            `;
            html2 += `
                
            `;
            output2 += html2
            const testDIV2 = document.querySelector('.teamLookOutput2')
            testDIV2.innerHTML = output2
        }
    }
}






// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup (projected season player stats)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Url Setup - runs automatically
// let apiData_PlayerStats =
// {   
//     url_PlayerStats: 'https://api.sportsdata.io/v3/nfl/',
//     field_PlayerStats: 'projections/json/PlayerSeasonProjectionStatsByPlayerID/2021/',
//     input_PlayerStats: playerID,
//     key_PlayerStats: keyID
// }

// // Url JSON string
// let {url_PlayerStats,field_PlayerStats,input_PlayerStats,key_PlayerStats} = apiData_PlayerStats
// let apiUrl_PlayerStats = `${url_PlayerStats}${field_PlayerStats}${input_PlayerStats}?${key_PlayerStats}`

// //Url Fetch
// fetch(apiUrl_PlayerStats) 
// .then( (data) => 
// {
//     return data.json()
// })
// .then((nflStats) => generateHtml_PlayerStats(nflStats))

// // Html display for loop retrieves information from (data) which is the API fetch output.
// const generateHtml_PlayerStats = (data) => 
// {
//     // // Original Html output is empty
//     // // We will compound buttons and html as the for loop progresses. 
//     let output = data;
    
//     if(data.Position == "QB")
//     {
//         const html =`
//         <div>Passing Attempts: ${data.PassingAttempts} </div>
//         <div>Passing Yards: ${data.PassingYards} </div>
//         <div>Completion Percentage: ${data.PassingCompletionPercentage} </div>
//         <div>Passing Touchdowns: ${data.PassingTouchdowns} </div>
//         <div>Rushing Touchdowns: ${data.RushingTouchdowns} </div>
//         <div>Touchdowns: ${data.Touchdowns} </div>
//         <div>Interceptions: ${data.PassingInterceptions} </div>
//         <div>Fumbles: ${data.Fumbles} </div>
//         <div>Passing Rating: ${data.PassingRating} </div>
//     `
//         const testDIV = document.querySelector('.statsOutput')
//         testDIV.innerHTML = html
//     }

//     if(data.Position == "WR")
//     {
//         const html =`
//         <div>Targets: ${data.ReceivingTargets} </div>
//         <div>Receptions: ${data.Receptions} </div>
//         <div>Receiving Yards: ${data.ReceivingYards} </div>
//         <div>Yards Per Reception: ${data.ReceivingYardsPerReception} </div>
//         <div>Receiving Touchdowns: ${data.ReceivingTouchdowns} </div>
//     `
//         const testDIV = document.querySelector('.statsOutput')
//         testDIV.innerHTML = html
//     }

//     if(data.Position == "RB")
//     {
//         const html =`
//         <div>Tackles: ${data.Tackles} </div>
//         <div>Solo Tackles: ${data.SoloTackles} </div>
//         <div>Assisted Tackles: ${data.AssistedTackles} </div>
//         <div>Sacks: ${data.Sacks} </div>
//         <div>Quarterback Hits: ${data.QuarterbackHits} </div>
//         <div>Passes Defended: ${data.PassesDefended} </div>
//         <div>Fumbles Forced: ${data.FumblesForced} </div>
//         <div>Defensive Touchdowns: ${data.DefensiveTouchdowns} </div>
//     `
//         const testDIV = document.querySelector('.statsOutput')
//         testDIV.innerHTML = html
//     }

//     if(data.Position == "K")
//     {
//         const html =`
//         <div>Field Goals Attempted: ${data.FieldGoalsAttempted} </div>
//         <div>Field Goals Made: ${data.FieldGoalsMade} </div>
//         <div>Extra Points Made: ${data.ExtraPointsMade} </div>
//     `
//         const testDIV = document.querySelector('.statsOutput')
//         testDIV.innerHTML = html
//     }
// }
