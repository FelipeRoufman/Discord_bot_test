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
    // Evita que o bot responda a si mesmo
    if (message.author.bot) return;

    // Conteúdo da mensagem
    const messageContent = message.content.toLowerCase();

    // Palavra a ser verificada na mensagem
    const palavraProcurada = 'moto';

    // Verifica se a mensagem contém a palavra
    if (messageContent.includes(palavraProcurada)) {

        const r = Math.floor(Math.random() * falas.length);
        message.reply(`${falas[r]}`);

    }
});

client.login(token);