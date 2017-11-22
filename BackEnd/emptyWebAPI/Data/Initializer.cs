using TeamGuenonWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TeamGuenonWebApi.Data
{
    static public class Initializer
    {
        static public void InitDb(TeamGuenonContext ctx)
        {
            if (ctx.Todos.Any())
            {
                return;
            }
            else
            {
                ctx.Add(new Todo
                {
                    Name = "first",
                });
                ctx.SaveChanges();
            }
        }
    }
}
