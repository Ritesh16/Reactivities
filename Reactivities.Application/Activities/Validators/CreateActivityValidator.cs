using System;
using FluentValidation;
using Reactivities.Application.Activities.Commands;
using Reactivities.Application.Activities.Dtos;

namespace Reactivities.Application.Activities.Validators;

public class CreateActivityValidator
    : BaseActivityValidator<CreateActivity.Command, CreateActivityDto>
{
    public CreateActivityValidator() : base(x => x.ActivityDto)
    {

    }
}
