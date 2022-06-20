using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TicketingSystem.Migrations
{
    public partial class AddedCommnetstoUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "UsersId",
                table: "Comments",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Comments_UsersId",
                table: "Comments",
                column: "UsersId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Users_UsersId",
                table: "Comments",
                column: "UsersId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Users_UsersId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_UsersId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "UsersId",
                table: "Comments");
        }
    }
}
