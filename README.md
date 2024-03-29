# Dojo Websocket
O Projeto consiste em um fórum de envio de mensagens em tempo real

## Estrutura do Projeto
O projeto foi criado utilizando React JS e NodeJs utilizando socketio para conexão via websocket, sendo criado com uma base de monolito.

```
/src/config contém a conexão do socket com o servidor
/src/pages contém as páginas do sistema e suas lógicas
/src/templates contém o html das páginas e formulários
/backend/ contém o código do backend em nodejs
```

## Back-end
O Back-end foi gerado utilizando nodejs, para rodá-lo em desenvolvimendo é necessário executar os seguintes comandos:
```
cd backend/
npm install
npm start

O sistema irá rodar na porta 3333.
```

O Back-end é responsável por escutar os seguintes eventos do websocket:
```
connection - momento em que o usuário é conectado ao socket
send-post - momento em que um usuário envia uma nova postagem (mensagem) para plataforma
```
Além disso ele também é responsável por emitir os seguintes eventos:
```
all-posts - envia todos as postagens que foram realizadas até agora no momento em que o usuário é conectado
new-post - envia para todos os usuários uma postagem que acabou de ser recebida
```
O payload da postagem é o seguinte:
```
{
    nickname: string
    message: string
}
```

Material de suporte:

https://socket.io/docs/v4/emitting-events/

https://socket.io/docs/v4/listening-to-events/


## Front-end
Para inicializar a aplicação front-end basta executar os seguintes comandos:
```
npm install
npm start

o front-end iniciará na porta 3000
```
O front-end é responsável por escutar os seguintes eventos do websocket:
```
all-posts - esse evento é responsável por receber todos as postagens que foram enviados até o momento
new-post - esse evento é responsável por receber uma postagem que acabou de ser enviada
```

Além disso ele também deve emitir o seguinte evento:
```
send-post - esse evento é responsável por enviar para o servidor uma nova postagem na plataforma
```

O payload da postagem é o seguinte:
```
{
    nickname: string
    message: string
}
```

Material de suporte:

https://socket.io/pt-br/how-to/use-with-react