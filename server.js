//to start running, type nodemon server.js in terminal
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const Joi = require("joi");
const mongoose = require("mongoose");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });



  mongoose
  .connect("mongodb+srv://VictoriaCL08:6ZIMDy4HR1RqhsJm@cluster0.2fsmm23.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("couldn't connect to mongodb", error);
  });

const officerSchema = new mongoose.Schema({///////////////////////////////////
    position:String,
    name:String,
    major:String,
    year:String,
    hometown:String,
    favorite_event:String,
    img:String
});

const Officer = mongoose.model("Officer", officerSchema);

const eventSchema = new mongoose.Schema({
    event_name:String,
    event_date:String,
    event_img:String
});

const Event = mongoose.model("Event", eventSchema);
/*
  
  const schema = new mongoose.Schema({
    name: String,
  });
  
  async function createMessage() {
    const result = await message.save();
    console.log(result);
  }
  
  //this creates a Message class in our app
  const Message = mongoose.model("Message", schema);
  const message = new Message({
    name: "Hello World",
  });
  
  createMessage();

*/

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/index.html");
});


let recordsMale = [
    {
        "_id":1,
        "event":"5K XC",
        "name":"Patrick Champion",
        "mark":"36:53",
        "meet":"McAlpine",
        "year":"2023"
    },
    {
        "_id":2,
        "event":"5K Track",
        "name":"Rylan Dodds",
        "mark":"14:42",
        "meet":"NIRCA Regionals",
        "year":"2017"
    },
    {
        "_id":3,
        "event":"8K XC",
        "name":"Brady Pinkerman",
        "mark":"26:26",
        "meet":"Mountaineer Invitational",
        "year":"2026"
    },
    {
        "_id":4,
        "event":"1600 m",
        "name":"Christian Geils",
        "mark":"12:43",
        "meet":"David Go Invitational",
        "year":"2024"
    },
    {
        "_id":5,
        "event":"800 m",
        "name":"Ryan Dixon",
        "mark":"2:30",
        "meet":"UGA Invitational",
        "year":"2022"
    },
    {
        "_id":6,
        "event":"200 m",
        "name":"Jack Wegmet",
        "mark":"0:41",
        "meet":"Bulldog Invitational",
        "year":"2023"
    },
    {
        "_id":7,
        "event":"High Jump",
        "name":"Drake Byron",
        "mark":"12\' 2\"",
        "meet":"UNC Chapel Hill Invitational",
        "year":"2023"
    },
];
app.get("/api/recordsMale", (req, res)=>{
    res.send(recordsMale);
})

let schedule = [
    {
        "_id": 1,
        "date_id": "Monday",
        "route": "Stadium",
        "mileage": "4-6 miles",
        "track": "2x100 m",
        "effort": "80%"
    },
    {
        "_id": 2,
        "date_id": "Tuesday",
        "route": "Track Workout",
        "mileage": "6x800 m",
        "track": "6x150 m",
        "effort": "70%"
    },
    {
        "_id": 3,
        "date_id": "Wednesday",
        "route": "Wheat",
        "mileage": "3-5 miles",
        "track": "3x300 m",
        "effort": "80%"
    },
    {
        "_id": 4,
        "date_id": "Thursday",
        "route": "Riverfront",
        "mileage": "4-8 miles",
        "track": "3x50 m",
        "effort": "90%"
    },
    {
        "_id": 5,
        "date_id": "Friday",
        "route": "Granby",
        "mileage": "3-4 miles",
        "track": "N/A",
        "effort": "N/A"
    }
];
app.get("/api/schedule", (req, res)=>{
    res.send(schedule);
})

//Houses
/*let houses = [
    {
    "_id":1,
    "name": "Farmhouse",
    "size": 2000,
    "bedrooms": 3,
    "bathrooms": 2.5,
    "features": [
    "wrap around porch",
    "attached garage"
    ],
    "main_image": "farm.webp",
    "floor_plans": [
    {
    "name": "Main Level",
    "image": "farm-floor1.webp"
    },
    {
    "name": "Basement",
    "image": "farm-floor2.webp"
    }
    ]
    },
    {
    "_id":2,
    "name": "Mountain House",
    "size": 1700,
    "bedrooms": 3,
    "bathrooms": 2,
    "features": [
    "grand porch",
    "covered deck"
    ],
    "main_image": "mountain-house.webp",
    "floor_plans": [
    {
    "name": "Main Level",
    "image": "mountain-house1.webp"
    },
    {
    "name": "Optional Lower Level",
    "image": "mountain-house2.webp"
    },
    {
    "name": "Main Level Slab Option",
    "image": "mountain-house3.jpg"
    }
    ]
    },
    {
    "_id":3,
    "name": "Lake House",
    "size": 3000,
    "bedrooms": 4,
    "bathrooms": 3,
    "features": [
    "covered deck",
    "outdoor kitchen",
    "pool house"
    ],
    "main_image": "farm.webp",
    "floor_plans": [
    {
    "name": "Main Level",
    "image": "lake-house1.webp"
    },
    {
    "name": "Lower Level",
    "image": "lake-house2.webp"
    }
    ]
    }
];*/

/*app.get("/api/houses", (req, res)=>{
    res.send(houses);
});


app.post("/api/houses", upload.single("img"), (req,res)=>{
    const result = validateHouse(req.body);


    if(result.error){
        console.log("I have an error");
        res.status(400).send(result.error.deatils[0].message);
        return;
    }

    const house = {
        _id: houses.length,
        name:req.body.name,
        size:req.body.size,
        bedrooms:req.body.bedrooms,
        bathrooms:req.body.bathrooms,
    };

    //adding image
    if(req.file){
        house.main_image = req.file.filename;
    }

    houses.push(house);
    res.status(200).send(house);
});

app.put("/api/houses/:id", upload.single("img"),(req,res)=>{
    const house = houses.find((house)=>house._id===parseInt(req.params.id));

    if(!house){
        res.status(404).send("The house with the provided id was not found");
        return;
    }

    const result = validateHouse(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    house.name = req.body.name;
    house.description = req.body.description;
    house.size = req.body.size;
    house.bathrooms = req.body.bathrooms;
    house.bedrooms = req.body.bedrooms;

    if(req.file){
        house.main_image = req.file.filename;
    }

    res.status(200).send(house);
});

app.delete("/api/houses/:id",(req,res)=>{
    console.log("I'm trying to delete" + req.params.id);
    const house = houses.find((house)=>house._id===parseInt(req.params.id));

    if(!house){
        console.log("Oh no i wasn't found");
        res.status(404).send("The house with the provided id was not found");
        return;
    }
    console.log("YAY You found me");
    console.log("The house you are deleting is " + house.name);
    const index = houses.indexOf(house);
    houses.splice(index,1);
    res.status(200).send(house);
});

const validateHouse = (house) => {
    const schema = Joi.object({
        _id:Joi.allow(""),
        name:Joi.string().min(3).required(),
        size:Joi.number().required().min(0),
        bedrooms:Joi.number().required().min(0),
        bathrooms:Joi.number().required().min(0),

    });

    return schema.validate(house);
};
*/
//Officers
/*let officers = [
    {
        "_id":1,
        "position": "Cross Country President",
        "name": "Carina Burdick",
        "major": "Excercise Science",
        "year": "Junior",
        "hometown": "Irmo, SC",
        "favorite_event": "1600m",
        "img": "xc-prez.png"
    },
    {
        "_id":2,
        "position": "Track and Field President",
        "name": "Sydney Rose",
        "major": "Excercise Science",
        "year": "Junior",
        "hometown": "Lexington, KY",
        "favorite_event": "400m and 4x400m",
        "img": "track-prez-pic.png"
    },
    {
        "_id":3,
        "position": "Vice President",
        "name": "Ellie Toth",
        "major": "Biology",
        "year": "Junior",
        "hometown": "East Fishkill, NY",
        "favorite_event": "800m and 1500m",
        "img": "vp-pic.png"
    },
    {
        "_id":4,
        "position": "Treasurer",
        "name": "Victoria Colon-LaBorde",
        "major": "Chemical Engineering",
        "year": "Junior",
        "hometown": "Aiken, SC",
        "favorite_event": "5K and 1600 m",
        "img": "treasurer-pic.png"
    },
    {
        "_id":5,
        "position": "Secretary",
        "name": "Patrick Champion",
        "major": "Sports Management",
        "year": "Sophomore",
        "hometown": "Greenville, SC",
        "favorite_event": "10K",
        "img": "secretary-pic.png"
    },
    {
        "_id":6,
        "position": "Primary Safety Officer",
        "name": "Michael Davis",
        "major": "Exercise Science",
        "year": "Senior",
        "hometown": "Columbia, SC",
        "favorite_event": "Half Marathon",
        "img": "safety-officer1.png"
    },
    {
        "_id":7,
        "position": "Secondary Safety Officer",
        "name": "Bri Davis",
        "major": "Nursing",
        "year": "Junior",
        "hometown": "Redondo Beach, CA",
        "favorite_event": "200m",
        "img": "safety-officer2.png"
    }

];*/

app.get("/api/officers", async (req, res)=>{
    const officers = await Officer.find();/////////////////////////////////////////////////////////////////////
    res.send(officers);
});

app.post("/api/officers", upload.single("img"), async (req,res)=>{
    const result = validateOfficer(req.body);


    if(result.error){
        console.log("I have an error");
        res.status(400).send(result.error.deatils[0].message);
        return;
    }

    const officer = new Officer({/////////////////////////////////////////////////////////////
        position:req.body.position,
        name:req.body.name,
        major:req.body.major,
        year:req.body.year,
        hometown: req.body.hometown,
        favorite_event:req.body.favorite_event,
    });
    if(req.file){
        officer.img =req.file.filename;
    }

    const newOfficer = await officer.save();
    res.status(200).send(newOfficer);///////////////////////////////////
});

app.put("/api/officers/:id", upload.single("img"),async(req,res)=>{

    /*const officer = officers.find((officer)=>officer._id===parseInt(req.params.id));
    
    if(!officer){
        res.status(404).send("The officer with the provided id was not found");
        return;
    }*/

    const result = validateOfficer(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const fieldsToUpdate = {
        position:req.body.position,
        name:req.body.name,
        major:req.body.major,
        year:req.body.year,
        hometown:req.body.hometown,
        favorite_event:req.body.favorite_event
    }


    if(req.file){
        fieldsToUpdate.img = req.file.filename;
        //officer.img = req.file.filename;
    }


    const wentThrough = await Officer.updateOne({_id:req.params.id}, fieldsToUpdate);
    const officer = await Officer.findOne({_id:req.params.id});


    res.status(200).send(officer);
});

app.delete("/api/officers/:id",async(req,res)=>{
    /*console.log("I'm trying to delete" + req.params.id);
    const officer = officers.find((officer)=>officer._id===parseInt(req.params.id));

    if(!officer){
        console.log("Oh no i wasn't found");
        res.status(404).send("The officer with the provided id was not found");
        return;
    }
    console.log("YAY You found me");
    console.log("The offcer you are deleting is " + officer.name);
    const index = officers.indexOf(officer);
    officers.splice(index,1);*/
    const officer = await Officer.findByIdAndDelete(req.params.id);
    res.status(200).send(officer);
});

const validateOfficer = (officer) => {
    const schema = Joi.object({
        _id:Joi.allow(""),
        position:Joi.string().min(3).required(),
        name:Joi.string().min(3).required(),
        major:Joi.string().min(3).required(),
        year:Joi.string().min(3).required(),
        hometown:Joi.string().min(3).required(),
        favorite_event:Joi.string().min(3).required(),
    });

    return schema.validate(officer);
};


//events
/*let events = [

    {
        "_id": 1,
        "event_name": "Track Info Meeting",
        "event_date": "1/30/2025",
        "event_img": "track-info-pic.png"
    },
    {
        "_id": 2,
        "event_name": "Valentine's Cookie Run",
        "event_date": "2/14/2025",
        "event_img": "cookie-run.png"
    },
    {
        "_id": 3,
        "event_name": "Charlotte Outdoor Invite",
        "event_date": "2/22/2025",
        "event_img": "track-pic.png"
    },
    {
        "_id": 4,
        "event_name": "4x4x48",
        "event_date": "2/21/2025-2/22/25",
        "event_img": "night-4-4-48-img.png"
    },
    {
        "_id": 5,
        "event_name": "David Go Invitational",
        "event_date": "3/22/2025",
        "event_img": "track-meet.png"
    },
    {
        "_id": 6,
        "event_name": "Bulldog Invitational Weekend Trip",
        "event_date": "3/28/2025",
        "event_img": "track-night-img.png"
    },
    {
        "_id": 7,
        "event_name": "Palmetto Picnic",
        "event_date": "TBD",
        "event_img": "palmetto-picnic.png"
    },
    {
        "_id": 8,
        "event_name": "Track Banquet",
        "event_date": "4/24/2025",
        "event_img": "banquet-img.png"
    }
];*/
app.get("/api/events", async(req,res)=>{
    const events = await Event.find();
    res.send(events);
})

app.post("/api/events", upload.single("img"), async(req,res)=>{
    const result = validateEvent(req.body);


    if(result.error){
        console.log("I have an error");
        res.status(400).send(result.error.deatils[0].message);
        return;
    }

    const event = new Event ({
        event_name:req.body.event_name,
        event_date:req.body.event_date,
    });

    //adding image
    if(req.file){
        event.event_img = req.file.filename;
    }

    const newEvent = await event.save();
    res.status(200).send(newEvent);
});

app.put("/api/events/:id", upload.single("img"),async(req,res)=>{
    /*const event = events.find((event)=>event._id===parseInt(req.params.id));

    if(!event){
        res.status(404).send("The event with the provided id was not found");
        return;
    }*/

    const result = validateEvent(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }


    const fieldsToUpdate = {
        event_name:req.body.event_name,
        event_date:req.body.event_date 
    }
  

    if(req.file){
        fieldsToUpdate.event_img = req.file.filename;
    }

    const wentThrough = await Event.updateOne({_id:req.params.id}, fieldsToUpdate);
    const event = await Event.findOne({_id:req.params.id});

    res.status(200).send(event);
});

app.delete("/api/events/:id",async(req,res)=>{
    const event = await Event.findByIdAndDelete(req.params.id);
    res.status(200).send(event);
});

const validateEvent = (event) => {
    const schema = Joi.object({
        _id:Joi.allow(""),
        event_name:Joi.string().min(1).required(),
        event_date:Joi.string().required().min(1),

    });

    return schema.validate(event);
};


//Club Records Female
let recordsFemale = [
    {
        "_id":1,
        "event":"5K XC",
        "name":"Victoria Colon-LaBorde",
        "mark":"15:42",
        "meet":"McAlpine",
        "year":"2023"
    },
    {
        "_id":2,
        "event":"5K Track",
        "name":"Carina Burdick",
        "mark":"15:42",
        "meet":"NIRCA Nationals",
        "year":"2024"
    },
    {
        "_id":3,
        "event":"6K XC",
        "name":"Willie Cuono",
        "mark":"19:00",
        "meet":"Mountaineer Invitational",
        "year":"2022"
    },
    {
        "_id":4,
        "event":"1600 m",
        "name":"Abby Sonderfan",
        "mark":"5:01",
        "meet":"USC Open",
        "year":"2025"
    },
    {
        "_id":5,
        "event":"800 m",
        "name":"Katy Hall",
        "mark":"2:20",
        "meet":"USC Open",
        "year":"2025"
    },
    {
        "_id":6,
        "event":"200 m",
        "name":"Meridith Moyer",
        "mark":"0:21",
        "meet":"Bulldog Invitational",
        "year":"2023"
    },
    {
        "_id":7,
        "event":"High Jump",
        "name":"Sydney Rose",
        "mark":"10\' 2\"",
        "meet":"Anderson Track Meet",
        "year":"2021"
    },
];
app.get("/api/recordsFemale", (req, res)=>{
    res.send(recordsFemale);
})

app.post("/api/recordsFemale",upload.single("img"), (req,res)=>{
    const result = validateRecordFemale(req.body);


    if(result.error){
        console.log("I have an error");
        res.status(400).send(result.error.deatils[0].message);
        return;
    }

    const recordFemale = {
        _id: recordsFemale.length,
        event:req.body.event,
        name:req.body.name,
        mark:req.body.mark,
        meet:req.body.meet,
        year:req.body.year,
    };

    recordsFemale.push(recordFemale);
    res.status(200).send(recordFemale);
});


/*app.put("/api/recordsFemale/:id", upload.single("img"),(req,res)=>{
    const recordFemale = recordsFemale.find((recordFemale)=>recordFemale._id===parseInt(req.params.id));

    if(!recordFemale){
        res.status(404).send("The record with the provided id was not found");
        return;
    }

    const result = validateRecordFemale(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    recordFemale.event = req.body.event;
    recordFemale.name = req.body.name;
    recordFemale.mark = req.body.mark;
    recordFemale.meet = req.body.meet;
    recordFemale.year = req.body.year;


    res.status(200).send(recordFemale);
});

app.delete("/api/recordsFemale/:id",(req,res)=>{
    console.log("I'm trying to delete" + req.params.id);
    const recordFemale = recordsFemale.find((recordFemale)=>recordFemale._id===parseInt(req.params.id));

    if(!recordFemale){
        console.log("Oh no i wasn't found");
        res.status(404).send("The record with the provided id was not found");
        return;
    }
    console.log("YAY You found me");
    console.log("The record you are deleting is " + recordFemale.name);
    const index = recordsFemale.indexOf(recordFemale);
    recordsFemale.splice(index,1);
    res.status(200).send(recordFemale);
});*/

const validateRecordFemale = (record) => {
    const schema = Joi.object({
        _id:Joi.allow(""),
        event:Joi.string().min(1).required(),
        name:Joi.string().min(3).required(),
        mark:Joi.string().min(1).required(),
        meet:Joi.string().min(1).required(),
        year:Joi.number().min(2015).required(),

    });

    return schema.validate(record);
};




//Club Records Male
app.get("/api/recordsMale", (req, res)=>{
    res.send(recordsMale);
});

app.post("/api/recordsMale",upload.single("img"), (req,res)=>{
    const result = validateRecordMale(req.body);


    if(result.error){
        console.log("I have an error");
        res.status(400).send(result.error.deatils[0].message);
        return;
    }

    const recordMale = {
        _id: recordsMale.length,
        event:req.body.event,
        name:req.body.name,
        mark:req.body.mark,
        meet:req.body.meet,
        year:req.body.year,
    };

    recordsMale.push(recordMale);
    res.status(200).send(recordMale);
});

const validateRecordMale = (record) => {
    const schema = Joi.object({
        _id:Joi.allow(""),
        event:Joi.string().min(1).required(),
        name:Joi.string().min(3).required(),
        mark:Joi.string().min(1).required(),
        meet:Joi.string().min(1).required(),
        year:Joi.number().min(2015).required(),

    });

    return schema.validate(record);
};




app.listen(3001, ()=>{
    console.log("I'm listening");
});