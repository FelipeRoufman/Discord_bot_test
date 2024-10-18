# Discord Bot: Moto Bot

Este é um bot simples que eu fiz para aprender a criar bots, os comandos dele vem em base de um amigo e foi feito para um grupo de amigos, fique aberto caso voce queira usar e modificar para o seu grupo

## Funcionalidades

- Detecta a palavra "moto" em mensagens de texto enviadas em canais do servidor.
- Responde com uma das frases aleatórias de uma lista predefinida.
- Ignora mensagens enviadas por outros bots.

## Pré-requisitos

Antes de rodar o bot, você precisa ter instalado:

- Node.js v16.6.0 ou superior.
- A biblioteca `discord.js`.
- Um arquivo `config.json` com o seu token de autenticação.

### Estrutura do `config.json`

```json
{
  "token": "SEU_TOKEN_AQUI"
}
```

## Como rodar o bot

Clone este repositório ou baixe os arquivos:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Instale as dependências do projeto:

```bash
npm install discord.js
```

Adicione o seu token de bot no arquivo `config.json`.

Execute o bot:

```bash
node index.js
```

Se tudo estiver correto, o bot exibirá a mensagem `Pai ta On` no terminal, indicando que está funcionando.

## Modificações

- **Falas**: Você pode modificar as frases que o bot responde editando o array `falas` no arquivo `index.js`.
- **Palavra-chave**: A palavra que o bot monitora pode ser alterada ao modificar a variável `palavraProcurada`.

## Contribuição

Se desejar contribuir, fique à vontade para fazer um fork deste repositório, criar suas modificações e abrir um pull request.
