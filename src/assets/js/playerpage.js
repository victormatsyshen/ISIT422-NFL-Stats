// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Variables
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Sets the API key globally across the whole js page. 
//keyID = 'key=a95bac84d42f4b7d81ce5c7ac50ea139';
//keyID = 'key=4b5d1fc50f20475a99c5b658bc02c4c3';
keyID = 'key=617f9d4bc7b14be1bab19ade6797307f';

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
     <div>Updated: ${data[0].Updated} </div></br>
     <div>${data[0].Title} </div></br>
     <div>${data[0].Content} </div></br>
     <div>Source: ${data[0].Source} ${data[0].Url} </div>
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
    input_PlayerSeasonStats: '/' + playerID + '/3',
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

    // Collect the total amount of data elements and repeat for each result
    for(let i=0;i<data.length;i++)
    {
        let next_item = data[i];
        
        if (next_item.Position == "QB") {

            let html = 
            `
            <div>Season: ${next_item.Season} </div>
            <div>Week: ${next_item.Week} </div></br>

            <div>Passing Attempts: ${next_item.PassingAttempts} </div>
            <div>Passing Completions: ${next_item.PassingCompletions} </div>
            <div>Completion Percentage: ${next_item.PassingCompletionPercentage} </div>
            <div>Passing Yards: ${next_item.PassingYards} </div>
            <div>Passing Yards Per Attempt: ${next_item.PassingYardsPerAttempt} </div>
            <div>Passing Yards Per Completion: ${next_item.PassingYardsPerCompletion} </div>
            <div>Passing Touchdowns: ${next_item.PassingTouchdowns} </div>
            <div>Interceptions: ${next_item.PassingInterceptions} </div>
            <div>Passing Rating: ${next_item.PassingRating} </div>
            <div>Rushing Attempts: ${next_item.RushingAttempts} </div>
            <div>Rushing Yards: ${next_item.RushingYards} </div>
            <div>Rushing Yards Per Attempt: ${next_item.RushingYardsPerAttempt} </div>
            <div>Rushing Touchdowns: ${next_item.RushingTouchdowns} </div>
            <div>Fumbles: ${next_item.Fumbles} </div></br>

            <div>Fantasy Points PPR: ${data[0].FantasyPointsPPR} </div>
            <div>Fantasy Points Draft Kings: ${next_item.FantasyPointsDraftKings} </div>
            <div>Fantasy Points Fan Duel: ${next_item.FantasyPointsFanDuel} </div></br></br>
    
            `;
            html += `
                <br />
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }

        if (next_item.Position == "WR") {

            let html = 
            `
            <div>Season: ${next_item.Season} </div>
            <div>Week: ${next_item.Week} </div></br>

            <div>Receiving Targets: ${next_item.ReceivingTargets} </div>
            <div>Receptions: ${next_item.Receptions} </div>
            <div>Receiving Yards: ${next_item.ReceivingYards} </div>
            <div>Receiving Yards Per Reception: ${next_item.ReceivingYardsPerReception} </div>
            <div>Receiving Touchdowns: ${next_item.ReceivingTouchdowns} </div>
            <div>Receiving Long: ${next_item.ReceivingLong} </div>
            <div>Reception Percentage: ${next_item.ReceptionPercentage} </div>
            <div>Receiving Yards Per Target: ${next_item.ReceivingYardsPerTarget} </div>
            <div>Fumbles: ${next_item.Fumbles} </div></br>

            <div>Fantasy Points PPR: ${data[0].FantasyPointsPPR} </div>
            <div>Fantasy Points Draft Kings: ${next_item.FantasyPointsDraftKings} </div>
            <div>Fantasy Points Fan Duel: ${next_item.FantasyPointsFanDuel} </div></br></br>
    
            `;
            html += `
                <br />
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }

        if (next_item.Position == "RB" || next_item.Position == "TE") {

            let html = 
            `
            <div>Season: ${next_item.Season} </div>
            <div>Week: ${next_item.Week} </div></br>

            <div>Rushing Attempts: ${next_item.RushingAttempts} </div>
            <div>Rushing Yards: ${next_item.RushingYards} </div>
            <div>Rushing Yards Per Attempt: ${next_item.RushingYardsPerAttempt} </div>
            <div>Rushing Touchdowns: ${next_item.RushingTouchdowns} </div>
            <div>Rushing Long: ${next_item.RushingLong} </div>
            <div>Receiving Targets: ${next_item.ReceivingTargets} </div>
            <div>Receptions: ${next_item.Receptions} </div>
            <div>Receiving Yards: ${next_item.ReceivingYards} </div>
            <div>Receiving Yards Per Reception: ${next_item.ReceivingYardsPerReception} </div>
            <div>Receiving Touchdowns: ${next_item.ReceivingTouchdowns} </div>
            <div>Receiving Long: ${next_item.ReceivingLong} </div>
            <div>Reception Percentage: ${next_item.ReceptionPercentage} </div>
            <div>Receiving Yards Per Target: ${next_item.ReceivingYardsPerTarget} </div>
            <div>Fumbles: ${next_item.Fumbles} </div></br>

            <div>Fantasy Points PPR: ${data[0].FantasyPointsPPR} </div>
            <div>Fantasy Points Draft Kings: ${next_item.FantasyPointsDraftKings} </div>
            <div>Fantasy Points Fan Duel: ${next_item.FantasyPointsFanDuel} </div></br></br>
    
            `;
            html += `
                <br />
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }

        if (next_item.Position == "CB") {

            let html = 
            `
            <div>Season: ${next_item.Season} </div>
            <div>Week: ${next_item.Week} </div></br>

            <div>Tackles: ${next_item.Tackles} </div>
            <div>Solo Tackles: ${next_item.SoloTackles} </div>
            <div>Assisted Tackles: ${next_item.AssistedTackles} </div>
            <div>Tackles For Loss: ${next_item.TacklesForLoss} </div>
            <div>Passes Defended: ${next_item.PassesDefended} </div>
            <div>Fumbles Forced: ${next_item.FumblesForced} </div>
            <div>Fumbles Recovered: ${next_item.FumblesRecovered} </div>
            <div>Interceptions: ${next_item.PassingInterceptions} </div>
            <div>Interception Return Yards: ${next_item.InterceptionReturnYards} </div>
            <div>Interception Return Touchdowns: ${next_item.InterceptionReturnTouchdowns} </div>

            <div>Fantasy Points PPR: ${data[0].FantasyPointsPPR} </div>
    
            `;
            html += `
                <br />
            `;
            output += html
            const testDIV = document.querySelector('.seasonStatsOutput')
            testDIV.innerHTML = output
        }

        if (next_item.Position == "S" || next_item.Position == "SS") {

            let html = 
            `
            <div>Season: ${next_item.Season} </div>
            <div>Week: ${next_item.Week} </div></br>

            <div>Tackles: ${next_item.Tackles} </div>
            <div>Solo Tackles: ${next_item.SoloTackles} </div>
            <div>Assisted Tackles: ${next_item.AssistedTackles} </div>
            <div>Tackles For Loss: ${next_item.TacklesForLoss} </div>
            <div>Passes Defended: ${next_item.PassesDefended} </div>
            <div>Fumbles Forced: ${next_item.FumblesForced} </div>
            <div>Fumbles Recovered: ${next_item.FumblesRecovered} </div>
            <div>Interceptions: ${next_item.PassingInterceptions} </div>
            <div>Interception Return Yards: ${next_item.InterceptionReturnYards} </div>
            <div>Interception Return Touchdowns: ${next_item.InterceptionReturnTouchdowns} </div>

            <div>Fantasy Points PPR: ${data[0].FantasyPointsPPR} </div>
    
            `;
            html += `
                <br />
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
                <div><img src=${next_item.WikipediaLogoUrl} class="homeTeamLogo"></div>
                <div><img src=${next_item.WikipediaWordMarkUrl} class="homeTeamWordArt"></div>

            `;
            html2 += `
                <br />
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
