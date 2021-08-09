const { readdirSync } = require("fs"); //requireing, the module for reading files 
const ascii = require("ascii-table"); //requiring ascii-table which is a great tool for creating ascii tables

let table = new ascii("Komutlar"); //creating a new table with the name "Commands"
table.setHeading("Komut", "Yükleme durumu");

module.exports = (client) => {
        const commands = readdirSync(`./ardademrkomutlar/`).filter(file => file.endsWith(".js")); //it will be only a command if it ends with .js
        for (let file of commands) { //for each file which is a command
            let pull = require(`../ardademrkomutlar/${file}`); //get informations
            if (pull.isim) { //get the name of the command
                client.komutlar.set(pull.isim, pull); //set the name of the command
                table.addRow(file, 'Hazır'); //log in table ready
            } else {
                table.addRow(file, `Hata -> Komut klasöründe isim yazılmamış.`); //if something wents wrong, do this
                continue; //and skip
            }
            if (pull.alternatifler && Array.isArray(pull.alternatifler)) pull.alternatifler.forEach(alias => client.alternatifler.set(alias, pull.isim)); //if there are aliases, do it too
        }
    console.log(table.toString()); //showing the table

}