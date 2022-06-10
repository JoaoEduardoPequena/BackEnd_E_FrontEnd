using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_CallCenter
{
    public static class PastaCaminhoArquivo
    {

        public static string  NomeChave { get; set; }
        public static string ValorChave { get; set; }

        public static string CaminhoPastaArquivo { get; private set; }

        public  static string GuardarDadosRegistryCaminhoArquivo(string caminhoArquivoJSON)
        {
            CaminhoPastaArquivo = caminhoArquivoJSON;
            RegistryKey rk = Registry.CurrentUser.CreateSubKey(caminhoArquivoJSON);
            rk.SetValue("GravaRegistroArquivoJSON",caminhoArquivoJSON);
            rk.Close();
            return CaminhoPastaArquivo;
        }

        public static string LerDadosGuardadosRegistryCaminhoArquivo(string caminhoArquivoJSON)
        {
            RegistryKey rk = Registry.LocalMachine.OpenSubKey(caminhoArquivoJSON);
            Object valorChave = rk.GetValue("GravaRegistroArquivoJSON");
            ValorChave = valorChave as string;
            rk.Close();
            return ValorChave;
        }


    }


}
    

