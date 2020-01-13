var school={schoolName:"PICT"}
document.write("------Inherited Property toString from Object.prototype---------")
document.write("<br> Is SchoolName Property belongs to School: ")
document.write("schoolName" in school)
document.write("<br>Is toString Property belongs to School: ")
document.write("toString" in school)
document.write("<br>----hasOwnProperty Test----<br>")
document.write(school.hasOwnProperty("toString"))