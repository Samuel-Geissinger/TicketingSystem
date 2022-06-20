using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TicketingSystem.Migrations
{
    public partial class AddedTicketsToUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "UsersId",
                table: "Tickets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "UsersId1",
                table: "Tickets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "UsersId2",
                table: "Tickets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_UsersId",
                table: "Tickets",
                column: "UsersId");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_UsersId1",
                table: "Tickets",
                column: "UsersId1");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_UsersId2",
                table: "Tickets",
                column: "UsersId2");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Users_UsersId",
                table: "Tickets",
                column: "UsersId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Users_UsersId1",
                table: "Tickets",
                column: "UsersId1",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Users_UsersId2",
                table: "Tickets",
                column: "UsersId2",
                principalTable: "Users",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Users_UsersId",
                table: "Tickets");

            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Users_UsersId1",
                table: "Tickets");

            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Users_UsersId2",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_UsersId",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_UsersId1",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_UsersId2",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "UsersId",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "UsersId1",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "UsersId2",
                table: "Tickets");
        }
    }
}
