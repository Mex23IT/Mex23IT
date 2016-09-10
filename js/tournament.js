var singleElimination = {
  "teams": [              // Matchups
    ["Team 1", "Team 2"], // First match
    ["Team 3", "Team 4"]  // Second match
  ],
  "results": [            // List of brackets (single elimination, so only one bracket)
    [                     // List of rounds in bracket
      [                   // First round in this bracket
        [1, 2],           // Team 1 vs Team 2
        [3, 4]            // Team 3 vs Team 4
      ],
      [                   // Second (final) round in single elimination bracket
        //[5, 6],           // Match for first place
        //[7, 8]            // Match for 3rd place
      ]
    ]
  ]
};

var teams = [
  {
    name: "GhostEagles",
    members: ["xX Egret Xx", "A Sloppy Joe", "Mex23IT"]
  },
  {
    name: "LeftDrivers",
    members: ["Mr Manuva27", "Adam Dex", "AnotherBrit"]
  },
  {
    name: "ILostMyBaby",
    members: ["KydRhyno", "Wtfunk24", "BabyGirl"]
  },
  {
    name: "Strangers",
    members: ["Exo1", "Exo2", "Exo3"]
  },
  {
    name: "Team 5",
    members: ["Exo1", "Exo2", "Exo3"]
  },
  {
    name: "QueenLovers",
    members: ["Awoken1", "Awoken2", "Awoken3"]
  },
  {
    name: "Team 7",
    members: ["Awoken1", "Awoken2", "Awoken3"]
  },
  {
    name: "Team 8",
    members: ["Awoken1", "Awoken2", "Awoken3"]
  }
];

var eightTeamsTournament = {
  teams : [
    [teams[0].name, teams[1].name],
    [teams[2].name, teams[3].name],
    [teams[4].name, teams[5].name],
    [teams[6].name, teams[7].name]
  ],
  results : [
    [ /* WINNER BRACKET */
      [
        [1,5], 
        [3,5], 
        [4,5], 
        [5,2]
      ],
      [
        [5,1], 
        [5,2]
      ],
      [
        [3,5], [5, 4]
      ]
  ]]
};

$('#demo').bracket({
  init: eightTeamsTournament
});
$('#teams').bracketTeams({
  init: teams
});

