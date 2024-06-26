using Microsoft.EntityFrameworkCore;
using dominio;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace repositorio;

public class FilmeConfiguracoes : IEntityTypeConfiguration<Filme>
{
    public void Configure(EntityTypeBuilder<Filme> builder)
    {
        builder.ToTable("Filmes").HasKey(x => x.Id);

        builder.Property(x => x.Id).HasColumnName("Id");
        builder.Property(x => x.Titulo).HasColumnName("Titulo");
        builder.Property(x => x.Descricao).HasColumnName("Descricao");
        builder.Property(x => x.Ano).HasColumnName("Ano");
        builder.Property(x => x.Diretor).HasColumnName("Diretor");
        builder.Property(x => x.Categoria).HasColumnName("Categoria");
        builder.Property(x => x.Avaliacao).HasColumnName("Avaliacao");
        builder.Property(x => x.Url_Image).HasColumnName("Url_Image");
    }
}