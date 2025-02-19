[
    {
        "id": "206730fd3ba74447",
        "type": "tab",
        "label": "weather summary",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "fb5db7b50967e2cc",
        "type": "ui_dropdown",
        "z": "206730fd3ba74447",
        "name": "Select Country",
        "label": "Country",
        "tooltip": "",
        "place": "Select a country",
        "group": "f34d9e82.e7a5b",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "multiple": false,
        "options": [
            {
                "label": "United States",
                "value": "United States",
                "type": "str"
            },
            {
                "label": "Canada",
                "value": "Canada",
                "type": "str"
            },
            {
                "label": "Australia",
                "value": "Australia",
                "type": "str"
            },
            {
                "label": "United Kingdom",
                "value": "United Kingdom",
                "type": "str"
            },
            {
                "label": "Germany",
                "value": "Germany",
                "type": "str"
            },
            {
                "label": "France",
                "value": "France",
                "type": "str"
            },
            {
                "label": "Spain",
                "value": "Spain",
                "type": "str"
            },
            {
                "label": "Italy",
                "value": "Italy",
                "type": "str"
            },
            {
                "label": "China",
                "value": "China",
                "type": "str"
            },
            {
                "label": "India",
                "value": "India",
                "type": "str"
            },
            {
                "label": "Japan",
                "value": "Japan",
                "type": "str"
            },
            {
                "label": "Brazil",
                "value": "Brazil",
                "type": "str"
            },
            {
                "label": "Mexico",
                "value": "Mexico",
                "type": "str"
            },
            {
                "label": "South Africa",
                "value": "South Africa",
                "type": "str"
            },
            {
                "label": "Russia",
                "value": "Russia",
                "type": "str"
            },
            {
                "label": "South Korea",
                "value": "South Korea",
                "type": "str"
            },
            {
                "label": "Argentina",
                "value": "Argentina",
                "type": "str"
            },
            {
                "label": "Saudi Arabia",
                "value": "Saudi Arabia",
                "type": "str"
            },
            {
                "label": "Turkey",
                "value": "Turkey",
                "type": "str"
            },
            {
                "label": "Egypt",
                "value": "Egypt",
                "type": "str"
            },
            {
                "label": "Indonesia",
                "value": "Indonesia",
                "type": "str"
            },
            {
                "label": "Vietnam",
                "value": "Vietnam",
                "type": "str"
            },
            {
                "label": "Thailand",
                "value": "Thailand",
                "type": "str"
            },
            {
                "label": "Malaysia",
                "value": "Malaysia",
                "type": "str"
            },
            {
                "label": "Singapore",
                "value": "Singapore",
                "type": "str"
            },
            {
                "label": "New Zealand",
                "value": "New Zealand",
                "type": "str"
            },
            {
                "label": "Philippines",
                "value": "Philippines",
                "type": "str"
            },
            {
                "label": "Bangladesh",
                "value": "Bangladesh",
                "type": "str"
            },
            {
                "label": "Pakistan",
                "value": "Pakistan",
                "type": "str"
            },
            {
                "label": "Sri Lanka",
                "value": "Sri Lanka",
                "type": "str"
            },
            {
                "label": "Kenya",
                "value": "Kenya",
                "type": "str"
            },
            {
                "label": "Nigeria",
                "value": "Nigeria",
                "type": "str"
            },
            {
                "label": "Ghana",
                "value": "Ghana",
                "type": "str"
            },
            {
                "label": "Israel",
                "value": "Israel",
                "type": "str"
            },
            {
                "label": "Jordan",
                "value": "Jordan",
                "type": "str"
            },
            {
                "label": "Lebanon",
                "value": "Lebanon",
                "type": "str"
            },
            {
                "label": "UAE",
                "value": "UAE",
                "type": "str"
            },
            {
                "label": "Qatar",
                "value": "Qatar",
                "type": "str"
            },
            {
                "label": "Kuwait",
                "value": "Kuwait",
                "type": "str"
            },
            {
                "label": "Greece",
                "value": "Greece",
                "type": "str"
            },
            {
                "label": "Netherlands",
                "value": "Netherlands",
                "type": "str"
            },
            {
                "label": "Sweden",
                "value": "Sweden",
                "type": "str"
            },
            {
                "label": "Norway",
                "value": "Norway",
                "type": "str"
            },
            {
                "label": "Denmark",
                "value": "Denmark",
                "type": "str"
            },
            {
                "label": "Finland",
                "value": "Finland",
                "type": "str"
            },
            {
                "label": "Switzerland",
                "value": "Switzerland",
                "type": "str"
            },
            {
                "label": "Belgium",
                "value": "Belgium",
                "type": "str"
            },
            {
                "label": "Ireland",
                "value": "Ireland",
                "type": "str"
            },
            {
                "label": "Portugal",
                "value": "Portugal",
                "type": "str"
            },
            {
                "label": "Chile",
                "value": "Chile",
                "type": "str"
            },
            {
                "label": "Colombia",
                "value": "Colombia",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "country",
        "topicType": "str",
        "x": 120,
        "y": 200,
        "wires": [
            [
                "e191b145ee085f04"
            ]
        ]
    },
    {
        "id": "e191b145ee085f04",
        "type": "function",
        "z": "206730fd3ba74447",
        "name": "Build API URL",
        "func": "const apiKey = '12f175251a8a4d51a6774353241509'; // Replace with your actual API key\nconst country = msg.payload; // Selected country from dropdown\n\n// Build the WeatherAPI URL with the selected country\nmsg.url = https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=yes;\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 260,
        "y": 300,
        "wires": [
            [
                "cf1392c3cc5d589a"
            ]
        ]
    },
    {
        "id": "cf1392c3cc5d589a",
        "type": "http request",
        "z": "206730fd3ba74447",
        "name": "Fetch Weather Data",
        "method": "GET",
        "ret": "obj",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 480,
        "y": 300,
        "wires": [
            [
                "2b1e6382fcd0df47"
            ]
        ]
    },
    {
        "id": "2b1e6382fcd0df47",
        "type": "function",
        "z": "206730fd3ba74447",
        "name": "function 1",
        "func": "const weather = msg.payload.current;\nconst location = msg.payload.location;\nconst current = msg.payload.current;\nconst condition =msg.payload.current;\nmsg.payload = {\n    city:location.name,\n    region:location.region,\n    country:location.country,\n    celsius:current.temp_c,\n    fahrenheit:current.temp_f,\n    latitude:location.lat,\n    longitude:location.lon,\n    localtime:location.localtime,\n    cloud:condition.cloud,\n    humidity:condition.humidity,\n    feelscelsius:condition.feelslike_c,\n    feelsfahrenheit: condition.feelslike_f,\n    windspeed:condition.wind_kph,\n    winddirection:condition.wind_dir, \n    windchillcelsius:condition.windchill_c,\n    windchillfahrenheit: condition.windchill_f,\n};\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 700,
        "y": 300,
        "wires": [
            [
                "33d036f2504710c7",
                "dff7a417e5e032d8"
            ]
        ]
    },
    {
        "id": "dff7a417e5e032d8",
        "type": "ui_template",
        "z": "206730fd3ba74447",
        "group": "f34d9e82.e7a5b",
        "name": "Weather Info",
        "order": 2,
        "width": 0,
        "height": 0,
        "format": "<div>\n    <h3>Weather in {{msg.payload.city}}</h3>\n    <p>region:{{msg.payload.region}} </p>\n    <p>country:{{msg.payload.country}}</p>\n    <p>latitude: {{msg.payload.latitude}} </p> \n    <p>longitude:{{msg.payload.longitude}}</p>\n    <p>Date and time:{{msg.payload.localtime}}</p>\n    <p>cloud:{{msg.payload.cloud}}</p>\n    <p>Humidity: {{msg.payload.humidity}} %</p>\n    <p>feelscelsius:{{msg.payload.feelscelsius}} °C </p>\n    <p>windspeed: {{msg.payload.windspeed}} kmph </p>\n    <p>winddirection: {{msg.payload.winddirection}}</p>\n<p>windchillcelsius: {{msg.payload.windchillcelsius }}</p>\n<p>windchillfahrenheit: {{msg.payload.windchillfahrenheit }}</p>\n</div>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "x": 910,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "33d036f2504710c7",
        "type": "ui_gauge",
        "z": "206730fd3ba74447",
        "name": "",
        "group": "f34d9e82.e7a5b",
        "order": 3,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "gauge",
        "label": "units",
        "format": "{{msg.payload.celsius }}",
        "min": "-100",
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 890,
        "y": 260,
        "wires": []
    },
    {
        "id": "d329af4e9b2c79e8",
        "type": "inject",
        "z": "206730fd3ba74447",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 60,
        "wires": [
            [
                "fb5db7b50967e2cc"
            ]
        ]
    },
    {
        "id": "f34d9e82.e7a5b",
        "type": "ui_group",
        "name": "Weather",
        "tab": "c97b5bfb.37f5f8",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "c97b5bfb.37f5f8",
        "type": "ui_tab",
        "name": "Weather",
        "icon": "dashboard",
        "order": 1
    }
]