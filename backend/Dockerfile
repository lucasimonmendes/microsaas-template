# Usando a imagem oficial do Node.js
FROM node:18

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o package.json e o package-lock.json (ou yarn.lock) para instalar as dependências
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código da aplicação para o contêiner
COPY . .

# Expor a porta que o Fastify vai escutar
EXPOSE 3000

# Definir a variável de ambiente que pode ser usada no código, como o DB_URL, SECRET_KEY, etc.
ENV DATABASE_URL=postgres://user:password@localhost:5432/mydb
ENV SECRET_KEY=mysecretkey

# Comando para rodar a aplicação (iniciando o servidor Fastify)
CMD ["node", "index.js"]

