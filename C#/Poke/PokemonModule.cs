using Nancy;
using System;
using System.Collections.Generic;
using ApiCaller;
using Newtonsoft.Json.Linq;

namespace ConsoleApplication
{
    public class PokemonModule : NancyModule
    {
        public PokemonModule()
        {
            Get("/", args => {
                return View["home"]; 
            });
            Get("/{id}", async args => {
                ViewBag.passedId = args.id;
                string requestURL = "http://pokeapi.co/api/v2/pokemon/" + args.id;
                await WebRequest.SendRequest(requestURL, new Action<Dictionary<string,object>> (JsonResponse => {
                    string Name = (string)JsonResponse["name"];
                    long Height = (long)JsonResponse["height"];
                    var test = (JArray)JsonResponse["types"];
                    Console.WriteLine((string)((JArray)JsonResponse["abilities"])[1]["ability"]["name"]);
                    Console.WriteLine((string)test[0]["type"]["name"]);
                }));
                return View["InfoPage"];
            });
        }
    }
}