
import customerHomePage from "../../PageObjects/pageActions/customerHomePageAction"
import addCustomerPage from "../../PageObjects/pageActions/addCustomerPageAction"



const cust = new customerHomePage();
const add = new addCustomerPage();




describe("open Account", ()=>{

})


    describe("Web Table",()=>{

        it("Handle Web tables", ()=>{

            cust.navigateToUrl();
            cust.clickOnManagerLogin();
            add.clickOpenAccount();
            add.selectUser();
            add.selectCurrency();
            add.proceed();
            add.clickCustomer();


            
            // cy.get('.table').contains( "Ron");
            // cy.get(':nth-child(3) > :nth-child(4)').should('be.visible')
            // cy.get(':nth-child(4) > :nth-child(4) > :nth-child(1)').contains("1010")

            // Verify first name of column conatins "E55656"
            //table >tbody>tr td:nth-child(3)
            // Below get command will point out to 3rd column

            //cy.get("table >tbody>tr td:nth-child(3)").each(($ele, index , $list)=>{
             cy.get("table").each(($ele, index , $list)=>{
              const text = $ele.text();

              if(text == "E55656"){
                
             cy.get('table >tbody>tr td:nth-child(1)').eq(index).then((name)=>{
          
                const customerName = name.text();
                expect(customerName).to.equal("Albus")

             })

              }




            })
            
 
        })

     
    })



