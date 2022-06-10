using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Win32;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_CallCenter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadArquivosController : ControllerBase
    {

        public static IWebHostEnvironment _environment;
        
        const string content_Type = "application/json";
        
        public UploadArquivosController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
       

       

        [HttpPost("upload")]
        public async Task<string> EnviaArquivo([FromForm] IFormFile arquivo)
        {
            if (arquivo.Length > 0)
            {
                try
                {
                    
                    string camimhoArquivo = _environment.ContentRootPath + "\\arquivos\\";
                    
                    if (!Directory.Exists(camimhoArquivo))
                    {
                        Directory.CreateDirectory(camimhoArquivo);
                    }
                    using (FileStream filestream = System.IO.File.Create(camimhoArquivo + arquivo.FileName))
                    {
                        await arquivo.CopyToAsync(filestream);
                        filestream.Flush();
                        

                        PastaCaminhoArquivo.GuardarDadosRegistryCaminhoArquivo(camimhoArquivo);

                       
                       return camimhoArquivo + arquivo.FileName;
                    }

                }
                catch (Exception ex)
                {
                    return ex.ToString();
                }
            }
            else
            {
                return "Ocorreu uma falha no envio do arquivo...";
            }

        }



        //GET: api/<UploadArquivosController>
        [HttpGet("Download")]
        public ActionResult<dynamic>Get()
        {
            string caminhoArquivo1;
            string json;
            dynamic array;
            caminhoArquivo1 = PastaCaminhoArquivo.LerDadosGuardadosRegistryCaminhoArquivo(PastaCaminhoArquivo.CaminhoPastaArquivo);
            //caminhoArquivo1 = @"C:\dados.json";

            if (caminhoArquivo1 == null)
            {
                return "Caminho do arquivo não existe...";
            }

            StreamReader r = new StreamReader(caminhoArquivo1);
            json = r.ReadToEnd();
            array = JsonConvert.DeserializeObject(json);
            var data = JsonConvert.SerializeObject(array);
            return data;
        }


    }

    


}
