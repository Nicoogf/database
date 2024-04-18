// import { Schema , model , models } from "mongoose";

// const TaskSchema = new Schema({
//     title: {
//         type : String,
//         unique : [ true , "El titulo ya existe"]
//     },
//     descrition : {
//         type : String
//     }
// },{
//     timestamps : true
// })

// export default models.Task || model("Task" ,  TaskSchema)


// import { Schema , model , models  } from "mongoose";

// const TaskSchema = new Schema({
//     title : {
//         type : String,
//         unique : [ true , "El titulo ya existe en la base de datos"]
//     },
//     description : {
//         type : String 
//     }
// },{
//     timestamps : true
// })

// export default models.Task || model("Task" , TaskSchema)


// import { Schema , model , models  } from "mongoose";

// const TaskSchema = new Schema({
//     title : {
//         type: String ,
//         unique : true ,
//         required : true
//     },
//     description : {
//         type : String
//     }
// },{
//     timestamps : true
// })

// export default models.Task || model("Task" , TaskSchema)


import { Schema , model, models } from "mongoose";

const TaskSchema = new Schema({
    title : {
        type: String,
        unique : true
    },
    description: {
        type: String
    }
},{
    timestamps: true
})

export default models.Task || model("Task" ,TaskSchema )