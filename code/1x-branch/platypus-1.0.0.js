/* 
platypus.js Javascript library v1.0.0

-Copyright Sophia Jones (OpenJS Foundation and other contributors for Jquery.js, Guillaume Potier & Marc-André Lafortune for Parsley, and Morgan McGuire for include.js)
-Released under the MIT license
-https://github.com/PatchTheCat12/platypus.js/blob/main/LICENSE

Date of publishing: 2024-01-24
*/

var loadScript = function(URL) { // Appends a script src as the child of the head element
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = URL;
    head.appendChild(script);
};

const platypus = { // Object for misc functions
    random: function(min, max) { // Generates a random number from a min and max (including them)
        return Math.floor(Math.random() * ((max + 1) - min) + min);
    },
};

loadScript('https://code.jquery.com/jquery-3.7.1.min.js'); // Load Jquery v3.7.1, compressed
loadScript('https://parsleyjs.org/dist/parsley.min.js') // Load Parsley v2.9.2, compressed
loadScript('https://morgan3d.github.io/include.js/include.min.js'); // Load include.js
