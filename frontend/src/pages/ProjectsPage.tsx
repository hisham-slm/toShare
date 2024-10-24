import LoggedInNav from "../components/LoggedInNavComponent"
import MyProjectComponent from "../components/MyProjectsComponent"

interface ProjectPageProps {
    data : {
        isAuthenticated: boolean,
        message: string,
        collabProject: [],
        ownProject: [],
    }
}

const ProjectPage: React.FC<ProjectPageProps> = ({ data }) => {
    console.log('data from project page component',data)

    return (
        <div >
            <LoggedInNav />
            <MyProjectComponent ownProject={data.ownProject} collabProject={data.collabProject} />
        </div>
    )
}

export default ProjectPage