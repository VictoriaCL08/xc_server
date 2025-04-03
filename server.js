//to start running, type nodemon server.js in terminal
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

let houses =
    [
        {
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
    ];

app.get("/api/houses", (req, res)=>{
    res.send(houses);
});


let officers = [
    {
        "_id": 1,
        "position": "Cross Country President",
        "name": "Carina Burdick",
        "major": "Excercise Science",
        "year": "Junior",
        "home_town": "Irmo, SC",
        "favorite_event": "1600m",
        "img": "images/about-us/xc-prez.png"
    },
    {
        "_id": 2,
        "position": "Track and Field President",
        "name": "Sydney Rose",
        "major": "Excercise Science",
        "year": "Junior",
        "home_town": "Lexington, KY",
        "favorite_event": "400m and 4x400m",
        "img": "images/about-us/track-prez-pic.png"
    },
    {
        "_id": 3,
        "position": "Vice President",
        "name": "Ellie Toth",
        "major": "Biology",
        "year": "Junior",
        "home_town": "East Fishkill, NY",
        "favorite_event": "800m and 1500m",
        "img": "images/about-us/vp-pic.png"
    },
    {
        "_id": 4,
        "position": "Treasurer",
        "name": "Victoria Colon-LaBorde",
        "major": "Chemical Engineering",
        "year": "Junior",
        "home_town": "Aiken, SC",
        "favorite_event": "5K and 1600 m",
        "img": "images/about-us/treasurer-pic.png"
    },
    {
        "_id": 5,
        "position": "Secretary",
        "name": "Patrick Champion",
        "major": "Sports Management",
        "year": "Sophomore",
        "home_town": "Greenville, SC",
        "favorite_event": "10K",
        "img": "images/about-us/secretary-pic.png"
    },
    {
        "_id": 6,
        "position": "Primary Safety Officer",
        "name": "Michael Davis",
        "major": "Exercise Science",
        "year": "Senior",
        "home_town": "Columbia, SC",
        "favorite_event": "Half Marathon",
        "img": "images/about-us/safety-officer1.png"
    },
    {
        "_id": 7,
        "position": "Secondary Safety Officer",
        "name": "Bri Davis",
        "major": "Nursing",
        "year": "Junior",
        "home_town": "Redondo Beach, CA",
        "favorite_event": "200m",
        "img": "images/about-us/safety-officer2.png"
    }

];
app.get("/api/officers", (req, res)=>{
    res.send(officers);
});

let events = [

    {
        "_id": 1,
        "event_name": "Track Info Meeting",
        "event_date": "1/30/2025",
        "event_img": "images/semester-events/track-info-pic.png"
    },
    {
        "_id": 2,
        "event_name": "Valentine's Cookie Run",
        "event_date": "2/14/2025",
        "event_img": "images/semester-events/cookie-run.png"
    },
    {
        "_id": 3,
        "event_name": "Charlotte Outdoor Invite",
        "event_date": "2/22/2025",
        "event_img": "images/semester-events/track-pic.png"
    },
    {
        "_id": 4,
        "event_name": "4x4x48",
        "event_date": "2/21/2025-2/22/25",
        "event_img": "images/semester-events/night-4-4-48-img.png"
    },
    {
        "_id": 5,
        "event_name": "David Go Invitational",
        "event_date": "3/22/2025",
        "event_img": "images/semester-events/track-meet.png"
    },
    {
        "_id": 6,
        "event_name": "Bulldog Invitational Weekend Trip",
        "event_date": "3/28/2025",
        "event_img": "images/semester-events/track-night-img.png"
    },
    {
        "_id": 7,
        "event_name": "Palmetto Picnic",
        "event_date": "TBD",
        "event_img": "images/semester-events/palmetto-picnic.png"
    },
    {
        "_id": 8,
        "event_name": "Track Banquet",
        "event_date": "4/24/2025",
        "event_img": "images/semester-events/banquet-img.png"
    }
];
app.get("/api/events", (req,res)=>{
    res.send(events);
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



app.listen(3001, ()=>{
    console.log("I'm listening");
});