using dominio;
using InterfaceRepositorio;

public class UsuarioAplicacao : IUsuarioAplicacao
{
    private readonly IUsuarioRepositorio _user;
    public UsuarioAplicacao(IUsuarioRepositorio user)
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

    public async Task<bool> AtualizarSenha(Usuario usuario, string senhaAntiga)
    {
        var userId = await _user.GetByIdAsync(usuario.Id);
        if (userId == null)
            throw new Exception("Usuario não encontrado");
        if (userId.Senha != senhaAntiga)
            throw new Exception("Senha antiga invalida");

        userId.Senha = usuario.Senha;

        await _user.UpdateAsync(userId);
        return true;
    }

    public async Task<bool> Atualizar(Usuario usuario)
    {
        var userId = await _user.GetByIdAsync(usuario.Id, true);
        if (userId == null)
            throw new Exception("Usuario não encontrado");
        ValidarInformacoesUseario(usuario);

        userId.Nome_Usuario = usuario.Nome_Usuario;
        userId.Nome = usuario.Nome;
        userId.Sobrenome = usuario.Sobrenome;
        userId.Email = usuario.Email;
        userId.CreatedAt = userId.CreatedAt;
        userId.Ativo = true;

        await _user.UpdateAsync(userId);

        return true;
    }

    public async Task<Usuario> ObterUsuario(int id)
    {
        var userId = await _user.GetByIdAsync(id);
        if (userId == null)
            throw new Exception("Usuario não encontrado");

        return userId;
    }

    public async Task<Usuario> ObterEmail(string email)
    {
        var userId = await _user.FindEmailAsync(email);
        if (userId == null)
            throw new Exception("Usuario não encontrado");

        return userId;
    }

    public async Task<bool> Deletar(int id)
    {
        var userId = await _user.GetByIdAsync(id);
        if (userId == null)
            throw new Exception("Usuario não encontrado");

        userId.Deletar();
        await _user.UpdateAsync(userId);

        return true;
    }

    public async Task<bool> Restaurar(int id)
    {
        var userId = await _user.GetByIdAsync(id, false);
        if (userId == null)
            throw new Exception("Usuario não encontrado");

        userId.Restaurar();
        await _user.UpdateAsync(userId);

        return true;
    }

    public async Task<IEnumerable<Usuario>> GetAll(bool ativo)
    {
        return await _user.GetAllAsync(ativo);
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