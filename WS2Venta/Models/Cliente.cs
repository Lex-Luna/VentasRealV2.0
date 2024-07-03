﻿using System;
using System.Collections.Generic;

namespace WS2Venta.Models;

public partial class Cliente
{
    public long Id { get; set; }

    public string? Nombre { get; set; }

    public virtual ICollection<Ventum> Venta { get; set; } = new List<Ventum>();
}
