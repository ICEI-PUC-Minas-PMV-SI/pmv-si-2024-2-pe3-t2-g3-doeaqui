
/**
 * O objeto `messager` contém duas funções para exibir mensagens de alerta
 * ao usuário.

 * Funções incluídas:
 * 1. `success`: exibe uma mensagem de sucesso quando o usuário é cadastrado com sucesso.
 * 2. `error`: exibe uma mensagem de erro quando o usuário já está cadastrado.

 * Ambas as funções não possuem parâmetros de entrada e a saída é uma exibição de
 * alerta no navegador.
 */
const messager = {
  success: () => alert("Usuario Cadastrado"),
  error: () => alert("Usuario existente"),
}
/**
 * Armazena um novo usuário no sistema. Primeiro verifica se o usuário já existe
 * na lista de usuários armazenados. Se o usuário existir, exibe uma mensagem de erro.
 * Caso contrário, adiciona o novo usuário à lista e exibe uma mensagem de sucesso.
 *
 * @param {Object} newUser - O novo usuário que será armazenado.
 * @return {void} Não retorna nenhum valor.
 */
function store(newUser) {
  const users = StorageData.getUsers();
  if (doesUserExist(users, newUser)) messager.error();
  else {
    StorageData.setUsers(newUser);
    messager.success();
  }
}
/**
 * Verifica se um usuário já existe na lista de usuários com base no CPF ou CNPJ.
 *
 * @param {Array} users - Lista de usuários existentes. Cada usuário é um objeto que contém ao menos as propriedades `cpf` e `cnpj`.
 * @param {Object} newUser - Novo usuário a ser verificado. Deve conter as propriedades `cpf` ou `cnpj`.
 * @return {boolean} - Retorna `true` se um usuário com o mesmo CPF ou CNPJ já existir na lista de usuários, caso contrário, retorna `false`.
 */
function doesUserExist(users, newUser) {
  return users.some(user => user.cpf === newUser.cpf || user.cnpj === newUser.cnpj);
}