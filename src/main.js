/**
 * @constant {Object} StorageKeys
 * @description Armazena as chaves utilizadas para acessar diferentes tipos de dados no armazenamento local.
 *
 * Propriedades:
 * - USERS: uma string que representa a chave para armazenamento de informações de usuários.
 * - CAMPANHAS: uma string que representa a chave para armazenamento de informações de campanhas.
 * - USER_LOGGED: uma string que representa a chave para armazenamento de informações do usuário atualmente logado.
 */
const StorageKeys = {
    USERS: "usuarios",
    CAMPANHAS: "campanhas",
    USER_lOGGED: "userLogged",
}


/**
 *  inicializar o localStorage com as chaves especificadas caso estas ainda não estejam presentes.
 *
 */
Object.values(StorageKeys).forEach((key) => {
    if (!localStorage.getItem(key)) localStorage.setItem(key, JSON.stringify([]));

});


/**
 * StorageData é um objeto que contém métodos para manipulação de dados armazenados no LocalStorage.
 * Cada método realiza operações de leitura, escrita, remoção e edição de dados associados às chaves definidas em StorageKeys.
 */
const StorageData = {
    getUsers: () => getItemFromLS(StorageKeys.USERS),
    getCampanhas: () => getItemFromLS(StorageKeys.CAMPANHAS),
    setUsers: (users) => setItemInLS(StorageKeys.USERS, users),
    setCampanhas: (campanhas) => setItemInLS(StorageKeys.CAMPANHAS, campanhas),
    removeUsers: (userId) => removeItemInLS(StorageKeys.USERS, userId),
    removeCampanhas: (campanhaId) => removeItemInLS(StorageKeys.CAMPANHAS, campanhaId),
    getLogged: () => getItemFromLS(StorageKeys.USER_lOGGED)[0],
    setLogged: (value) => setLoggedUser(value),
    editCampanha: (campanhaId, newData) => editItemInLS(StorageKeys.CAMPANHAS, campanhaId, newData),
}


/**
 * Recupera um item do Local Storage e o converte de volta para um objeto JavaScript.
 *
 * @param {string} key - A chave do item que será recuperado do Local Storage.
 * @return {Object|null} Retorna o objeto JavaScript armazenado no Local Storage ou null se não for encontrado.
 */
function getItemFromLS(key) {
    return JSON.parse(localStorage.getItem(key))
}


/**
 * Adiciona um item ao armazenamento local (localStorage) sob uma chave especificada.
 * Se a chave não existir no armazenamento, ela será criada com o novo item.
 * Cada item adicionado receberá um ID sequencial baseado no número de itens já existentes.
 *
 * @param {string} key - A chave sob a qual o item será armazenado no localStorage.
 * @param {object} value - O objeto que será adicionado ao armazenamento local. O objeto deve ser serializável em JSON.
 *
 * @return {void} Essa função não retorna um valor.
 */
function setItemInLS(key, value) {
    let storage = getItemFromLS(key)
    if (!storage) storage = []
    localStorage.setItem(key, JSON.stringify([...storage, {...value, id: storage.length + 1}]))
}


/**
 * Remove um item do armazenamento local (localStorage) com base na chave e no ID fornecidos.
 *
 * @param {string} key - A chave do item no localStorage.
 * @param {number} id - O ID do item que se deseja remover.
 * @return {void} Esta função não retorna valor.
 */
function removeItemInLS(key, id) {
    let storage = getItemFromLS(key)
    if (!storage) return
    let item = storage.find((item) => item.id === id)
    let index = storage.indexOf(item)
    if (index === -1) return
    storage.splice(index, 1)
    localStorage.setItem(key, JSON.stringify(storage))
}


/**
 * Edita um item específico no Local Storage, identificado por uma chave e um identificador, substituindo-o com novos dados.
 *
 * @param {string} key - A chave do Local Storage onde o item está armazenado.
 * @param {number|string} id - O identificador único do item a ser editado.
 * @param {Object} newData - Os novos dados a serem armazenados no lugar do item antigo.
 * @return {void} - Não retorna nada.
 */
function editItemInLS(key, id, newData) {
    let storage = getItemFromLS(key)
    if (!storage) return
    let item = storage.find((item) => item.id === id)
    let index = storage.indexOf(item)
    if (index === -1) return
    storage.splice(index, 1)
    localStorage.setItem(key, JSON.stringify([...storage, newData]))
}


/**
 * Armazena o estado de login do usuário no localStorage.
 *
 * Esta função salva o valor recebido, que indica se o usuário está logado ou não,
 * no localStorage sob a chave `USER_LOGGED`. O valor é convertido em uma string
 * JSON antes de ser armazenado.
 *
 * @param {Object} value - o objeto com os dados do usuario logado que devem ser salvos no.
 * @return {void} Esta função não retorna nenhum valor.
 */
function setLogged(value) {
    localStorage.setItem(StorageKeys.USER_lOGGED, JSON.stringify(value))
}


function setLoggedUser(value) {
    localStorage.setItem(StorageKeys.USER_lOGGED, JSON.stringify([value]))
}

