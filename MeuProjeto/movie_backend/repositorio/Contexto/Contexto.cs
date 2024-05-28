using Microsoft.EntityFrameworkCore;
using dominio;
using Microsoft.Extensions.Configuration;
using repositorio;

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
        if (_options == null)
        {
            optionsBuilder.UseSqlServer("Server=Marcus\\SQLEXPRESS;Database=movieDB;Trusted_Connection=True;TrustServerCertificate=True");
        }
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfiguration(new UsuarioConfiguracoes());
    }
}