import {Schema, model} from 'mongoose'

const taskSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
        
    descripcion: {
        type: String,
        trim: true
    },

    done: {
        type: Boolean,
        default: false
    } 
});

export default model('Task',taskSchema)