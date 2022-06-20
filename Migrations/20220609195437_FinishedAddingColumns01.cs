using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TicketingSystem.Migrations
{
    public partial class FinishedAddingColumns01 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "KnowledgeArticlesTicket",
                columns: table => new
                {
                    KnowledgeArticlesId = table.Column<Guid>(type: "TEXT", nullable: false),
                    TicketsId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KnowledgeArticlesTicket", x => new { x.KnowledgeArticlesId, x.TicketsId });
                    table.ForeignKey(
                        name: "FK_KnowledgeArticlesTicket_KnowledgeArticles_KnowledgeArticlesId",
                        column: x => x.KnowledgeArticlesId,
                        principalTable: "KnowledgeArticles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_KnowledgeArticlesTicket_Tickets_TicketsId",
                        column: x => x.TicketsId,
                        principalTable: "Tickets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_KnowledgeArticlesTicket_TicketsId",
                table: "KnowledgeArticlesTicket",
                column: "TicketsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "KnowledgeArticlesTicket");
        }
    }
}
