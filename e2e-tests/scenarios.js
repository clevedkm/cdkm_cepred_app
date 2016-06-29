"use strict"

describe("Books purchase", function(){
    
    var rows, authors;
    beforeEach(function (){
        browser.get("index.html");
        rows = element.all(by.repeater("row in booksCtrl.rows"));
        authors = element.all(by.repeater("row in booksCtrl.rows").column("row.author"));
    });
    
    it("should have two initial rows", function(){
        expect(rows.count()).toEqual(2);
        expect(authors.first().getText()).toEqual("Alain Damasio");
    });

    it("should remove the first row", function(){
        rows.first().element(by.buttonText("Supprimer")).click();
        //rows.first().element(by.id("toto")).click();
        expect(rows.count()).toEqual(1);
        expect(authors.first().getText()).not.toEqual("Alain Damasio");
    });

    it("should add a new row from books catalog", function(){
        var select =element(by.model("booksCtrl.form2.selected"));
        var quantity =element(by.model("booksCtrl.form2.quantity"));
        //var option = select.all(by.tagName("option")).get(4);
        var option = select.element(by.cssContainingText("option","David Brin"));
        option.click();
        quantity.sendKeys("5").submit();
        expect(rows.count()).toEqual(3);
        expect(authors.last().getText()).toEqual("David Brin");
        expect(rows.last().element(by.model("row.quantity")).getAttribute("value")).toEqual("5");
    });


    
    
});