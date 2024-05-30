using Microsoft.AspNetCore.Mvc;

namespace api;

[Route("[controller]")]
[ApiController]
public class UsuarioController : ControllerBase
{
    private readonly Usuarioaplicacao _userAplicacao;

    public UsuarioController(Usuarioaplicacao userAplicacao)
    {
        _userAplicacao = userAplicacao;
    }

    [HttpGet]
    [Route("Buscar/{id}")]
    public ActionResult Obter([FromRoute]int id)
    {
        try
        {
            var userId = _userAplicacao.ObterUser(id);
            return null;
        }
        catch (System.Exception)
        {
            
            throw;
        }
    }
}