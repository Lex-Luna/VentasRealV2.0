using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WS2Venta.Models;
using WS2Venta.Models.Request;

namespace WS2Venta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {

        [HttpPost]
        public IActionResult Add(ClienteRequest clienteRequest)
        {
            Respuesta oRespuesta = new Respuesta();
            using(C2ventaRealContext db =  new C2ventaRealContext())
            {

                try
                {
                    Cliente bdCliente = new Cliente();
                    bdCliente.Nombre = clienteRequest.Nombre;
                    db.Clientes.Add(bdCliente);
                    db.SaveChanges();
                    oRespuesta.Exito = 1;
                    
                    return Ok();
                }
                catch (Exception ex)
                {
                    oRespuesta.Mensaje = ex.Message;
                    
                }
                return Ok(oRespuesta);


            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            using (C2ventaRealContext db = new C2ventaRealContext())
            {
                Respuesta oRespuesta = new Respuesta();

                try
                {
                    var lts = db.Clientes.ToList();
                    oRespuesta.Exito = 1;
                    oRespuesta.Data = lts;
                    //return Ok(lts);
                }
                catch (Exception ex)
                {
                    oRespuesta.Mensaje = ex.Message;

                }
                return Ok(oRespuesta);


            }
        }
    }
}
