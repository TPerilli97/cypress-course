import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Why Cypress?',
    path: '/',
    DataTest: 'why-cypress'
    },
    {
    label: 'Overview',
    path: '/overview',
    DataTest: 'overview'
    },
    {
    label: 'Fundamentals',
    path: '/fundamentals',
    DataTest: 'fundamentals'
    },
    {
        label: 'Forms',
        path: '/forms',
        DataTest: 'forms'
    },
    {
        label: 'Examples',
        path: '/examples',
        DataTest: 'examples'
    },
    {
        label: 'Component',
        path: '/component',
        DataTest: 'component'
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        DataTest: 'best-practices'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem key={item.label} label={item.label} path={item.path} DataTest={item.DataTest}/>
                ))
            }
        </ul>
    )
}