using dominio;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace api;

[Route("[controller]")]
[ApiController]
public class UsuarioController : ControllerBase
{
    private readonly IUsuarioAplicacao _userAplicacao;

    public UsuarioController(IUsuarioAplicacao userAplicacao)
    {
        _userAplicacao = userAplicacao;
    }

    [HttpGet]
    [Route("Buscar/{id}")]
    public async Task<ActionResult> Obter([FromRoute] int id)
    {
        try
        {
            var userId = await _userAplicacao.ObterUsuario(id);
            var usuario = new UsuarioResposta()
            {
                Nome = userId.Nome,
                Sobrenome = userId.Sobrenome,
                Nome_Usuario = userId.Nome_Usuario,
                Email = userId.Email,
            };
            return Ok(usuario);
        }
        catch (Exception ex)
        {

            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    [Route("BuscarTodos")]
    public async Task<ActionResult> GetAll([FromQuery] bool ativo)
    {
        try
        {
            var list = await _userAplicacao.GetAll(ativo);
            List<UsuarioResposta> listUsuario = list.Select(x => new UsuarioResposta()
            {
                Nome = x.Nome,
                Sobrenome = x.Sobrenome,
                Nome_Usuario = x.Nome_Usuario,
                Email = x.Email
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
    public async Task<ActionResult> AddUsuario([FromBody] CriarUsuario usuario)
    {
        try
        {
            var usuarioDominio = new Usuario()
            {
                Nome_Usuario = usuario.Nome_Usuario,
                Nome = usuario.Nome,
                Sobrenome = usuario.Sobrenome,
                Email = usuario.Email,
                Senha = usuario.Senha,
            };
            var userId = await _userAplicacao.SalvarUsuario(usuarioDominio);

            return Ok(userId);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }


    [HttpPut]
    [Route("Update")]
    public async Task<ActionResult> UpdateUsuario([FromBody] AtualizarUsuario usuario)
    {
        try
        {
            var usuarioId = new Usuario()
            {
                Id = usuario.Id,
                Nome_Usuario = usuario.Nome_Usuario,
                Nome = usuario.Nome,
                Sobrenome = usuario.Sobrenome,
                Email = usuario.Email,
            };
            await _userAplicacao.Atualizar(usuarioId);
            return Ok();

        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

    }

    [HttpPut]
    [Route("UpdateSenha")]
    public async Task<ActionResult> UpdateSenha([FromBody] AtualizarSenhaUsuario usuario)
    {
        try
        {
            var usuarioSenha = new Usuario()
            {
                Id = usuario.Id,
                Senha = usuario.Senha,
            };
            await _userAplicacao.AtualizarSenha(usuarioSenha, usuario.SenhaAntiga);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete]
    [Route("Desativar/{id}")]
    public async Task<ActionResult> Desativar([FromRoute] int id)
    {
        try
        {
            await _userAplicacao.Deletar(id);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }


    [HttpPut]
    [Route("Ativar/{id}")]
    public async Task<ActionResult> Ativar([FromRoute] int id)
    {
        try
        {
            await _userAplicacao.Restaurar(id);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }


}