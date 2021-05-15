class HomePage{
    getAllModules(){
        return cy.get("app-sidebar-nav > app-sidebar-nav-items > app-sidebar-nav-link > a");
    }
  
}
export default HomePage;