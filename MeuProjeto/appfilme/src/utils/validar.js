export const ValidarEmail = (nome_Usuario) => {
    return nome_Usuario?.toString()
}

export const ValidarSenha = (senha) => {
    return senha?.toString().length > 2
}