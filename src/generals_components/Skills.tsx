import './styles/Skills.scss'

function Skills() {
    const createItem = (nombre: string, link: string) => ({ nombre, link });
    const lenguages = [
        createItem('Typescript', '/assets/imgs/typescript.png'),
        createItem('Javascript', '/assets/imgs/javascript.png'),
        createItem('Python', '/assets/imgs/python.png'),
        createItem('Swift', '/assets/imgs/swift.png'),
        createItem('C#', '/assets/imgs/c++.png'),
        createItem('Rust', '/assets/imgs/rust.png'),
        createItem('Java', '/assets/imgs/java.png')
    ];
    
    const frameworks = [
        createItem('Angular', '/assets/imgs/angular.png'),
        createItem('React.js', '/assets/imgs/react.png'),
        createItem('Blazor', '/assets/imgs/blazor.png'),
        createItem('PyQt', '/assets/imgs/pyqt.png'),
        createItem('Vue.js', '/assets/imgs/vue.png'),
        createItem('Spring', '/assets/imgs/spring.png'),
        createItem('Laravel', '/assets/imgs/laravel.png'),
        createItem('.NET', '/assets/imgs/net.png')
    ];
    
    const databases = [
        createItem('SQLITE', '/assets/imgs/sqlite.png'),
        createItem('My SQL', '/assets/imgs/mysql.png'),
        createItem('PostgresSQL', '/assets/imgs/postgresql.png'),
        createItem('MongoDB', '/assets/imgs/mongodb.png'),
        createItem('Oracle', '/assets/imgs/oracle.png'),
        createItem('Firebase', '/assets/imgs/firebase.png')
    ];
    
    const testing = [
        createItem('Jest', '/assets/imgs/jest.png'),
        createItem('PyTest', '/assets/imgs/pytest.png'),
        createItem('Cypress', '/assets/imgs/cypress.png'),
        createItem('Postman', '/assets/imgs/postman.png'),
        createItem('Jmeter', '/assets/imgs/jmeter.png')
    ];
    
    const advance_tools = [
        createItem('OpenShift', '/assets/imgs/openshift.png'),
        createItem('Grafana', '/assets/imgs/grafana.png'),
        createItem('Kubernetes', '/assets/imgs/kubernetes.png'),
        createItem('Docker', '/assets/imgs/docker.png'),
        createItem('IBM Cloud', '/assets/imgs/ibmcloud.png'),
        createItem('Jenkins', '/assets/imgs/jenkins.png'),
        createItem('Github Actions', '/assets/imgs/github.png'),
        createItem('GitLab', '/assets/imgs/gitlab.png'),
        createItem('ClickUp', '/assets/imgs/clickup.png'),
        createItem('Azure', '/assets/imgs/azure.png'),
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