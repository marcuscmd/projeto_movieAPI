namespace dominio;

public class Usuario
{
    public int Id { get; set; }
    public string Nome_Usuario { get; set; }
    public string Email { get; set; }
    public string Senha { get; set; }
    public string Nome { get; set; }
    public string Sobrenome { get; set; }
    public bool Ativo { get; set; }
    public DateTime CreatedAt { get; set; }


    public Usuario()
    {
        Ativo = true;
        CreatedAt = DateTime.Now;
    }

    public void Deletar()
    {
        Ativo = false;
    }

    public void Restaurar()
    {
        Ativo = true;
    }
}
