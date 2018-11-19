/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Validate URL defined but not empty */
        it('Validate URL defined but not empty', function () {
            for (const all in allFeeds) {
                if (allFeeds.hasOwnProperty(all)) {
                    const element = allFeeds[all].url;                    
                    expect(element).toBeTruthy();
                }
            }
        });


        /* Validate name defined but not empty */
        it('Validate name defined but not empty', function () {
            for (const all in allFeeds) {
                if (allFeeds.hasOwnProperty(all)) {
                    const element = allFeeds[all].name;
                    expect(element).toBeTruthy();
                }
            }
        });
    });

    /* testing the menu components */
    describe('The menu', function() {
        /* Validate if the menu item is hidden */
        it('Validate if the menu item is hidden', function () {
           expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Validate click menu states visible or hidden */
         it('Validate click menu states visible or hidden', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Page load tests */
    describe('Entradas iniciais', function () {
            
        /* Validate element loaded in container */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            })
        });

        it('Validate element existent in function loadFeed', function () {
            var element = document.querySelector(".feed").getElementsByClassName("entry");
            expect(element.length).not.toBe(0);
        });
    });
        
    /* Suite of tests that will ensure the change of content */
    describe('Nova seleção de feed', function () {
        /* Ensures content change */
        beforeEach(function (done) {
            loadFeed(0, function () {
                firstFeed = $('.feed').html();
                loadFeed(1, function () {
                    done();
                });
            });
        })

        it('validates the upload of content', function (done) {
            lastFeed = $('.feed').html();
            expect(firstFeed).not.toEqual(lastFeed);
            done();
        });
    });
}());