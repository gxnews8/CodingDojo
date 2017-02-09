using System.Collections.Generic;
using loginreg.Models;

namespace loginreg.Factories {
    public interface IFactory<T> where T : BaseEntity {
         List<T> FindAll();
    }
}