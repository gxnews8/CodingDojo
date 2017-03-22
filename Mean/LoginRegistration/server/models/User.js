var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    birthday: {
        type: Date,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

usersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
usersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

usersSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});

mongoose.model('User', usersSchema);
