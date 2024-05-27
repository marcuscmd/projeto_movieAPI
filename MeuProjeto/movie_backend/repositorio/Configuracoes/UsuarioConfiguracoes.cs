using Microsoft.EntityFrameworkCore;
using dominio;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace repositorio;

public class UsuarioConfiguracoes : IEntityTypeConfiguration<Usuario>
{
    public void Configure(EntityTypeBuilder<Usuario> builder)
    {
        builder.ToTable("Usuarios").HasKey(x => x.Id);

        builder.Property(x => x.Id).HasColumnName("Id");
        builder.Property(x => x.Nome_Usuario).HasColumnName("NomeUsuario");
        builder.Property(x => x.Email).HasColumnName("Email");
        builder.Property(x => x.Senha).HasColumnName("Senha");
        builder.Property(x => x.Nome).HasColumnName("Nome");
        builder.Property(x => x.Sobrenome).HasColumnName("Sobrenome");
        builder.Property(x => x.CreatedAt).HasColumnName("CreatedAt");
        builder.Property(x => x.GoogleID).HasColumnName("GoogleId");
    }
}