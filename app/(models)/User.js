import mongoose, {Schema} from "mongoose";

if (mongoose.connection.readyState == 0) {
    mongoose.connect(process.env.MONGODB_URI)
}

const userSchema = new Schema(
    {
        name: String,
        email: String,
        role: String,
        active: Boolean
    },
    {
        timestamps: true
    }
)

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;