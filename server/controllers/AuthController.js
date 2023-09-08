import getPrismaInstance from "../utils/PrismaClient.js"

 

export const checkUser = async(req,res,next)=>{
    try {
        const {email} = req.body
        console.log("email",email)
        if(!email){
            return res.json({
                message:"Email is Required",
                status:false
            })
        }
        const prisma = getPrismaInstance()
        console.log("prisma",prisma)
        const user = await prisma.user.findUnique({where:{email}})
        console.log(user)
        if(!user){
            return res.json({
                message:"User Not Found",
                status:false,
            })
        }else{
            return res.json({
                message:"User Found",
                status:true,
                data:user
            })
        }

    } catch (error) {
        console.log(error)
        next(err)
    }
}