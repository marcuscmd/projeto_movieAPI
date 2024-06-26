using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace repositorio.Migrations
{
    /// <inheritdoc />
    public partial class attFilmes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Filme_Usuarios_UsuarioId",
                table: "Filme");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Filme",
                table: "Filme");

            migrationBuilder.RenameTable(
                name: "Filme",
                newName: "Filmes");

            migrationBuilder.RenameIndex(
                name: "IX_Filme_UsuarioId",
                table: "Filmes",
                newName: "IX_Filmes_UsuarioId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Filmes",
                table: "Filmes",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Filmes_Usuarios_UsuarioId",
                table: "Filmes",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Filmes_Usuarios_UsuarioId",
                table: "Filmes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Filmes",
                table: "Filmes");

            migrationBuilder.RenameTable(
                name: "Filmes",
                newName: "Filme");

            migrationBuilder.RenameIndex(
                name: "IX_Filmes_UsuarioId",
                table: "Filme",
                newName: "IX_Filme_UsuarioId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Filme",
                table: "Filme",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Filme_Usuarios_UsuarioId",
                table: "Filme",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
