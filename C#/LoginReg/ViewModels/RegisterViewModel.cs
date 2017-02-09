using System.ComponentModel.DataAnnotations;

namespace loginreg.ViewModels {
    public class RegisterViewModel {
        [Required]
        [Display(Name = "Name")]
        [MinLength(3)]
        public string name {get; set;}
        [Required]
        [Display(Name = "Password")]
        [MinLength(8)]
        public string password {get; set;}
        [Required]
        [Display(Name = "Email Address")]
        [EmailAddress]
        public string email {get; set;}
    }
}