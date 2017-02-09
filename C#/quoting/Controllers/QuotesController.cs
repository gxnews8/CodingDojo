using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using QuotingDojoDemo.Factories;
using QuotingDojoDemo.Models;
using System.Linq;

namespace QuotingDojoDemo.Controllers
{
    public class QuotesController : Controller
    {
        // private readonly QuoteFactory _quoteFactory;
        private QuoteContext _context;
        public QuotesController(QuoteContext context)
        {
            // _quoteFactory = new QuoteFactory();
            _context = context;
        }

        [HttpGet]
        [Route("")]
        public IActionResult Landing()
        {
            ViewBag.Errors = new List<string>();
            return View();
        }
        
        [HttpGet]
        [Route("quotes")]
        public IActionResult Index()
        {
            // IEnumerable<Quote> AllQuotes = _quoteFactory.FindAll();
            // ViewBag.Quotes = AllQuotes;
            // return View();
            List<Quote> allQuotes = _context.Quotes.OrderByDescending(quote => quote.CreatedAt).ToList();
            return View(allQuotes);
        }

        [HttpPost]
        [Route("quotes")]
        public IActionResult Process(Quote model)
        {
            if(ModelState.IsValid)
            {
                // _quoteFactory.Add(model);
                _context.Quotes.Add(model);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.Errors = ModelState.Values;
            return View("Landing");
        }

    }
}