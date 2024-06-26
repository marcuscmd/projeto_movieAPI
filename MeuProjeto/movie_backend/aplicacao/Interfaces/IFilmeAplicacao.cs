using System.Linq.Expressions;
using dominio;

public interface IFilmeAplicacao
{
    public Task<int> SalvarFilme(Filme entity);
    public Task<bool> AtualizarFilme(Filme entity);
    public  Task<Filme> ObterFilme(int id);
    public  Task<bool> Deletar(int id);
    public  Task<IEnumerable<Filme>> BuscarFilmes();
}