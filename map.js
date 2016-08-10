document.addEventListener("DOMContentLoaded", function(event) {
    var mymap = L.map('mapid').setView([-39.0556, 174.0752], 14);

    CartoDB_Positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);

    var NPBHSMap = {
        "type": "Feature",
        "properties": {
            "name": "NPBHSMap"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        174.086749967419,
                        -39.06292211132337,
                        0
                    ],
                    [
                        174.0882198163584,
                        -39.06253439685104,
                        0
                    ],
                    [
                        174.0882288491133,
                        -39.06231662555486,
                        0
                    ],
                    [
                        174.0897465596614,
                        -39.06056708910926,
                        0
                    ],
                    [
                        174.0896458803044,
                        -39.05998053923674,
                        0
                    ],
                    [
                        174.090593849284,
                        -39.05951804425225,
                        0
                    ],
                    [
                        174.0897986412945,
                        -39.0577055163274,
                        0
                    ],
                    [
                        174.0885893635737,
                        -39.05795558458475,
                        0
                    ],
                    [
                        174.0885105686489,
                        -39.05837974535046,
                        0
                    ],
                    [
                        174.085085125748,
                        -39.05933602482082,
                        0
                    ],
                    [
                        174.086749967419,
                        -39.06292211132337,
                        0
                    ]
                ]
            ]
        }
    };

    L.geoJson(NPBHSMap, {
        style: function (feature) {
            switch (feature.properties.name) {
                case 'NPBHSMap':
                    return {color: "#ffff00"};
            }
        }
    })
        .addTo(mymap);

    L.marker([-39.0602746374351, 174.0876495838165]).addTo(mymap)
        .bindPopup("<b>NPBHS</b><br />New Plymouth Boys High School.").openPopup();
});

