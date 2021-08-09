module.exports = {
    //definition
    isim: "arda", //the name of the command 
    alternatifler: [""], //every parameter can be an alias or empty for no aliases
    kullanımı: "komutlar ", //this is for the help command for EACH cmd
    Açıklaması: "Tüm komutları listeler.", //the description of the command

    çalıştır: async (client, message, args, user, text, prefix, newembed) => {
        console.log("arda") 
    }
};