using System.Linq.Expressions;
using dominio;
using InterfaceRepositorio;
using Microsoft.EntityFrameworkCore;
public class UsuarioRepositorio : BaseRepositorio, IUsuarioRepositorio
{
    public UsuarioRepositorio(Contexto contexto) : base(contexto)
    {
    }

    public async Task<int> AddAsync(Usuario entity)
    {
        await _contexto.Usuarios.AddAsync(entity);
        await _contexto.SaveChangesAsync();

        return entity.Id;
    }

    public async Task<bool> UpdateAsync(Usuario entity)
    {

        _contexto.Set<Usuario>().Update(entity);
        await _contexto.SaveChangesAsync();

        return true;
    }

    public async Task DeleteAsync(Usuario entity)
    {
        _contexto.Set<Usuario>().Remove(entity);
        await _contexto.SaveChangesAsync();
    }

    public async Task<IEnumerable<Usuario>> FindAsync(Expression<Func<Usuario, bool>> predicate)
    {
        return await _contexto.Usuarios.Where(predicate).ToListAsync();
    }

    public async Task<IEnumerable<Usuario>> GetAllAsync(bool ativo = true)
    {
        return await _contexto.Set<Usuario>().Where(x => x.Ativo == ativo).ToListAsync();
    }

    public async Task<Usuario> GetByIdAsync(int id, bool ativo = true)
    {

        return await _contexto.Usuarios.Where(x => x.Id == id)
                                        .Where(x => x.Ativo == ativo)
                                        .FirstOrDefaultAsync();
    }

    public async Task<Usuario> FindEmailAsync(string email)
    {
        return await _contexto.Usuarios.Where(x => x.Email == email).FirstOrDefaultAsync();
    }
}