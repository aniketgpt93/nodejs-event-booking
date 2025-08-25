

export const isAdmin = (req,res,next)=>{
    try {
        if(req.user.role !=='ORGANIZER') return res.status(403).json({message:"you have no authorities for this route"})
      next()  
    } catch (error) {
          return  res.status(403).json({message:error.message ||"Access denaied"})
    }
}