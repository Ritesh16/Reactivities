using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Reactivities.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        private IMediator? _mediator;

        protected IMediator Mediator => 
                _mediator ??= HttpContext.RequestServices.GetService<IMediator>()
                ?? throw new Exception("IMediator service is unavailable.");
    }
}
