# API GoBarber
## Pré-requisito
:rotating_light:Esse projeto faz uso de algumas tecnologias obrigatorias para o fucionamento da aplicação, antes de seguir em frente certifique-se que o **Docker** e **Nodejs** na versão **12.14.1** ou superios, estejam instalados no seu computador.

- Instale o postgresSQL, mongodb com as mesmas configurações do arquivo ``./backend/ormconfig`` e redis com as configurações da variavel de ambiente no seu ambiente usando **Docker** ou **instalador**


**Instalando as Dependências** 

  Para instalar as dependências necessarias e gerar a pasta **```node_modules```** execute o comando:
  ```
  yarn
  ```
  OU
  ```
  npm install
  ```
  :rotating_light:**obs**:recomendamos que seja utilizado o **``yarn``**
  
**Incializando as variaveis de ambiente**

  Dentro do diretorio **``` ./backend/.env.example```**, altere os dados de acordo com a configuração das suas variaveis de ambiente e depois renomeie o arquivo para **```.env```**.
  :rotating_light:**obs**:não é necessário preencher as variáveis da aws
  
**Inicialização do servidor**

  Para inicializar o servidor, no terminal execute o comando ``/backend``:
  ```
  yarn dev:server
  ```
  Se desejar iniciar o servidor juntamente com **```degub```** do **```vscode```**, execute o seguinte comando:
  ```
  yarn dev:degub
  ```
  
#### :memo: Licença

  Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

  
 ##### **Feito com :heart: by Hyago Braga**
