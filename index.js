const {Client, Message} = require('discord.js');
const {token} = require('./config.json');

const client = new Client({
    
    intents: ['Guilds','GuildMembers','GuildMessages','MessageContent']

});

client.on('ready', () => {

    console.log('Pai ta On')

})

const falas = [
    'Pé de valsa',
    'Antonio quadrúpede',
    'Melhor item do jogo estandarte',
    'Até hoje',
    'Comer petróleo',
    'E as outras q eu já te mandei',
    'Vou roubar a namorada dele',
    'Vcs perdeu rouffman',
    'Parece que a minha mae ta acariciando a perna dele',
    'EU odeio escrever meu nome completo MEUDEUS',
    'skip ad... safado',
];

const IGNORE_PREFIX = "@";

client.on('messageCreate', message => {
    if (message.author.bot) return;

    const messageContent = message.content.toLowerCase();

    const palavraProcurada = 'moto';

    if (messageContent.includes(palavraProcurada)) {

        const r = Math.floor(Math.random() * falas.length);
        message.reply(`${falas[r]}`);

    }
});

client.login(token);