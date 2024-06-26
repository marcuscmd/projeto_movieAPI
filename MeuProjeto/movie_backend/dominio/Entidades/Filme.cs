namespace dominio;

public class Filme
{
    public int Id { get; set; }
    public string Titulo { get; set; }
    public string Descricao { get; set; }
    public int Ano { get; set; }
    public string Diretor { get; set; }
    public string Categoria { get; set; }
    public double Avaliacao { get; set; }
    public string Url_Image { get; set; }

    public Filme()
    {
        Avaliacao = 0;
    }
}