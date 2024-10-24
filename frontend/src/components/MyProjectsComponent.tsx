interface ProjectComponentProps {
    ownProject : [],
    collabProject : []
}

const MyProjectComponent: React.FC<ProjectComponentProps> = ({ ownProject: OwnProject, collabProject : CollabProject}) => {
    console.log(OwnProject, CollabProject)


    return (
        <h1>
            My project Component
        </h1>
    )
}

export default MyProjectComponent