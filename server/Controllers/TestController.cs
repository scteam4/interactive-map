using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Firebase.Database;
using Firebase.Database.Query;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly IConfiguration _config;

        public TestController(IConfiguration config)
        {
            _config = config;
        }
        
        // GET: api/Test
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Test/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Test
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] string value)
        {
            var databaseUrl = _config["DatabaseURL"];
            var firebaseClient = new FirebaseClient(databaseUrl,
                new FirebaseOptions() { AuthTokenAsyncFactory = () => GetAccesToken(), AsAccessToken = true });
            var testObj = new TestModel()
                { Name = "A", Id = new Guid(), TimeStamp = new DateTime().ToLongDateString() };
            
            var test = await firebaseClient
                .Child("test")
                .PostAsync(JsonSerializer.Serialize(testObj));
            
            return Ok(testObj);
        }

        private async Task<string> GetAccesToken()
        {
            string serviceAccount = _config["ServiceAccountPath"];
            var scopes = new string[]
            {
                "https://www.googleapis.com/auth/userinfo.email",
                "https://www.googleapis.com/auth/firebase.database"
            };
            var credential = GoogleCredential.FromFile(serviceAccount).CreateScoped(scopes);
            ITokenAccess cred = credential;
            return await cred.GetAccessTokenForRequestAsync();
        }
    }
}
