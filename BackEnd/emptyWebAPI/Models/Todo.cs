using System.ComponentModel.DataAnnotations;

namespace TeamGuenonWebApi.Models
{
    public class Todo
    {
        [Key]
        public int Id { get; set; }

        [Required, StringLength(50)]
        public string Name { get; set; }
    }
}
