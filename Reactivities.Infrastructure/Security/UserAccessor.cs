using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Reactivities.Application.Interfaces;
using Reactivities.Domain;
using Reactivities.Persistence;

namespace Reactivities.Infrastructure.Security;

public class UserAccessor(IHttpContextAccessor httpContextAccessor, AppDbContext appDbContext) : IUserAccessor
{
    public async Task<User> GetUserAsync()
    {
        return await appDbContext.Users.FindAsync(GetUserId())
            ?? throw new Exception("No user found!");
    }

    public string GetUserId()
    {
        return httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? throw new Exception("No user found!");
    }
}
