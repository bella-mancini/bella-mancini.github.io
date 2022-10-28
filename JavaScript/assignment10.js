//Problem 1
let CompJson1 = {
    "members": [
      {
        "name": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raiseEligible": true
      },
      {
        "name": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseEligible": true
      },
      {
        "name": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseEligible": false
      }
   
    ]
  }

  console.log(CompJson1);

//Problem 2
let CompJson2 = {
"companyName": "Tech Stars", 
"website": "www.techstars.site",
"employees": "array of Employees",
"members": [
    {
    "name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raiseEligible": true
    },
    {
    "name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raiseEligible": true
    },
    {
    "name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raiseEligible": false
    }
]
}
  console.log(CompJson2);

//Problem 3
  let CompJson3 = {
    "companyName": "Tech Stars", 
    "website": "www.techstars.site",
    "employees": "array of Employees",
    "members": [
        {
        "name": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raiseEligible": true
        },
        {
        "name": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseEligible": true
        },
        {
        "name": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseEligible": false
        },
        {
        "name":"Anna",
        "department":"Tech",
        "designation":"Executive",
        "salary": 25600,
        "raiseEligiblie": false
        }
    ]
    }
    console.log(CompJson3);

//Problem 4
let totalSalary = 0
for (let i =0; i < CompJson3.members.length; i++) {
    totalSalary += CompJson3.members[i]['salary'];
}
console.log(totalSalary);

//Problem 5

for (let i =0; i < CompJson3.members.length; i++) {
    if(CompJson3.members[i]['raiseEligible']=== true) {
        CompJson3.members[i]['salary'] *= 1.1;
    }
    CompJson3.members[i]['raiseEligible'] = false;
}

console.log(CompJson3);
//Problem 6
let CompJson4 = {
    "companyName": "Tech Stars", 
    "website": "www.techstars.site",
    "employees": "array of Employees",
    "members": [
        {
        "name": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raiseEligible": false,
        "wfh": true
        },
        {
        "name": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseEligible": false,
        "wfh": false
        },
        {
        "name": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseEligible": false,
        "wfh": false
        },
        {
        "name":"Anna",
        "department":"Tech",
        "designation":"Executive",
        "salary": 25600,
        "raiseEligiblie": false,
        "wfh": true
        }
    ]
    }
    
    console.log(CompJson4);

