namespace loginreg.Models {
    public class User : BaseEntity {
        public string name {get; set;}
        public string password {get; set;}
        public string email {get; set;}
    }
}