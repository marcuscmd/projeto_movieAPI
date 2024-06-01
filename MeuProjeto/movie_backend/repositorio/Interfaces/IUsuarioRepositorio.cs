using System.Linq.Expressions;
using dominio;

namespace InterfaceRepositorio;
public interface IUsuarioRepositorio
{
    Task<Usuario> GetByIdAsync(int id);
    Task<IEnumerable<Usuario>> GetAllAsync(bool ativo);
    Task<IEnumerable<Usuario>> FindAsync(Expression<Func<Usuario, bool>> predicate);
    Task<int> AddAsync(Usuario entity);
    void UpdateAsync(Usuario entity);
    Task DeleteAsync(Usuario entity);
}
