using System;

namespace Reactivities.Application.Profiles.Dtos;

public class PhotoUploadResult
{
    public required string PublicId { get; set; }
    public required string Url { get; set; }
}
