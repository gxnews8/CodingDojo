using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace Survey.Controllers
{
    public class SurveyController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();  // Empty View parameters call whichever view has the same name as the method serving the view.
        }

        [HttpPost]
        [Route("results")]
        public IActionResult results(string name, string location, string language, string comments)
        {
            ViewBag.name = name;
            ViewBag.language = language;
            ViewBag.location = location;
            ViewBag.comments = comments;
            return View();  // Empty View parameters call whichever view has the same name as the method serving the view.
        }
    }
}