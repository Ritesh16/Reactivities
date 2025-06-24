using System;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Reactivities.Application.Activities.Dtos;
using Reactivities.Domain;
using Reactivities.Persistence;

namespace Reactivities.Application.Activities.Queries;

public class GetActivityList
{
    public class Query : IRequest<List<ActivityDto>> {}

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Query, List<ActivityDto>>
    {
        public async Task<List<ActivityDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Activities
                .ProjectTo<ActivityDto>(mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);
        }
    }

}
