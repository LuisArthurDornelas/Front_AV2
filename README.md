### Requirements:
- Node.js
- React
- MySQL Database

## DB setup
```
mysqlsh
\connect root@localhost
CREATE DATABASE empresa_ti;
USE empresa_ti;
```

## Tables setup
To run this project, the DB named "empresa_ti" has to have the following tables:
- cliente
- servicoti
- meiopagamento
- servicopagamento

### Cliente
```
CREATE TABLE Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    dataNascimento DATE NOT NULL,
    telefone VARCHAR(20),
    estadoCivil ENUM('Solteiro', 'Casado', 'Divorciado', 'Viuvo'),
    escolaridade ENUM('1o grau incompleto', '1o grau completo', '2o grau completo', 'nível superior', 'pós-graduado')
);

```
### ServicoTI
```
CREATE TABLE ServicoTI (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    prazo INT NOT NULL
);

```

### Solicitacao
```
CREATE TABLE Solicitacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clienteId INT,
    servicoId INT,
    dataPedido DATE NOT NULL,
    status ENUM('Em Elaboração', 'Em Andamento', 'Concluído') DEFAULT 'Em Elaboração',
    dataPrevista DATE NOT NULL,
    meioPagamentoSigla CHAR(3),
    FOREIGN KEY (clienteId) REFERENCES Cliente(id),
    FOREIGN KEY (servicoId) REFERENCES ServicoTI(id)
);
```

### Meiopagamento
```
CREATE TABLE MeioPagamento (
    sigla CHAR(3) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    valorMaximo DECIMAL(10, 2) NOT NULL,
    meioEletronico TINYINT(1) NOT NULL
);
```

### Servicopagamento
```
CREATE TABLE ServicoPagamento (
    servicoId INT NOT NULL,
    meioPagamentoSigla CHAR(3) NOT NULL,
    PRIMARY KEY (servicoId, meioPagamentoSigla),
    FOREIGN KEY (servicoId) REFERENCES ServicoTI(id),
    FOREIGN KEY (meioPagamentoSigla) REFERENCES MeioPagamento(sigla)
);
```

To validate the creation of all tables, use `SHOW TABLES;` and then quit by using `\quit`

### Steps to run
## Run the backend
In the `backend` folder, run `node index.js`

## Run the frontent
In the `my-app` folder, run `npm start`

