// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Variables
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Sets the API key globally across the whole js page. 
//keyID = 'key=4b5d1fc50f20475a99c5b658bc02c4c3';
keyID = 'key=617f9d4bc7b14be1bab19ade6797307f';

// Run Schedule Function
ApiSceduleData(2021,11,"scheduleOutput");

// Week and year search function



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Functions
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------
// Set Schedule
// ----------------------------------------------------------------------------------
function ApiSceduleData(ScheduleYear, ScheduleWeek, queryField)
{
    // Url Setup - runs automatically
    let apiData_ScheduleData = 
    {   
        url_ScheduleData: 'https://api.sportsdata.io/v3/nfl/',
        field_ScheduleData: 'scores/json/Scores/',
        input_ScheduleData: ScheduleYear,
        key_ScheduleData: keyID
    }

    // Url JSON string
    let {url_ScheduleData,field_ScheduleData,input_ScheduleData,key_ScheduleData} = apiData_ScheduleData
    let apiUrl_ScheduleData = `${url_ScheduleData}${field_ScheduleData}${input_ScheduleData}?${key_ScheduleData}`
    //console.log("Schedule data "+apiUrl_ScheduleData);

    //Url Fetch
    fetch(apiUrl_ScheduleData) 
    .then( (data) => 
    {
        return data.json()
    })
    .then((nflStats2) => generateHtml_ScheduleData(nflStats2))

    // Html display for loop retrieves information from (data) which is the API fetch output.
    const generateHtml_ScheduleData = (data) => 
    {
        // Original Html output is empty. We will compound buttons and html as the for loop progresses. 
        let output = "";

        // Collect the total amount of data elements and repeat for each result
        for(let i=0;i<data.length;i++)
        {
            let next_item = data[i];
            
            if (next_item.Week == ScheduleWeek) {

                let html = 
                `
                    <div class="testyy">
                        <div>Year: ${next_item.Season}</div>
                        <div>Week: ${next_item.Week}</div>
                        <div>Date: ${next_item.Date}</div>
                        <div>Home Team: ${next_item.HomeTeam}</div>
                        <div>Away Team: ${next_item.AwayTeam}</div>
                        <div>Home Score: ${next_item.HomeScore}</div>
                        <div>Away Score: ${next_item.AwayScore}</div>
                        <div>Is Over: ${next_item.IsOver}</div>
                    </div>
        
                `;
                html += `
                    <br />
                `;
                output += html
                const testDIV = document.querySelector('.' + queryField +'')
                testDIV.innerHTML = output
                
            }
        }
    }    
}  

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API Url Setup (team data)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Url Setup - runs automatically
let apiData_TeamData3 = 
{   
    url_TeamData3: 'https://api.sportsdata.io/v3/nfl/',
    field_TeamData3: 'scores/json/',
    input_TeamData3: 'Teams',
    key_TeamData3: keyID
}

// Url JSON string
let {url_TeamData3,field_TeamData3,input_TeamData3,key_TeamData3} = apiData_TeamData3
let apiUrl_TeamData3 = `${url_TeamData3}${field_TeamData3}${input_TeamData3}?${key_TeamData3}`
//console.log("Team data "+apiUrl_TeamData);

//Url Fetch
fetch(apiUrl_TeamData3) 
.then( (data) => 
{
    return data.json()
})
.then((nflStats3) => generateHtml_TeamData3(nflStats3))

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml_TeamData3 = (data) => 
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
                <div><img src=${next_item.WikipediaWordMarkUrl} class="homeTeamLogo"></div>

            `;
            html2 += `
                <br />
            `;
            output2 += html2
            const testDIV2 = document.querySelector('.teamLookOutput3')
            testDIV2.innerHTML = output2
        }
    }
}