using System.Linq.Expressions;
using dominio;

public interface IUsuarioAplicacao
{
    public Task<int> SalvarUsuario(Usuario usuario);
    public void Atualizar(Usuario usuario);
    public  void AtualizarSenha(Usuario usuario, string senhaAntiga);
    public  Task<Usuario> ObterUsuario(int id);
    public  void Deletar(int id);
    public  void Restaurar(int id);
    public  Task<IEnumerable<Usuario>> GetAll(bool ativo);

}