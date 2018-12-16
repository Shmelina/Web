const express = require("express");
const app     = express();
const path    = require("path");

const data = {
    tree: [
        "main",
        [
            ["1", [
                ["11", []],
                ["12", []],
                ["13", []],
                ["14", [
                    ["141", []],
                    ["142", []]
                ]]
            ]
            ],
            ["2", [
                ["21", [
                    ["211",
                        [["2111", []]]
                    ]
                ]
                ],
                ["22", [
                    ["221",
                        [["2211", []]]
                    ]
                ]
                ],
                ["23", []],
                ["24", []]
            ]
            ],
            ["3", [
                ["31", []],
                ["32", []]
            ]
            ],
            ["4", [
                ["41", []]
            ]
            ],
            ["5", [
                ["51", []],
                ["52", []]
            ]
            ]
        ]
    ]
};

app.use(express.static('docs'));

app.get('/',function(req,res){
    res.sendFile(path.resolve('./docs/index.html'));
});

app.get('/data', function (req, res) {
    res.send(data);
    res.end();
});

console.log("Running at localhost:8081");
app.listen(8081);
