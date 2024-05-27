using Microsoft.EntityFrameworkCore;
using dominio;

public class Contexto : DbContext
{
    private readonly DbContextOptions _options;

    public Contexto()
    {    
    }

    public Contexto(DbContextOptions options) : base(options)
    {
        _options = options;
    }

    public DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        
    }
}