// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Variables
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Sets the API key globally across the whole js page. 
//keyID = 'key=4b5d1fc50f20475a99c5b658bc02c4c3';
keyID = 'key=e26076ffdde9493d92c912506c132ccc';

// Run Schedule Function
ApiSceduleData(2021,14,"scheduleOutput");

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
                        <div class="scheduleInfoHeadings">
                            <div>Year</div>
                            <div>Week</div>
                            <div>Date</div>
                            <div>Stadium</div>
                            <div>Is Over</div>
                        </div>
                        <div class="scheduleInfo">
                            <div>${next_item.Season}</div>
                            <div>${next_item.Week}</div>
                            <div>${next_item.Date}</div>
                            <div>${next_item.StadiumDetails.Name}, ${next_item.StadiumDetails.City} ${next_item.StadiumDetails.State}</div>
                            <div>${next_item.IsOver}</div>
                        </div>
                    
        
                `;
                html += `
                `;
                //output += html
                // const testDIV = document.querySelector('.' + queryField +'')
                // testDIV.innerHTML = output
                //console.log(html);

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
                .then( (data2) => 
                {
                    return data2.json()
                })
                .then((nflStats3) => generateHtml_TeamData3(nflStats3))

                // Html display for loop retrieves information from (data) which is the API fetch output.
                const generateHtml_TeamData3 = (data2) => 
                {
                    // Original Html output is empty. We will compound buttons and html as the for loop progresses. 
                    let output2 = "";
                    let output3 = "";

                    // Collect the total amount of data elements and repeat for each result
                    for(let j=0;j<data2.length;j++)
                    {
                        let next_item2 = data2[j];  

                        if (next_item.HomeTeam == next_item2.Key) {

                            html += 
                            `   <div class="homeTeam">
                                    <div>Home Team: <b>${next_item2.FullName}</b></div>
                                    <div><img src=${next_item2.WikipediaLogoUrl} class="homeTeamLogo2"></div>
                                    <div>${next_item2.FullName} Score: ${next_item.HomeScore}</div>
                                </div>
                            `;
                            html += `
                                
                            `;
                            output2 += html
                            //const testDIV2 = document.querySelector('.teamLookOutput3')
                            //testDIV2.innerHTML = output2

                            //document.querySelector('.schedulePage').style.setProperty('--pc', "#"+next_item2.PrimaryColor);

                        }
                    }

                    for(let k=0;k<data2.length;k++)
                    {
                        let next_item2 = data2[k];  

                        if (next_item.AwayTeam  == next_item2.Key) {

                            html += 
                            `
                                <div class="awayTeam">
                                    <div>Away Team: <b>${next_item2.FullName}</b></div>
                                    <div><img src=${next_item2.WikipediaLogoUrl} class="homeTeamLogo2"></div>
                                    <div>${next_item2.FullName} Score: ${next_item.AwayScore}</div>
                                </div>

                                </div>
                            `;
                            html += `
                                
                            `;
                            output += html
                            const testDIV2 = document.querySelector('.teamLookOutput3')
                            testDIV2.innerHTML = output

                            //document.querySelector('.schedulePage').style.setProperty('--pc', "#"+next_item2.PrimaryColor);

                        }
                    }
                }  
            }
        }
    }    
}  

// // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // API Url Setup (team data)
// // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Url Setup - runs automatically
// let apiData_TeamData3 = 
// {   
//     url_TeamData3: 'https://api.sportsdata.io/v3/nfl/',
//     field_TeamData3: 'scores/json/',
//     input_TeamData3: 'Teams',
//     key_TeamData3: keyID
// }

// // Url JSON string
// let {url_TeamData3,field_TeamData3,input_TeamData3,key_TeamData3} = apiData_TeamData3
// let apiUrl_TeamData3 = `${url_TeamData3}${field_TeamData3}${input_TeamData3}?${key_TeamData3}`
// //console.log("Team data "+apiUrl_TeamData);

// //Url Fetch
// fetch(apiUrl_TeamData3) 
// .then( (data2) => 
// {
//     return data2.json()
// })
// .then((nflStats3) => generateHtml_TeamData3(nflStats3))

// // Html display for loop retrieves information from (data) which is the API fetch output.
// const generateHtml_TeamData3 = (data2) => 
// {
//     // Original Html output is empty. We will compound buttons and html as the for loop progresses. 
//     let output2 = "";

//     // Collect the total amount of data elements and repeat for each result
//     for(let j=0;j<data2.length;j++)
//     {
//         let next_item2 = data2[j];

//         let html2 = 
//         `
//             <div><img src=${next_item2.WikipediaLogoUrl} class="homeTeamLogo"></div>
//         `;
//         html2 += `
//             <br />
//         `;
//         output2 += html2
//         const testDIV2 = document.querySelector('.teamLookOutput3')
//         testDIV2.innerHTML = output2
//     }
// }