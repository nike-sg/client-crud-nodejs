// 40X - Client Side Error
// 50X - Server Side Error 

module.exports = {
  ERROR_STATUS_ARRAY: [
    {
      status: 1,
      method: "Controllers/AuthControler",
      message: "Nome ou senha inválidos.",
    },
    {
      status: 2,
      method: "Controllers/ClientControler",
      message: "Cliente não encontrado.",
    },
    {
      status: 3,
      method: "Middleware/Auth",
      message: "Essa rota requer autenticação."
    },
    {
      status: 4,
      method: "Middleware/Auth",
      message: "Token não autorizado."
    },
    {
      status: 5,
      method: "Controllers/ClientControler",
      message: "Nenhum cliente encontrado.",
    },
    {
      status: 6,
      method: "Controllers/ClientControler",
      message: "Erro ao salvar, tente novamente.",
    },
    {
      status: 7,
      method: "Controllers/ClientControler",
      message: "Erro ao apagar, tente novamente.",
    },
  ]
}