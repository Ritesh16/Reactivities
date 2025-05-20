using AutoMapper;
using Reactivities.Application.Activities.Dtos;
using Reactivities.Domain;

namespace Reactivities.Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
        CreateMap<CreateActivityDto, Activity>();
    }
}
