describe('Verify that the topics are highlighted when a minimum of collaborators interested in learn/guide. is reached', function() {
    it('Should check that rows with ready-to-open css class applied have more than 10, 1, students, tecachers respectively', function(){
        browser.get('https://integrador2018frontend.herokuapp.com/')
        var counters = element(by.css('.ready-to-open')).all(by.css('.right-align'))
        var learning = counters.get(0).getText()
        var guiding = counters.get(1).getText()
        expect(learning).not.toBeLessThan("10");
        expect(guiding).not.toBeLessThan("1");
    })
});