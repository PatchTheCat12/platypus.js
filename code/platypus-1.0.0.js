/* 
platypus.js Javascript library v1.0.0 (semver.org) (Major.Minor.Patch)

-Copyright PatchTheCat12 (OpenJS Foundation and other contributors for Jquery.js and Morgan McGuire for include.js)
-Released under the MIT license
-patchthecat12.github.io/platypus.js/LICENCE

Date of publishing: 2024-01-24
*/

function loadScript(url) { // Appends a script src as the child of the head element
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
};

loadScript('https://code.jquery.com/jquery-3.7.1.slim.min.js'); // Load Jquery v3.7.1 slim version
loadScript('https://morgan3d.github.io/include.js/include.min.js'); // Load include.js

const platypus = { // For misc functions
  random: function(min, max) { // Generates a random number from a min and max (including them)
        return Math.floor(Math.random() * ((max + 1) - min) + min);
    },
};
