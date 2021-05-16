class HomePage{
    getAllModules(){
        return cy.get("app-sidebar-nav > app-sidebar-nav-items > app-sidebar-nav-link > a");
    }
    getfundingPartner(){
        return cy.get('app-sidebar-nav-items > app-sidebar-nav-link:nth-child(20) > a')
    }
}
export default HomePage;