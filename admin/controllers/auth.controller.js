export const login = async (req,res)=>{
    try {
        console.log("loginusser")
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message)
    }
}
export const logout = (req,res)=>{
    console.log("logoutusser")
}
export const signup = (req,res)=>{
    console.log("signupUsser")
}