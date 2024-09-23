# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta parte do trabalho você deve detalhar a documentação dos requisitos do sistema proposto de acordo com as seções a seguir. Ressalta-se que aqui é utilizado como exemplo um sistema de gestão de cursos de aperfeiçoamento.

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades e funções do projeto Doe Aqui.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado Doe Aqui. (Ele terá somente um componente (módulo) com os devidos elementos necessários à gestão de cursos.)

### 3.2.2 Missão do produto
Facilitar a Doação e Encontrar Instituições: O principal objetivo do projeto é auxiliar as pessoas a aprenderem como doar de forma mais eficiente e a encontrar instituições locais que estejam realizando campanhas de caridade. Isso permitirá que mais indivíduos contribuam para causas nobres de maneira fácil e direta.

### 3.2.3 Limites do produto
O Doe Aqui não fornece nenhuma forma de entrega ou recolhimento de doações.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no cadastro de dados |	Essencial |
|2 | Facilidade na recuperação de informações | Essencial | 
|3 | Segurança com os dados coletados| Essencial | 
|4	| Praticidade no uso do software	| Recomendável | 
|5	| Software com o custo baixo | Recomendável | 


## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Agendamento de entrega |	O sistema deve permitir o usuário agendar um hórario para realizar uma entrega. |
| RF2	| Gerenciamento de ponto de doação |	O sistema deve permitir o gerenciamento do ponto de doação: criar, editar, salvar e excluir. |
| RF3 |	Históricos de doações	| O sistema deve permitir que o usuário veja seu histórico de doações. |
| RF4	| Login de empresas e pessoas físicas |	O sistema deve realizar o cadastro e login de pessoas físicas e empresas. |
| RF5	| Catálogo de demandas |	O Sistema deve ter um catálogo com todas as demandas de doações. |
| RF6	| Feedbacks (avaliações de ambas as partes) |	O sistema deve permitir o feedbacks tanto das pessoas que vai doar quanto do receptor. |
| RF7	| Categoria de tipos de doação |	O sistema deve categorizar os tipos de doação. |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1 | O sistema deve garantir a segurança dos dados de acordo com a LGPD. |
| RNF2 | O sistema deve possibilitar qualquer realização de tarefas em no máximo 4 cliques. |
| RNF3 |	O sistema deve processar requisições dos usuários de no máximo 3 segundos. |
| RNF4 |	O sistema deve ser desenvolvido na tecnologia JavaScript/React. |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Arrecadador |	Usuário responsável por anunciar, organizar e receber doações. |
| Doador |	Usuário que vai procurar pontos de coleta para realizar sua doação. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso

Como observado no diagrama de casos de uso da Figura 1, o usuario poderá exercer dois papeis no sistema, o de doador e o de arrecadador, o primeiro com a possibilidade  de listar pontos de coleta, e o segundo com o poder de gerenciar os pontos de coleta, criando, atualizando e excluindo.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](./images/Diagrama-casos-de-uso.jpg)
 
### 3.4.2 Descrições de Casos de Uso

#### Listar Ponto de Coleta (CSU01)

Sumário: O usuário consulta os pontos de coleta de acordo com os critérios de seu interesse.

Ator Primário: Doador / Arrecadador.

Pré-condições: N/A.

Fluxo Principal:

1)  O usuário acessa o sistema para buscar pontos de coleta.
2) 	O sistema apresenta uma lista de pontos de coleta com base na localização do usuário.
3) 	O usuário seleciona um ponto de coleta para visualizar seus detalhes.

Fluxo Alternativo (3): Inclusão

a) O Arrecadador solicita a inclusão de um ponto de coleta. <br>
b) O sistema apresenta uma janela solicitando informações do ponto de coleta. <br>
c) O Arrecadador fornece os dados solicitados. <br>
d) O sistema verifica se o ponto de coleta já está cadastrado. Se sim, o sistema informa o Arrecadador e retorna ao início; caso contrário, apresenta um formulário em branco para que os detalhes do ponto de coleta sejam preenchidos. <br>
e) O sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo ponto de coleta; caso contrário, informa o erro, solicita novos dados e repete a verificação. <br>

Fluxo Alternativo (3): Remoção

a) O Arrecadador seleciona um ponto de coleta e solicita sua remoção. <br>
b) Se o ponto de coleta puder ser removido, o sistema realiza a remoção; caso contrário, informa o Arrecadador. <br>

Fluxo Alternativo (3): Alteração

a) O Arrecadador altera um ou mais detalhes do ponto de coleta e solicita sua atualização. <br>
b) O sistema verifica a validade dos dados e, se forem válidos, atualiza as informações; caso contrário, informa o erro. <br>
 
Fluxo Alternativo (3): Detalhes

a) O Arrecadador opta por visualizar os detalhes de um ponto de coleta. <br>
b) O sistema apresenta uma lista de pontos de coleta. <br>
c) O Arrecadador seleciona o ponto de coleta desejado. <br>
d) O sistema apresenta os detalhes do ponto de coleta em um formulário. <br>

Pós-condições: Um ponto de coleta foi inserido, removido, seus dados foram alterados ou apresentados na tela.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![dcu](./images/Diagrama-classes.jpeg)

### 3.4.4 Descrições das Classes 

| # | Nome | Atributos | Métodos | Descrição |
|--------------------|------------------------------------|----------------------------------------|------------------------------------|------------------------------------|
| 1	|	Usuário | nome:String, e-mail:String, dataCadastro:Date | reclamar() |	Cadastro de informações e metodos relativos aos Usuários. |
| 2	| PJ | CNPJ:Number | setCNPJ(), adicionarCliente(), excluirCliente(), editarCliente(), rastrearDoacoes() |	Cadastro de informações e metodos relativos as Pessoas Jurídicas. |
| 3 |	PF | CPF:Number | setCPF(), doar() |	Cadastro de informações e metodos relativos as Pessoas Físicas. |
| 4 |	Doação |	nomeItem:String, descricaoItem:String, condicoes:String | adicionarDoacao() |	Cadastro de informações e metodos relativos as Doações. |
| 5	|	CNPJ |	CNPJ:Number |  |	Cadastro de informações relativos aos CNPJ. |
| 6	|	CPF |	CPF:Number |  |	Cadastro de informações relativos aos CPF. |
| 7	|	Interface Panel | | adicionarCliente(String), excluirCliente(String), editarCliente(String), rastearDoacoes() |	Cadastro de métodos relativos ao Interface Panel. |
