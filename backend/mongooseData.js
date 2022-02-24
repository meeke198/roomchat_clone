import mongoose from "mongoose"

const roomchartSchema = mongoose.Schema({
    chanelName: String,
    conversation: [
        {
            message: String,
            timestamp: String,
            user: {
                userName: String,
                email: String,
                photoUrl: String,
            }
        }
    ]
})
export default mongoose.model('conversations', roomchartSchema)