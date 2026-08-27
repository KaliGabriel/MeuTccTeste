# Imagem oficial do Node.js

FROM node:22-alpine


# Diretório de trabalho dentro do container

WORKDIR /app


# Copia arquivos de dependências

COPY package*.json ./


# Instala dependências

RUN npm install


# Copia o restante da aplicação

COPY . .


# Porta utilizada pelo Express

EXPOSE 3000


# Comando de inicialização

CMD ["npm", "start"]