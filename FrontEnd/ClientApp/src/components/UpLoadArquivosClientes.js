import React,{useState} from "react";

import TabelaListaUsuario from "./TabelaListaClientes";
import axios from "axios";
import { useFetch } from "../useFecth/useFecth";
//import { PieChart } from "./Graficos/PieChart/PieChart";


export const UpLoadArquivosClientes=()=>{

    const [campos, setCampos] = useState({ });
    
    const basicUrl ="http://localhost:25509/api/UploadArquivos"
    
    let [listaCliente,loading] = useFetch(basicUrl+"/Download");
    if(!listaCliente) return
    
 
   const onFileUpload = (event) => { 
      event.preventDefault();
      let formData = new FormData();
      formData.append("arquivo",campos.file) 
      if(!campos.file) return
      const EndPoindUploadaArquivo = basicUrl+"/upload"
      axios.post(EndPoindUploadaArquivo,formData); 
     
    }; 

    const handleInputFilesChange = (event) => {
      if(event.target.name === "file")
         campos[event.target.name] = event.target.files[0];
      else
         campos[event.target.name] = event.target.value;
        setCampos(campos);
      }

    
return(

<div className="card">

<div className="card-header text-center"></div>

<div className="card-body">

<form> 

<div className="container-fluid ">

<div class="jumbotron">

  <h2 class="display-6">Pesquisar Clientes</h2>
   <hr class="my-4" />

<div className="row">

  <div className="col-md-4">
      <label htmFor="nome_Usuario" >Cliente</label>
     <input type="text" className="form-control" name="nomeUsuario" value={campos.cliente || ""} placeholder="Escreva o nome do cliente"/>
  </div>

  <div className="col-md-4">
     <label htmFor="data">Data</label>
     <input type="date" className="form-control" name="data" value={campos.data || ""} />
  </div>

  <div className="col-md-4 mt-4 pb-5 pt-8">
      <button type="button" className="btn btn-success" onClick={event=>onFileUpload(event)}>Pesquisar</button>
  </div>
 
</div>

</div>

 <div className="row">
   <div className="container-fluid">
  <div className="col-md-12 col-xs-12 mb-3 mt-3">
     <label htmFor="file">Selecionar Arquivo</label>
     <input type="file" className="form-control" id="file" name="file" onChange={e=>handleInputFilesChange(e)}/>
  </div>
  </div>
</div>

<div className="row">
   <div className="container">
  <div className="col-md-12 col-xs-12 mb-2">
      <button type="button" className="btn btn-success btn-block" onClick={event=>onFileUpload(event)}>Salvar Arquivo</button>
  </div>
  </div>
</div>

<div className="row">
   <div className="col-md-12 col-xs-12">
       <TabelaListaUsuario listaClientes={listaCliente}/>
   </div>
</div>


</div>

</form> 


</div>


</div>


)

}