using System.Linq.Expressions;
using dominio;

namespace InterfaceRepositorio;
public interface IFilmeRepositorio
{
    Task<Filme> GetByIdAsync(int id);
    Task<IEnumerable<Filme>> GetAllAsync();
    Task<IEnumerable<Filme>> FindAsync(Expression<Func<Filme, bool>> predicate);
    Task<int> AddAsync(Filme entity);
    Task<bool> UpdateAsync(Filme entity);
    Task DeleteAsync(Filme entity);
}
