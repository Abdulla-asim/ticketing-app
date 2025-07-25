import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise // maybe not needed in latest version of Mongoose

// Describing the ticket Schema
const ticketSchema = new Schema (
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean
    },
    {
        timestamps: true, // gives "created_at and updated_at" which will be helpful
    }
)

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;

