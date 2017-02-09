using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using loginreg.Models;
using loginreg.Factories;
using loginreg.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace loginreg.Controllers
{
    public class UserController : Controller
    {
        private readonly UserFactory userfactory;

        public UserController(UserFactory UserFactory) {
            userfactory = UserFactory;
        }
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            if(HttpContext.Session.GetInt32("userid") == null) {
                return RedirectToAction("Login");
            }
            List<User> users = userfactory.FindAll();
            ViewBag.users = users;
            return View();
        }

        [HttpGet]
        [Route("register")]
        public IActionResult Register() {
            return View("Register");
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Route("register")]
        public IActionResult Register(RegisterViewModel regModel) {
            if(ModelState.IsValid) {
                User newUser = userfactory.Add(regModel);
                HttpContext.Session.SetInt32("userid", newUser.id);
                return RedirectToAction("Index");
            }
            return View("Register");
        }
        [HttpGet]
        [Route("login")]
        public IActionResult Login() {
            return View("Login");
        }
        // [HttPost]
        // [Route("login")]
        // public IActionResult Login() {
        //     return View("Login");
        // }
    }
}
