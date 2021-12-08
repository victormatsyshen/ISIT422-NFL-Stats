// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Variables
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Sets the API key globally across the whole js page. 
//keyID = 'key=4b5d1fc50f20475a99c5b658bc02c4c3';
keyID = 'key=783354be49d84d579e71dacb15dce0be';




//
//const teamKeyTS = "Seahawks"
//console.log("Team TS : " + teamKeyTS);
//const teamIDTS = ""

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Retrive URL parameters (team selected)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamKey = urlParams.get('id')
//console.log("Team Key: " + teamKey);

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
//console.log("Team data "+apiUrl_TeamData);

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
    let output2 = "";
    let output3 = "";

    // Collect the total amount of data elements and repeat for each result
    for(let i=0;i<data.length;i++)
    {
        let next_item = data[i];

        if(next_item.Key == teamKey)
        {
            let html = 
            `
                
                <div>${next_item.FullName}</div>
                <div>${next_item.HeadCoach}</div>
                <div>${next_item.OffensiveCoordinator}</div>
                <div>${next_item.DefensiveCoordinator}</div>
                <div>${next_item.SpecialTeamsCoach}</div>
                <div>${next_item.StadiumDetails.Name}</div>
                <div>${next_item.StadiumDetails.City} ${next_item.StadiumDetails.State}</div>
            `;
            html += `
                <br />
            `;
            output += html
            const testDIV = document.querySelector('.teamDataOutput')
            testDIV.innerHTML = output

            document.querySelector('.teamPage').style.setProperty('--pc', "#"+next_item.PrimaryColor);
            document.querySelector('.teamPage').style.setProperty('--sc', "#"+next_item.SecondaryColor);
            document.querySelector('.teamPage').style.setProperty('--tc', "#"+next_item.TertiaryColor);

            let html2 = 
            `
                <div><img src=${next_item.WikipediaWordMarkUrl} class="homeTeamWordArt"></div>

            `;
            html2 += `
                
            `;
            output2 += html2
            const testDIV2 = document.querySelector('.teamLookOutput')
            testDIV2.innerHTML = output2

            let html3 = 
            `
                <div><img src=${next_item.WikipediaLogoUrl} class="homeTeamWordArt"></div>

            `;
            html3 += `
                
            `;
            output3 += html3
            const testDIV3 = document.querySelector('.teamLookOutput2')
            testDIV3.innerHTML = output3
        }
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup (team standings)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Url Setup - runs automatically
let apiData_TeamStandings = 
{   
    url_TeamStandings: 'https://api.sportsdata.io/v3/nfl/',
    field_TeamStandings: 'scores/json/',
    input_TeamStandings: 'Standings/2021',
    key_TeamStandings: keyID
}

// Url JSON string
let {url_TeamStandings,field_TeamStandings,input_TeamStandings,key_TeamStandings} = apiData_TeamStandings
let apiUrl_TeamStandings = `${url_TeamStandings}${field_TeamStandings}${input_TeamStandings}?${key_TeamStandings}`
//console.log("Team Standings " + apiUrl_TeamStandings);

//Url Fetch
fetch(apiUrl_TeamStandings) 
.then( (data) => 
{
    return data.json()
})
.then((nflStats2) => generateHtml_TeamStandings(nflStats2))

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_TeamStandings = (data) => 
{
    // Original Html output is empty. We will compound buttons and html as the for loop progresses. 
    let output = "";
    let output2 = "";

    // Collect the total amount of data elements and repeat for each result
    for(let i=0;i<data.length;i++)
    {
        let next_item = data[i];

        if(next_item.Team == teamKey)
        {
            let html = 
            `
                <div>${next_item.Wins}</div>
                <div>${next_item.Losses}</div>
                <div>${next_item.Ties}</div>
                <div>${next_item.Percentage}</div>
                <div>${next_item.PointsFor}</div>
                <div>${next_item.PointsAgainst}</div>
                <div>${next_item.NetPoints}</div>
                <div>${next_item.Touchdowns}</div>
            `;
            html += `
                <br />
            `;
            output += html
            const testDIV = document.querySelector('.teamStandingsOutput')
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
    let output2 = "";

    // Collect the total amount of data elements and repeat for each result
    for(let i=0;i<data.length;i++)
    {
        let next_item = data[i];

        //test
        if (next_item.Number == null) {
            
            let html2 = 
            `
                <button type="button" id="${next_item.PlayerID}" class="playerButton" onClick="testFunction2(this.id)"> New Player!!!!!!!! <img src=${next_item.PhotoUrl} class="playerImage"> ${next_item.Name} ${next_item.Position} ${next_item.Age} ${next_item.Height} ${next_item.Weight}</button>
            `;
            html2 += `
                
            `;
            output2 += html2
            const testDIV2 = document.querySelector('.newPlayerOutput')
            testDIV2.innerHTML = output2

        }
        else{

            if (next_item.DeclaredInactive == true) {

                let html = 
                `
                <button type="button" id="${next_item.PlayerID}" class="playerButton" onClick="testFunction2(this.id)"> <img src=${next_item.PhotoUrl} class="playerImage"> <div class="pNumber">#${next_item.Number}</div>  <div class="pName">${next_item.Name}</div>  <div class="pPosition">${next_item.Position}</div>  <div class="pExp">${next_item.ExperienceString}</div>  <div class="pAge">${next_item.Age}</div>  <div class="pHeight">${next_item.Height}</div>  <div class="pWeight">${next_item.Weight}</div>  <div class="pStatus">${next_item.Status}</div><br /><br /><br /><div class="InjuryStat">Declared Inactive! Injury Location: Injury Status:</div></button>
                `;
                html += `
                    
                `;
                output += html
                const testDIV = document.querySelector('.playerOutput')
                testDIV.innerHTML = output
                
            }

            else{
                let html = 
                `
                <button type="button" id="${next_item.PlayerID}" class="playerButton" onClick="testFunction2(this.id)"> <img src=${next_item.PhotoUrl} class="playerImage"> <div class="pNumber">#${next_item.Number}</div>  <div class="pName">${next_item.Name}</div>  <div class="pPosition">${next_item.Position}</div>  <div class="pExp">${next_item.ExperienceString}</div>  <div class="pAge">${next_item.Age}</div>  <div class="pHeight">${next_item.Height}</div>  <div class="pWeight">${next_item.Weight}</div>  <div class="pStatus">${next_item.Status}</div></button>
                `;
                html += `
                    
                `;
                output += html
                const testDIV = document.querySelector('.playerOutput')
                testDIV.innerHTML = output
            }


                
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
// API Url Setup (Injury Report)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Url Setup - runs automatically
// let apiData_TeamInjuryData = 
// {   
//     url_TeamInjuryData: 'https://api.sportsdata.io/v3/nfl/',
//     field_TeamInjuryData: 'stats/json/Injuries/2021/10/',
//     input_TeamInjuryData: teamKey,
//     key_TeamInjuryData: keyID
// }

// // Url JSON string
// let {url_TeamInjuryData,field_TeamInjuryData,input_TeamInjuryData,key_TeamInjuryData} = apiData_TeamInjuryData
// let apiUrl_TeamInjuryData = `${url_TeamInjuryData}${field_TeamInjuryData}${input_TeamInjuryData}?${key_TeamInjuryData}`
// //console.log("Team Injuries "+apiUrl_TeamInjuryData);

// //Url Fetch
// fetch(apiUrl_TeamInjuryData) 
// .then( (data) => 
// {
//     return data.json()
// })
// .then((nflStats2) => generateHtml_TeamInjuryData(nflStats2))

// // Html display for loop retrieves information from (data) which is the API fetch output.
// const generateHtml_TeamInjuryData = (data) => 
// {
//     // Original Html output is empty. We will compound buttons and html as the for loop progresses. 
//     let output = "";

//     // Collect the total amount of data elements and repeat for each result
//     for(let i=0;i<data.length;i++)
//     {
//         let next_item = data[i];

//         let html = 
//             `
//                 <button type="button" id="${next_item.PlayerID}" onClick="testFunction2(this.id)"> #${next_item.Number} ${next_item.Name} ${next_item.Position} Declared Inactive: ${next_item.DeclaredInactive} Body Part: ${next_item.BodyPart} Status: ${next_item.Status}</button>
//             `;
//             html += `
//                 <br />
//             `;
//             output += html
//             const testDIV = document.querySelector('.injuryOutput')
//             testDIV.innerHTML = output
        
//     }
// }

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
//console.log("Player News: "+apiUrl_TeamNews);

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_TeamNews = (data) => 
{
    // // Original Html output is empty
    // // We will compound buttons and html as the for loop progresses. 
     let output = data;

     const html =`
     <div>${data[0].Title} </div></br>
     <div>${data[0].Content} </div></br>
     <div>Updated: ${data[0].Updated} </div>
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
   document.location.href = "http://localhost:4200/players?id=" + clicked_key +"&team=" + teamKey ;
}  
