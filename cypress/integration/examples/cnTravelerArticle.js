/// <reference types="Cypress" />
import traveller from '../../fixtures/traveller.json'
describe("CN traveler e2e Article test", () => {
    it("Launch CN travel website", () => {
        cy.visit(traveller.url);
        cy.get('.active > .item > :nth-child(1) > .attachment-custom-1920').click()
    });   

    it("Header - Attribute validation", () => {
        cy.get('.post-header .container .post-header-inner').should('have.class',traveller.attribute.header)
    });  

    it("Image - Attribute validation", () => {
        cy.get('.story .midcontent > article .img-block').should('have.class',traveller.attribute.image)
    }); 
    
    it("Tag - Attribute validation", () => {
        cy.get('.breadcrumb-blk .breadcrumbs > li:nth-child(3) >a').should('have.attr',traveller.attribute.tag)
    }); 

    it("Description - Attribute validation", () => {
        cy.get('.single-story-block > div.post-header > div > div > h2').should('have.class',traveller.attribute.description)
    });

    it("Contributor - Attribute validation", () => {
        cy.get('.single-story-block > div.post-header .post-author>span').should('have.class',traveller.attribute.Contributor)
    });

    it("Date - Attribute validation", () => {
        cy.get('.post-header-inner .post-date').should('have.class',traveller.attribute.date)
    });
})