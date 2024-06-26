using dominio;
using InterfaceRepositorio;

public class FilmeAplicacao : IFilmeAplicacao
{
    private readonly IFilmeRepositorio _filme;
    public FilmeAplicacao(IFilmeRepositorio filme)
    {
        _filme = filme;
    }
    public async Task<Filme> ObterFilme(int id)
    {
        var filmeId = await _filme.GetByIdAsync(id);
        if (filmeId == null)
            throw new Exception("Filme não encontrado");

        return filmeId;
    }
    public async Task<int> SalvarFilme(Filme filme)
    {
        if (filme == null)
            throw new Exception("Filme não pode ser vazio!.");

        ValidarInformacoesUseario(filme);

        return await _filme.AddAsync(filme);
    }
    public async Task<bool> AtualizarFilme(Filme filme)
    {
        var filmeId = await _filme.GetByIdAsync(filme.Id);
        if (filmeId == null)
            throw new Exception("Filme não encontrado ou não pode ser alterado!");

        filmeId.Titulo = filme.Titulo;
        filmeId.Categoria = filme.Categoria;
        filmeId.Diretor = filme.Diretor;
        filmeId.Ano = filme.Ano;
        filmeId.Descricao = filme.Descricao;
        filmeId.Avaliacao = filme.Avaliacao;

        await _filme.UpdateAsync(filmeId);
        return true;
    }

    public async Task<bool> Deletar(int id)
    {
        var filmeId = await _filme.GetByIdAsync(id);
        if (filmeId == null)
            throw new Exception("Filme não encontrado ou não pode ser excluido!");

        await _filme.DeleteAsync(filmeId);

        return true;
    }

    public async Task<IEnumerable<Filme>> BuscarFilmes()
    {
        var filmes = await _filme.GetAllAsync();
        if (filmes == null)
            throw new Exception("Nenhum filme encontrado!");

        return filmes;
    }

    private void ValidarInformacoesUseario(Filme filme)
    {
        if (string.IsNullOrWhiteSpace(filme.Titulo))
            throw new Exception("Titulo do filme não pode ser vazio!");
        if (string.IsNullOrWhiteSpace(filme.Categoria))
            throw new Exception("Categoria do filme não pode ser vazio!");
        if (string.IsNullOrWhiteSpace(filme.Diretor))
            throw new Exception("Nome do Diretor não pode ser vazio!");
        if (string.IsNullOrWhiteSpace(filme.Descricao))
            throw new Exception("A descricao do filme não pode ser vazia!");
    }

}