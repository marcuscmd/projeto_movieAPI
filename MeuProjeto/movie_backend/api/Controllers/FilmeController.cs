using dominio;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace api;

[Route("[controller]")]
[ApiController]
public class FilmeController : ControllerBase
{
    private readonly IFilmeAplicacao _filmeAplicacao;

    public FilmeController(IFilmeAplicacao filmeAplicacao)
    {
        _filmeAplicacao = filmeAplicacao;
    }

    [HttpGet]
    [Route("Buscar/{id}")]
    public async Task<ActionResult> Obter([FromRoute] int id)
    {
        try
        {
            var filmeId = await _filmeAplicacao.ObterFilme(id);
            var filme = new FilmeResposta()
            {
                Id = filmeId.Id,
                Titulo = filmeId.Titulo,
                Descricao = filmeId.Descricao,
                Ano = filmeId.Ano,
                Diretor = filmeId.Diretor,
                Url_Image = filmeId.Url_Image,
                Categoria = filmeId.Categoria,
                Avaliacao = filmeId.Avaliacao
            };
            return Ok(filme);
        }
        catch (Exception ex)
        {

            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    [Route("BuscarTodos")]
    public async Task<ActionResult> GetAll()
    {
        try
        {
            var list = await _filmeAplicacao.BuscarFilmes();
            List<FilmeResposta> listUsuario = list.Select(x => new FilmeResposta()
            {
                Id = x.Id,
                Titulo = x.Titulo,
                Ano = x.Ano,
                Diretor = x.Diretor,
                Categoria = x.Categoria,
                Avaliacao = x.Avaliacao,
                Url_Image = x.Url_Image
            }).ToList();

            return Ok(listUsuario);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost]
    [Route("Add")]
    public async Task<ActionResult> AddFilme([FromBody] CriarFilme filme)
    {
        try
        {
            var filmeDominio = new Filme()
            {
                Titulo = filme.Titulo,
                Descricao = filme.Descricao,
                Ano = filme.Ano,
                Diretor = filme.Diretor,
                Categoria = filme.Categoria,
                Url_Image = filme.Url_Image
            };
            var filmeId = await _filmeAplicacao.SalvarFilme(filmeDominio);

            return Ok(filmeId);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }


    [HttpPut]
    [Route("Update")]
    public async Task<ActionResult> UpdateFilme([FromBody] AtualizarFilme filme)
    {
        try
        {
            var filmeId = new Filme()
            {
                Id = filme.Id,
                Titulo = filme.Titulo,
                Descricao = filme.Descricao,
                Ano = filme.Ano,
                Categoria = filme.Categoria,
                Diretor = filme.Diretor,
                Url_Image = filme.Url_Image
            };
            await _filmeAplicacao.AtualizarFilme(filmeId);
            return Ok();

        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

    }

    [HttpDelete]
    [Route("Delete/{id}")]
    public async Task<ActionResult> DeletarFilme([FromRoute] int id)
    {
        try
        {
            await _filmeAplicacao.Deletar(id);
            return Ok(new {messa = "Filme excluído com sucesso.", success = true });
        }
        catch (System.Exception)
        {
            return BadRequest();
        }

    }

}