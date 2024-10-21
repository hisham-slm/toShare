// import MyProjectComponent from "../components/MyProjectsComponent"
// import LoggedInNav from "../components/LoggedInNavComponent"
// import PageMissing from "./404Page"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

import MyProjectComponent from "../components/MyProjectsComponent"


function ProjectPage() {
    // const navigate = useNavigate()
    // const [isLogin, setIsLogin] = useState(false)

    // function authenticateUser(status:boolean) {
    //     if (!status) {
    //         // navigate('/login')
    //         <PageMissing />

    //     }
    //     else {
    //         setIsLogin(true)
    //         return (
    //             <>
    //                 <LoggedInNav />
    //                 <MyProjectComponent />
    //             </>
    //         )
    //     }

    // }

    return (
        <div >
            {/* {authenticateUser(isLogin)} */}
            <MyProjectComponent />
        </div>
    )
}

export default ProjectPage