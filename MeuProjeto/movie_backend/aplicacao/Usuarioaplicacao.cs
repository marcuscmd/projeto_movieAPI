using dominio;

public class Usuarioaplicacao
{
    readonly UsuarioRepositorio _user;
    public Usuarioaplicacao(UsuarioRepositorio user)
    {
        _user = user;
    }

    public async Task<int> SalvarUsuario(Usuario usuario)
    {
        if (usuario == null)
            throw new Exception("Usuario não pode ser vazio!.");
        if (string.IsNullOrWhiteSpace(usuario.Senha))
            throw new Exception("Digite uma Senha");

        ValidarInformacoesUseario(usuario);

        return await _user.AddAsync(usuario);
    }

    




    private void ValidarInformacoesUseario(Usuario usuario)
    {
        if (string.IsNullOrWhiteSpace(usuario.Nome_Usuario))
            throw new Exception("Usuario não pode ser vazio!");
        if (string.IsNullOrWhiteSpace(usuario.Nome))
            throw new Exception("Nome não pode ser vazio!");
        if (string.IsNullOrWhiteSpace(usuario.Sobrenome))
            throw new Exception("Sobrenome não pode ser vazio!");
        if (string.IsNullOrWhiteSpace(usuario.Email))
            throw new Exception("E-mail não pode ser vazio!");
    }
}