public class BaseRepositorio
{
    protected readonly Contexto _contexto;

    public BaseRepositorio(Contexto contexto)
    {
        _contexto = contexto;
    }
}