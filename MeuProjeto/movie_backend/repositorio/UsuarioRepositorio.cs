using System.Linq.Expressions;
using dominio;
using InterfaceRepositorio;
using Microsoft.EntityFrameworkCore;
public class UsuarioRepositorio : IGernericoRepositorio<Usuario>
{
    private readonly Contexto _contexto;
    public UsuarioRepositorio(Contexto contexto)
    {
        _contexto = contexto;
    }

    public async Task<int> AddAsync(Usuario entity)
    {
        await _contexto.Set<Usuario>().AddAsync(entity);
        await _contexto.SaveChangesAsync();

        return entity.Id;
    }

    public async Task DeleteAsync(Usuario entity)
    {
        _contexto.Set<Usuario>().Remove(entity);
        await _contexto.SaveChangesAsync();
    }

    public async Task<IEnumerable<Usuario>> FindAsync(Expression<Func<Usuario, bool>> predicate)
    {
        return await _contexto.Set<Usuario>().Where(predicate).ToListAsync();
    }

    public async Task<IEnumerable<Usuario>> GetAllAsync(bool ativo = true)
    {
       return await _contexto.Set<Usuario>().Where(x => x.Ativo == ativo).ToListAsync();
    }

    public async Task<Usuario> GetByIdAsync(int id)
    {
        var user = await _contexto.Set<Usuario>().FindAsync(id);
        if (user != null)
        {
            return user;
        }
        return null;
    }

    public async Task UpdateAsync(Usuario entity)
    {
        _contexto.Set<Usuario>().Update(entity);
        await _contexto.SaveChangesAsync();
    }
}