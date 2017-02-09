using System;
using System.ComponentModel.DataAnnotations;

namespace QuotingDojoDemo.Models
{
    public class Quote : BaseEntity
    {
        public Quote(){
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
        
        [Key]
        public int QuoteId { get; set; }

        [Required]
        public string QuoterName { get; set; }

        [Required]
        public string QuoteContent { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}