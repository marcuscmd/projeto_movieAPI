using System.Linq.Expressions;
using dominio;

public interface IUsuarioAplicacao
{
    public Task<int> SalvarUsuario(Usuario usuario);
    public Task<bool> Atualizar(Usuario usuario);
    public  Task<bool> AtualizarSenha(Usuario usuario, string senhaAntiga);
    public  Task<Usuario> ObterUsuario(int id);
    public Task<Usuario> ObterEmail(string email);
    public  Task<bool> Deletar(int id);
    public  Task<bool> Restaurar(int id);
    public  Task<IEnumerable<Usuario>> GetAll(bool ativo);

}