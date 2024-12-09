import './styles/Skills.scss'

function Skills() {
    const createItem = (nombre: string, link: string) => ({ nombre, link });
    const lenguages = [
        createItem('Typescript', 'src/assets/imgs/typescript.png'),
        createItem('Javascript', 'src/assets/imgs/javascript.png'),
        createItem('Python', 'src/assets/imgs/python.png'),
        createItem('Swift', 'src/assets/imgs/swift.png'),
        createItem('C#', 'src/assets/imgs/c++.png'),
        createItem('Rust', 'src/assets/imgs/rust.png'),
        createItem('Java', 'src/assets/imgs/java.png')
    ];
    
    const frameworks = [
        createItem('Angular', 'src/assets/imgs/angular.png'),
        createItem('React.js', 'src/assets/imgs/react.png'),
        createItem('Blazor', 'src/assets/imgs/blazor.png'),
        createItem('PyQt', 'src/assets/imgs/pyqt.png'),
        createItem('Vue.js', 'src/assets/imgs/vue.png'),
        createItem('Spring', 'src/assets/imgs/spring.png'),
        createItem('Laravel', 'src/assets/imgs/laravel.png'),
        createItem('.NET', 'src/assets/imgs/net.png')
    ];
    
    const databases = [
        createItem('SQLITE', 'src/assets/imgs/sqlite.png'),
        createItem('My SQL', 'src/assets/imgs/mysql.png'),
        createItem('PostgresSQL', 'src/assets/imgs/postgresql.png'),
        createItem('MongoDB', 'src/assets/imgs/mongodb.png'),
        createItem('Oracle', 'src/assets/imgs/oracle.png'),
        createItem('Firebase', 'src/assets/imgs/firebase.png')
    ];
    
    const testing = [
        createItem('Jest', 'src/assets/imgs/jest.png'),
        createItem('PyTest', 'src/assets/imgs/pytest.png'),
        createItem('Cypress', 'src/assets/imgs/cypress.png'),
        createItem('Postman', 'src/assets/imgs/postman.png'),
        createItem('Jmeter', 'src/assets/imgs/jmeter.png')
    ];
    
    const advance_tools = [
        createItem('OpenShift', 'src/assets/imgs/openshift.png'),
        createItem('Grafana', 'src/assets/imgs/grafana.png'),
        createItem('Kubernetes', 'src/assets/imgs/kubernetes.png'),
        createItem('Docker', 'src/assets/imgs/docker.png'),
        createItem('IBM Cloud', 'src/assets/imgs/ibmcloud.png'),
        createItem('Jenkins', 'src/assets/imgs/jenkins.png'),
        createItem('Github Actions', 'src/assets/imgs/github.png'),
        createItem('GitLab', 'src/assets/imgs/gitlab.png'),
        createItem('ClickUp', 'src/assets/imgs/clickup.png'),
        createItem('Azure', 'src/assets/imgs/azure.png'),
    ];

    const sections_data = [
        { section: 'Lenguages', items: lenguages },
        { section: 'Frameworks', items: frameworks },
        { section: 'Databases', items: databases },
        { section: 'Testing', items: testing },
        { section: 'Advanced tools', items: advance_tools },
    ];

    return (
        <section className='skills'>
            <h1 className='title'>SKILLS</h1>
            <div className='sections'>
            {sections_data.map(({ section, items }) => (
                <section key={section}>
                    <h4>{section}</h4>
                    <div className='cards'>
                        {items.map((item) => (
                            <div key={item.nombre} className='card'>
                                <img src={item.link}/>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
            </div>
        </section>
    )
}


export default Skills;