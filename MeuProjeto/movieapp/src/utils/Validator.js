const validatorEmail = (email) => {
    return email?.toString().include('@') && email?.toString().includes('.')
}

const validatorSenha = (senha) => {
    return senha?.toString().length > 3
}

export {
    validatorEmail,
    validatorSenha,
}
