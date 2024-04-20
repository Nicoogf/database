import { Schema , model , models  } from "mongoose";


const UsuarioSchema = new Schema ({
    nombre : {
        type : String
    },
    email: {
        type : String
    }
})

export default models.User || model("User" , UsuarioSchema)