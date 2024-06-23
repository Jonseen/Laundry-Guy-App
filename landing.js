// const students = ["STEPHEN I. USEN",
//     "COURAGE G. AGWO",
//     "IKWA EVALSAN JOHN",
//     "JOSEPH EKPANG",
//     "INAH RICHARD E.",
//     "EDIDIONG IBANGA A.",
//     "BASSEY JOHN O.",
//     "ISAAC STEPHEN",
//     "TIVADAR RIJAMI EKPO",
//     "GODWIN ZION",
//     "PATRICK YVONNE",
//     "OFUOBASI PATRICK",
//     "JOHN INOK",
//     "JOSEPH SUBERU",
//     "UGOCHUKWU CLEMENT",
//     "OLISA",
//     "LAWRENCE",
//     "HYACINTH",
//     "PETER",
//     "VICTOR"
//     ];

//     let paired = [ ];
//     let pair = [ ];

//     // Checking for Number of Students - Must be Even

//     if (students.length % 2 != 0) {
//         console.log("You must have an even number of names, You currently have " + students.length + "names");
//     }

//     // Looping through the array to pair 

//     for (let i = 0; i < students.length; i++) {
//         let random = Math.floor(Math.random()*students.length)
//         // console.log(students[random]);
//         if(students[random] == students[i]) {
//             students[random] = students[random++];
//             picks.push(students[i] + " and " + students[random]);
//             used.push(students[random]);
//         } else {
//             picks.push(students[i] + " and " + students[random]);
//             used.push(students[random]);
//         }
        
//         }
