const { joinVoiceChannel } = require('@discordjs/voice');
client.on('messageCreate', message => {
    if(message.content === '!join') {
        joinVoiceChannel({
            channelId: message.member.voice.channel.938965651886854185,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
    }
})