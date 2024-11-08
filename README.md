# MicroSaaS Template

Este é um template de microSaaS completo, projetado para facilitar o desenvolvimento de aplicativos SaaS modulares. Ele inclui um backend (FastAPI ou Express.js), um frontend (React ou Vue), e infraestrutura para deploy automatizado com Docker, Terraform, Ansible e Kubernetes.

## Índice

- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Comandos de Desenvolvimento](#comandos-de-desenvolvimento)
- [Deploy](#deploy)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Estrutura do Projeto

```plaintext
microsaas-template/
├── backend/
│   ├── Dockerfile                # Configuração Docker do backend
│   ├── app/
│   │   ├── main.py               # Backend (FastAPI ou Express.js)
│   │   └── requirements.txt      # Dependências do backend
│   └── tests/                    # Testes do backend
├── frontend/
│   ├── Dockerfile                # Configuração Docker do frontend
│   ├── src/
│   │   ├── index.html            # HTML inicial
│   │   ├── App.js                # Frontend (React ou Vue)
│   │   └── package.json          # Dependências do frontend
│   └── tests/                    # Testes do frontend
├── infra/
│   ├── docker-compose.yml        # Configuração Docker Compose
│   ├── terraform/                # Scripts Terraform para infraestrutura
│   ├── ansible/                  # Scripts Ansible para configuração e deploy
│   └── k8s/                      # Configurações Kubernetes
├── docs/                         # Documentação do projeto
├── .env.example                  # Exemplo de variáveis de ambiente
└── README.md                     # Documentação do template
```

## Pré-requisitos

- **Docker** e **Docker Compose**
- **Node.js** e **npm** ou **yarn**
- **Python** (para o backend) e **pip**
- **Terraform** e **Ansible** (opcional, para automação de infraestrutura)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/microsaas-template.git
   cd microsaas-template
   ```

2. Instale as dependências do backend e do frontend:

   - Backend (Python):

     ```bash
     cd backend/app
     pip install -r requirements.txt
     ```

   - Frontend (Node.js):

     ```bash
     cd frontend
     npm install
     ```

## Configuração

1. Copie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente conforme necessário:

   ```bash
   cp .env.example .env
   ```

2. Configure as variáveis de ambiente no arquivo `.env` conforme o ambiente de desenvolvimento e produção.

## Comandos de Desenvolvimento

### Backend

- Para rodar o backend:

  ```bash
  cd backend/app
  uvicorn main:app --reload
  ```

### Frontend

- Para rodar o frontend:

  ```bash
  cd frontend
  npm start
  ```

### Docker Compose

- Para rodar o projeto com Docker Compose:

  ```bash
  docker-compose -f infra/docker-compose.yml up --build
  ```

## Deploy

### Infraestrutura

- **Terraform**: Acesse o diretório `infra/terraform` e execute os comandos para inicializar e aplicar a infraestrutura:

  ```bash
  cd infra/terraform
  terraform init
  terraform apply
  ```

- **Ansible**: Configure o inventário e execute o playbook de deploy no diretório `infra/ansible`:

  ```bash
  cd infra/ansible
  ansible-playbook -i inventory playbook.yml
  ```

- **Kubernetes**: Os manifestos estão no diretório `infra/k8s`. Use `kubectl` para aplicar as configurações:

  ```bash
  kubectl apply -f infra/k8s/
  ```

## Testes

### Backend

Execute os testes do backend:

```bash
cd backend/tests
pytest
```

### Frontend

Execute os testes do frontend:

```bash
cd frontend
npm test
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
