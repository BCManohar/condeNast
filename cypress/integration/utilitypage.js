class utilitypage {
    waitFor(elem) {
        cy.xpath(`${elem}`)
            .find(`${elem}`)
            .its('length')
            .then((res) => {
            if(res>0){
                return
            }else {
                cy.wait(2000)
            }
        })
    }
}
module.exports = {
    utilitypage
};