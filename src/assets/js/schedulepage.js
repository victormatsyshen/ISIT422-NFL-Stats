// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Variables
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Sets the API key globally across the whole js page. 
keyID = 'key=4b5d1fc50f20475a99c5b658bc02c4c3';

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
                    <div>Week: ${next_item.Season}</div>
                    <div>Week: ${next_item.Week}</div>
                    <div>Date: ${next_item.Date}</div>
                    <div>Home Team: ${next_item.HomeTeam}</div>
                    <div>Away Team: ${next_item.AwayTeam}</div>
                    <div>Home Score: ${next_item.HomeScore}</div>
                    <div>Away Score: ${next_item.AwayScore}</div>
                    <div>Is Over: ${next_item.IsOver}</div>
        
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