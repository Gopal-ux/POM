
import customerHomePage from "../../PageObjects/pageActions/customerHomePageAction"
import addCustomerPage from "../../PageObjects/pageActions/addCustomerPageAction"



const cust = new customerHomePage();
const add = new addCustomerPage();




describe("open Account", ()=>{

})


    describe("OpenAccoubnt",()=>{

        it("Opening a customerAccount", ()=>{

            cust.navigateToUrl();
            cust.clickOnManagerLogin();
            add.clickOpenAccount();
            add.selectUser();
            add.selectCurrency();
            add.proceed();
            // cy.on('window:alert',(t)=>{
            //     //assertions
            //     expect(t).to.contains('Customer added');
            //  })

            add.clickCustomer();
            cy.get('tbody > :nth-child(2) > :nth-child(3)').should("have.text", "E725JB")
            add.search("Harry");
            add.deleteCustomer("Harry");
            add.deleteValidation();
           

        })

     
        // it("Validate Customer Added", ()=>{

        
      

        // })



    })



