// import Conversation from '../model/Conversation.js';



// export const newConversation=async(request,response)=>{
//     try{
//         const senderId=request.body.senderId;
//         const receiverId=request.body.receiverId;

//         const exist= await Conversation.findOne({members:{$all:[receiverId,senderId]}});
//         if(exist){
//             return response.status(200).json('conversation already exist');
//         }
//         const newConversation=new Conversation({
//             memebers:[senderId,receiverId]
//         })

//         await newConversation.save();
//         return response.status(200).json('conversation saved lavdi successfully');
//     }catch (error){
//         return response.status(500).json(error.message);
//     }

// }

import Conversation  from "../model/Conversation.js";


export const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    
    if(exist) {
        response.status(200).json('conversation already exists');
        return;
    }
    const newConversation = new Conversation({
        members: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        response.status(200).json(savedConversation);
    } catch (error) {
        response.status(500).json(error);
    }

}

export const getConversation = async (request, response) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [ request.body.senderId, request.body.receiverId] }});
        response.status(200).json(conversation);
    } catch (error) {
        response.status(500).json(error);
    }

}
