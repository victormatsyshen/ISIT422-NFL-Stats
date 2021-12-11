// // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Variables
// // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Sets the API key globally across the whole js page. 
// //keyID = 'key=4b5d1fc50f20475a99c5b658bc02c4c3';
// keyID = 'key=617f9d4bc7b14be1bab19ade6797307f';

// // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Retrive URL parameters (team selected)
// // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // const queryString = window.location.search;
// // const urlParams = new URLSearchParams(queryString);
// // const teamKey = urlParams.get('id')
// // //console.log("Team Key: " + teamKey);

// // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // API Url Setup (team data)
// // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Url Setup - runs automatically
// let apiData_TeamData = 
// {   
//     url_TeamData: 'https://api.sportsdata.io/v3/nfl/',
//     field_TeamData: 'scores/json/',
//     input_TeamData: 'Teams',
//     key_TeamData: keyID
// }

// // Url JSON string
// let {url_TeamData,field_TeamData,input_TeamData,key_TeamData} = apiData_TeamData
// let apiUrl_TeamData = `${url_TeamData}${field_TeamData}${input_TeamData}?${key_TeamData}`
// //console.log("Team data "+apiUrl_TeamData);

// //Url Fetch
// fetch(apiUrl_TeamData) 
// .then( (data) => 
// {
//     return data.json()
// })
// .then((nflStats2) => generateHtml_TeamData(nflStats2))

// // Html display for loop retrieves information from (data) which is the API fetch output.
// const generateHtml_TeamData = (data) => 
// {
//     // Original Html output is empty. We will compound buttons and html as the for loop progresses. 
//     let output = "";

//     // Collect the total amount of data elements and repeat for each result
//     for(let i=0;i<data.length;i++)
//     {
//         let next_item = data[i];

//         if(next_item.Key == teamKey)
//         {
//             let html = 
//             `
                
//                 <div>${next_item.FullName}</div>
//                 <div>${next_item.HeadCoach}</div>
//                 <div>${next_item.OffensiveCoordinator}</div>
//                 <div>${next_item.DefensiveCoordinator}</div>
//                 <div>${next_item.SpecialTeamsCoach}</div>
//                 <div>${next_item.StadiumDetails.Name}</div>
//                 <div>${next_item.StadiumDetails.City} ${next_item.StadiumDetails.State}</div>
//             `;
//             html += `
//                 <br />
//             `;
//             output += html
//             const testDIV = document.querySelector('.teamDataOutput')
//             testDIV.innerHTML = output

//             document.querySelector('.teamPage').style.setProperty('--pc', "#"+next_item.PrimaryColor);
//             document.querySelector('.teamPage').style.setProperty('--sc', "#"+next_item.SecondaryColor);
//             document.querySelector('.teamPage').style.setProperty('--tc', "#"+next_item.TertiaryColor);

//         }
//     }
// }