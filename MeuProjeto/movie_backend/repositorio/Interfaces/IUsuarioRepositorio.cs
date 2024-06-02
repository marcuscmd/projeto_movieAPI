using System.Linq.Expressions;
using dominio;

namespace InterfaceRepositorio;
public interface IUsuarioRepositorio
{
    Task<Usuario> GetByIdAsync(int id, bool ativo = true);
    Task<IEnumerable<Usuario>> GetAllAsync(bool ativo);
    Task<IEnumerable<Usuario>> FindAsync(Expression<Func<Usuario, bool>> predicate);
    Task<Usuario> FindEmailAsync(string email);
    Task<int> AddAsync(Usuario entity);
    Task<bool> UpdateAsync(Usuario entity);
    Task DeleteAsync(Usuario entity);
}
