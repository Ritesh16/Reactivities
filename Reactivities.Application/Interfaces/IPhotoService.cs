using System;
using Microsoft.AspNetCore.Http;
using Reactivities.Application.Profiles.Dtos;

namespace Reactivities.Application.Interfaces;

public interface IPhotoService
{
    Task<PhotoUploadResult?> UploadPhoto(IFormFile file);
    Task<string> DeletePhoto(string publicId);
}
