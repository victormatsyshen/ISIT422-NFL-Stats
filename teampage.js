// Sets the API key globally across the whole js page. 
keyID = 'key=c0317e0db7f949468693647038bd0909';


// get url param ID
const queryString = window.location.search;
//console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const teamKey = urlParams.get('id')
console.log(teamKey);

//

// Url Setup - runs automatically
let apiData = 
{   
    url: 'https://api.sportsdata.io/v3/nfl/',
    field: 'scores/json/Players/',
    input: teamKey,
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

    // Collect the total amount of resataurant elements and repeat for each result
    for(let i=0;i<data.length;i++)
    {
        // This portion allows us to create the first two buttons that contain
        // the restaurant info and menu for each restaurant
        let next_item = data[i];
        let html = 
        `
            <button type="button" id="${next_item.PlayerID}" onClick="testFunction(this.id)">${next_item.Name}</br><img src=${next_item.PhotoUrl}></button>
        `;
        html += `
            <br />
        `;
        output += html
        const testDIV = document.querySelector('.playerOutput')
        testDIV.innerHTML = output

        //.addEventListener("click", testFunction());

        // function testFunction()
        // {
        //     console.log(next_item.FullName);
        // }   
    }
}

function testFunction(clicked_key)
{
   console.log("hi");
   console.log(clicked_key);
   document.location.href = "file:///C:/Users/Victor/Documents/School/2021%20Fall%20-%20ISIT%20422/Final/NFL%20Project%20v1/playerpage.html?id=" + clicked_key ;
}  



// Url Setup - runs automatically
let apiData2 = 
{   
    url2: 'https://api.sportsdata.io/v3/nfl/',
    field2: 'scores/json/',
    input2: 'Teams',
    key2: keyID
}

// Url JSON string
let {url2,field2,input2,key2} = apiData2
let apiUrl2 = `${url2}${field2}${input2}?${key2}`
console.log(apiUrl2);

//Url Fetch
fetch(apiUrl2) 
.then( (data) => 
{
    return data.json()
})
.then((nflStats2) => generateHtml2(nflStats2))

// Html display for loop retrieves information from (data) which is the API fetch output.
const generateHtml2 = (data) => 
{
    // Original Html output is empty
    // We will compound buttons and html as the for loop progresses. 
    let output = "";

    // Collect the total amount of resataurant elements and repeat for each result
    for(let i=0;i<data.length;i++)
    {
        // This portion allows us to create the first two buttons that contain
        // the restaurant info and menu for each restaurant
        let next_item = data[i];

        if(next_item.Key == teamKey)
        {
            let html = 
            `
                <div>${next_item.FullName}</div>
                <div>${next_item.HeadCoach}</div>
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