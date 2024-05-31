using dominio;
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
}