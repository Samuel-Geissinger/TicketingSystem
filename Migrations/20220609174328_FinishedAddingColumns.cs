using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TicketingSystem.Migrations
{
    public partial class FinishedAddingColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ProblemTicketId",
                table: "Tickets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "QueueId",
                table: "Tickets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "UsersId",
                table: "KnowledgeArticles",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "TicketId",
                table: "Comments",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "PermissionsQueue",
                columns: table => new
                {
                    PermissionsId = table.Column<int>(type: "INTEGER", nullable: false),
                    QueuesId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PermissionsQueue", x => new { x.PermissionsId, x.QueuesId });
                    table.ForeignKey(
                        name: "FK_PermissionsQueue_Permissions_PermissionsId",
                        column: x => x.PermissionsId,
                        principalTable: "Permissions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PermissionsQueue_Queues_QueuesId",
                        column: x => x.QueuesId,
                        principalTable: "Queues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_ProblemTicketId",
                table: "Tickets",
                column: "ProblemTicketId");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_QueueId",
                table: "Tickets",
                column: "QueueId");

            migrationBuilder.CreateIndex(
                name: "IX_KnowledgeArticles_UsersId",
                table: "KnowledgeArticles",
                column: "UsersId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_TicketId",
                table: "Comments",
                column: "TicketId");

            migrationBuilder.CreateIndex(
                name: "IX_PermissionsQueue_QueuesId",
                table: "PermissionsQueue",
                column: "QueuesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Tickets_TicketId",
                table: "Comments",
                column: "TicketId",
                principalTable: "Tickets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_KnowledgeArticles_Users_UsersId",
                table: "KnowledgeArticles",
                column: "UsersId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_ProblemTickets_ProblemTicketId",
                table: "Tickets",
                column: "ProblemTicketId",
                principalTable: "ProblemTickets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Queues_QueueId",
                table: "Tickets",
                column: "QueueId",
                principalTable: "Queues",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Tickets_TicketId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_KnowledgeArticles_Users_UsersId",
                table: "KnowledgeArticles");

            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_ProblemTickets_ProblemTicketId",
                table: "Tickets");

            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Queues_QueueId",
                table: "Tickets");

            migrationBuilder.DropTable(
                name: "PermissionsQueue");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_ProblemTicketId",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_QueueId",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_KnowledgeArticles_UsersId",
                table: "KnowledgeArticles");

            migrationBuilder.DropIndex(
                name: "IX_Comments_TicketId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "ProblemTicketId",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "QueueId",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "UsersId",
                table: "KnowledgeArticles");

            migrationBuilder.DropColumn(
                name: "TicketId",
                table: "Comments");
        }
    }
}
