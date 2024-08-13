using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using WS2Venta.Models;
using WS2Venta.Models.Request;

namespace WS2Venta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Respuesta oRespuesta = new Respuesta();
            using (C2ventaRealContext db = new C2ventaRealContext())
            {

                try
                {

                    Cliente bdCliente = db.Clientes.Find(id);

                    db.Remove(bdCliente);
                    db.SaveChanges();
                    oRespuesta.Exito = 1;
                    oRespuesta.Mensaje = "Exito HP";

                    return Ok();
                }
                catch (Exception ex)
                {
                    oRespuesta.Mensaje = ex.Message;

                }
                return Ok(oRespuesta);


            }
        }


        [HttpPut]
        public IActionResult Edit(ClienteRequest clienteRequest)
        {
            Respuesta oRespuesta = new Respuesta();
            using (C2ventaRealContext db = new C2ventaRealContext())
            {

                try
                {

                    Cliente bdCliente = db.Clientes.Find(clienteRequest.id);
                    bdCliente.Nombre = clienteRequest.Nombre;
                    db.Clientes.Entry(bdCliente).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
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
                    var lts = db.Clientes.OrderBy(d=>d.Id).ToList();
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
