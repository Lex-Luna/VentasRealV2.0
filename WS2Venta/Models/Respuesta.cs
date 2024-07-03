namespace WS2Venta.Models
{
    public class Respuesta
    {
        public Respuesta()
        {
            this.Exito = 0;
        }
        public int Exito { get; set; }
        public string Mensaje{ get; set; }
        public object Data{ get; set; }
    }
}
