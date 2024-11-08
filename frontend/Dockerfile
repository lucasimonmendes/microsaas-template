# Use uma imagem Node.js
FROM node:18-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json para instalar as dependências
COPY package*.json ./
RUN npm install

# Copiar o restante do código do frontend para o contêiner
COPY . .

# Construir o aplicativo Next.js
RUN npm run build

# Expor a porta onde o Next.js será executado
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "start"]

