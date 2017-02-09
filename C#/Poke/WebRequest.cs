
using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json;
namespace ApiCaller
{
    public class WebRequest
    {
        public static async Task SendRequest(string address, Action<Dictionary<string, object>> Callback)
        {
            // Create a temporary HttpClient connection.
            using (var Client = new HttpClient())
            {
                try
                {
                    Client.BaseAddress = new Uri(address);
                    HttpResponseMessage Response = await Client.GetAsync(""); // Make the actual API call.
                    Response.EnsureSuccessStatusCode(); // Throw error if not successful.
                    string StringResponse = await Response.Content.ReadAsStringAsync(); // Read in the response as a string.
                    // Then parse the result into JSON and convert to a dictionary that we can use.
                    Dictionary<string, object> JsonResponse =
          JsonConvert.DeserializeObject<Dictionary<string, object>>(StringResponse);
                    // Finally, execute our callback, passing it the response we got.
                    Callback(JsonResponse);
                }
                catch (HttpRequestException e)
                {
                    // If something went wrong, display the error.
                    Console.WriteLine($"Request exception: {e.Message}");
                }
            }
        }
    }
}