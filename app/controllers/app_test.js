'use strict';

describe("BooksController", function () {
    var ctrl, $httpBackend;
    beforeEach(module('app'));
    beforeEach(inject(function($controller, _$httpBackend_){
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('../api/catalog.json')
            .respond([{
                "isbn10":"iii",
                "title" : "ttt",
                "author" : "aaa",   
                "price" : 12.34
        }]);
        ctrl = $controller("BooksController");
    }));

    it("shout creat two initial rows",function(){
        expect(ctrl.rows.length).toEqual(2);
    });
    
    it("should load books catalog from server", function(){
        expect(ctrl.catalog).toBeUndefined();
        $httpBackend.flush();
            expect(ctrl.catalog).toEqual([{
            "isbn10":"iii",
            "title" : "ttt",
            "author" : "aaa",
            "price" : 12.34
        
    }]);
    });
    
    it("should compute amount without tax", function (){
       var row = {price : 10.50, quantity: 4};
        expect(ctrl.ht(row)).toEqual(42);
    });

    it("should compute amount with tax", function (){
        var row = {price : 10.50, quantity: 4};
        expect(ctrl.ttc(row)).toEqual(50.40);
    });

    it("should compute total without tax", function (){
        ctrl.rows =[
            {price : 10.50, quantity : 4},
            {price : 5, quantity : 2},
            {price : 15, quantity : 2},
        ];
        expect(ctrl.totalHt()).toEqual(82);
    });

    it("should tell if it's a big amount", function (){
        expect(ctrl.isBig({price : 10, quantity : 99})).toBeFalsy();
        expect(ctrl.isBig({price : 10, quantity : 101})).toBeTruthy();
    });


    it("should remove a row", function (){
        ctrl.rows =[
            {price : 10.50, quantity : 4},
            {price : 5, quantity : 2},
            {price : 15, quantity : 2},
        ];
        var row = ctrl.rows[1];
        expect(ctrl.totalHt()).toEqual(82);
        ctrl.remove(row);
        // expect(ctrl.rows.length).toEqual(2);
        // expect(ctrl.rows).not.toContain(row);
        expect(ctrl.rows).toEqual([
            {price : 10.50, quantity : 4},
            {price : 15, quantity : 2}
        ]);
    });


    it("should add a row", function (){
        ctrl.rows =[
            {price : 10.50, quantity : 4}
        ];
        ctrl.form1 = {title:"T", author:"A",  price : 9, quantity : 5};
        ctrl.add1();
        expect(ctrl.rows).toEqual([
            {price : 10.50, quantity : 4},
            {title:"T", author:"A",  price : 9, quantity : 5}
        ]);
        expect(ctrl.form1).toEqual({});
    });

    it("should add a row from catalog", function (){
        ctrl.rows =[
            {price : 10.50, quantity : 4}
        ];
        ctrl.form2 = {
            selected: {title: "T", author: "A", price: 9}, quantity: 5
        };
        ctrl.add2();
        expect(ctrl.rows).toEqual([
            {price : 10.50, quantity : 4},
            {title:"T", author:"A",  price : 9, quantity : 5}
        ]);
        expect(ctrl.form2).toEqual({});
    });



    // it("success", function(){
    //     expect(1).toEqual(1)
    // })
    //
    // it("failure", function(){
    //     expect(2).toEqual(1)
    // })
    
})