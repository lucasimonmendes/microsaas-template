# Use uma imagem Python otimizada para FastAPI
FROM python:3.11-slim

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar arquivos de requisitos e instalar as dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar o código do backend para o diretório de trabalho no contêiner
COPY . .

# Expor a porta onde o FastAPI será executado
EXPOSE 8000

# Comando para iniciar o FastAPI com Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

