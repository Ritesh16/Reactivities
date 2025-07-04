using System;

namespace Reactivities.Application.Profiles.Dtos;

public class UserProfile
{
    public required string Id { get; set; }
    public required string DisplayName { get; set; }
    public string? Bio { get; set; }
    public string? ImageUrl { get; set; }
}
