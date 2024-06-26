using System.Linq.Expressions;
using dominio;
using InterfaceRepositorio;
using Microsoft.EntityFrameworkCore;

public class FilmeRepositorio : BaseRepositorio, IFilmeRepositorio
{
    public FilmeRepositorio(Contexto contexto) : base(contexto)
    {
    }

    public async Task<int> AddAsync(Filme entity)
    {
        await _contexto.Filmes.AddAsync(entity);
        await _contexto.SaveChangesAsync();

        return entity.Id;
    }

    public async Task DeleteAsync(Filme entity)
    {
        _contexto.Filmes.Remove(entity);
        await _contexto.SaveChangesAsync();
    }

    public async Task<IEnumerable<Filme>> FindAsync(Expression<Func<Filme, bool>> predicate)
    {
        return await _contexto.Filmes.Where(predicate).ToListAsync();
    }

    public async Task<IEnumerable<Filme>> GetAllAsync()
    {
        return await _contexto.Set<Filme>().ToListAsync();
    }

    public async Task<Filme> GetByIdAsync(int id)
    {
        return await _contexto.Filmes.Where(x => x.Id == id)
                                        .FirstOrDefaultAsync();
    }

    public async Task<bool> UpdateAsync(Filme entity)
    {
        _contexto.Filmes.Update(entity);
        await _contexto.SaveChangesAsync();

        return true;
    }
}