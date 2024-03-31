var resume = [{
  "name": "G.Rajaguru",
  "email": "rajaguru246@gmail.com",
  "phone":"8667298624",
  
  "LOCATION": {
    "address": "35,old saram, pondy-13",
    "postalCode": "605013",
    "District":"Pondicherry",
    },
  "EDUCATION": {
  "institution": "Manonmaniam Sundaranar University",
  "college":"Achariya School of Business and Technology",
  "Degree": "B.Tech",
  "Duration": "2009-2013",
  "Percentage": "71.69"
  
},
  "SKILLS": {
  "name": "Full stack Developer ",
  "keywords":[
    "Java Script,",
    "HTML",
    "CSS,"
  ]
},
"LANGUAGES": {
  "language": "Tamil , English",
},
"INTEREST": {
  "name": "Listening music and Watching movie",
  "keywords": 
    "based on views",
  },
}];
/*for(var i in resume){
console.log(i,resume[i]);
}

 for(var i=0;i<resume.length;i++){
console.log(resume[i]);
}

for(var i of resume)
{ 
  console.log(resume[i],i);
}
*/
resume.forEach((a)=>
console.log(resume));

