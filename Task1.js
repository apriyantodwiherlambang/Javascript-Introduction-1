const biodata = {
	name: "Apriyanto Dwi Herlambang",
	age: 23,
    hobbies: ["Berenang","Camping","Travelling"],
    IsMaried: false,
    schoolList:
        [
            {
                name: "SMK Letris Indonesia 2",
                yearIn: 2014,
                yearOut: 2017,
                major: "Multimedia",
            },
            {
                name: "SMPN 9 Tangerang Selatan",
                yearIn: 2011,
                yearOut: 2014,
                major: null,
            },
            {
                name: "SDN Benda Baru III",
                yearIn: 2005,
                yearOut: 2011,
                major: null,
            }
        ],
    skills:
        [
            {
                skillName: "Microsoft Excel",
                level: "Beginner",
            },
            {
                skillName: "Design Grafis",
                level: "Beginner",
            }
        ],
    interestInCoding: true,
}

console.log(biodata)
// console.log(biodata.hobbies[2])
// console.log(biodata.skills[0].skillName)