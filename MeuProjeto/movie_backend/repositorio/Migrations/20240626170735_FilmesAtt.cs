using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace repositorio.Migrations
{
    /// <inheritdoc />
    public partial class FilmesAtt : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Filmes_Usuarios_UsuarioId",
                table: "Filmes");

            migrationBuilder.DropIndex(
                name: "IX_Filmes_UsuarioId",
                table: "Filmes");

            migrationBuilder.DropColumn(
                name: "UsuarioId",
                table: "Filmes");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UsuarioId",
                table: "Filmes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Filmes_UsuarioId",
                table: "Filmes",
                column: "UsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Filmes_Usuarios_UsuarioId",
                table: "Filmes",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
