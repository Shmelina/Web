var Main = (function () {
    'use strict';
    var _tree = [
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
    ];
    function open_branch(e) {
        function insertAfter(elem, refElem) {
            var parent = refElem.parentNode;
            var next = refElem.nextSibling;
            if (next) {
                return parent.insertBefore(elem, next);
            } else {
                return parent.appendChild(elem);
            }
        }
        function getCurrentElem(n_line) {
            var ptr = _tree[1];
            for (let i = 1; i < n_line.length; i++) {
                ptr = ptr[n_line[i]][1];
            }
            return ptr;
        }
        e = e || window.event;
        var curr = e.currentTarget;
        var create_div = document.createElement("div");
        insertAfter(create_div, curr);
        var line;
        if (e.currentTarget.id == "main")
            line = "0";
        else
            line = e.currentTarget.id;
        var cur_elem = getCurrentElem(line);
        for (let i = 0; i < cur_elem.length; i++) {
            var p = document.createElement("p");
            p.id = line + i;
            p.innerHTML = cur_elem[i][0];
            if (cur_elem[i][1].length == 0)
                p.className = "leaf";
            else
                p.className = "branch";
            create_div.appendChild(p);
            if (p.className == "branch")
                p.onclick = open_branch;
        }
        curr.onclick = close_branch;
    }
    function close_branch(e) {
        e = e || window.event;
        let current = e.currentTarget;
        current.parentNode.removeChild(current.nextSibling);
        current.onclick = open_branch;
    }
    return {
        open_branch,
        close_branch,
    };
}());

document.getElementById("main").onclick = Main.open_branch;