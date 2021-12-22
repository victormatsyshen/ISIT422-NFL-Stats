var express = require('express');
var router = express.Router();

// mongoose is a API wrapper overtop of mongodb, just like
// .ADO.Net is a wrapper over raw SQL server interface
const mongoose = require("mongoose");

const TeamSchema = require("../TeamSchemaFile");  // bring in the defintion of our "schema"

// edited to include my non-admin, user level account and PW on mongo atlas
// and also to include the name of the mongo DB that the collection is in (TaskDB)
const dbURI =
  //"mongodb+srv://bcuser:bcuser@cluster0-nbt1n.mongodb.net/ToDosDB?retryWrites=true&w=majority";
  "mongodb+srv://BCstudent:BCstudent@nflcluster.vmjxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.



const options = {
  
  
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// Array
teamArray = [];

//constructor
function Team(pId, pName, pCount){
  this.id= pId;
  this.name = pName;
  this.click = pCount;
}






router.get('/teams', function(req, res) {
  // res.status(200).json(heroArray);
  //   console.log(heroArray);
  TeamSchema.find({}, (err, AllTeams) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    teamArray  = AllTeams;
    console.log(teamArray);
    res.status(200).json(teamArray);
  });
})


router.get('/teams/:id', function(req, res) {
  let found = false;
    for(var i=0; i < teamArray.length; i++)
    {
      if( teamArray[i].id == req.params.id)
      {
        console.log(teamArray[i]);
        found = true
        res.status(200).json(teamArray[i]);
      }
    }
    if(found === false){
      res.status(500).send("no such team");
      }

  });

router.put('/teams/:id', function(req, res) {
  var changedTeam = req.body; 
  var changedTeamid = req.params.id;

  TeamSchema.findOneAndUpdate(
    { id: changedTeamid }, // mongo lets you search by any field, not just its _id
    changedTeam,
    { new: false },  // true or false to let it add if not present?
    (err, updatedTeam) => {
      if (err) {
        console.log(changedTeam);
        res.status(500).send(err);
        
      }
      console.log(updatedTeam);
      res.status(200).json(updatedTeam);
    }
  )

 });

 // delete is used to delete existing object using the user's app id field
router.delete('/teams/:id', function (req, res) {
  TeamSchema.deleteOne({ id: req.params.id }, (err, teams) => { 
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Team successfully deleted" });
  });
});

/* post a new Team and push to Mongo */
router.post('/teams', function(req, res) {

 var changedTeam = req.body; 
 var changedTeamid = changedTeam.id;

TeamSchema.findOneAndUpdate({ id: changedTeamid }, { $inc: { count: 1 }},
  (err, updatedTeam) => {
    if (err) {
       console.log("error increment; " + err);
       res.status(500).send(err);
     }
     console.log("incremented");
     res.status(200).json(updatedTeam);
    
    });


//  TeamSchema.find({id: changedTeamid}, (err, OneTeam) => {
//    if (err) {
//      console.log("error in first find; " + err);
//      weHadError = true;
//      //res.status(500).send(err);
//    }
//    if (!OneTeam.length) {
//       console.log("no such team");
//       // need to add a team here    res.status(404);
//    }
//    else{
//    console.log("found this team: " + OneTeam);
//    OneTeam.count = OneTeam.count + 1;
   

//    TeamSchema.findOneAndUpdate(
//     { id: OneTeam.id }, // mongo lets you search by any field, not just its _id
//     OneTeam,
//     { new: false },  // true or false to let it add if not present?
//     (err, updatedTeam) => {
//       if (err) {
//         console.log("error in update: " + err);
//         res.status(500).send(err);
//       }
//       console.log(updatedTeam);
//       res.status(200).json(updatedTeam);
//     }
//   )




//    res.status(200).json(OneTeam);
//    }


 //});




  // insertTeam = new TeamSchema(newTeam);
  // console.log(insertTeam);
  // insertTeam.save((err,team) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //   else {
  //   res.status(201).json(team);
  //   }
  // });
});

module.exports = router;
