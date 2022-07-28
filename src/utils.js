export const capitalize = str => {
    const words = str.split(" ");
    console.log(words)
     for (let i = 0; i < words.length; i++) {
         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
     }
     console.log(words.join(" "))
     
     return words.join(" ");
     //return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
 }