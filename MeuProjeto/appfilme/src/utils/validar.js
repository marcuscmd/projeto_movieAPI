export const ValidarEmail = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.')
}

export const ValidarSenha = (senha) => {
    return senha?.toString().length > 2
}