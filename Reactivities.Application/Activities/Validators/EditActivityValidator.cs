using System;
using FluentValidation;
using Reactivities.Application.Activities.Commands;
using Reactivities.Application.Activities.Dtos;

namespace Reactivities.Application.Activities.Validators;

public class EditActivityValidator : BaseActivityValidator<EditActivity.Command, EditActivityDto>
{
    public EditActivityValidator() : base(x => x.ActivityDto)
    {
        RuleFor(x => x.ActivityDto.Id)
            .NotEmpty().WithMessage("Id is required");
    }
}
