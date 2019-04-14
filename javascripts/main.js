(function () {

    document.getElementById('copyright').firstChild.data += `
        ${new Date().getFullYear()} Martin Kondor
    `;

    new Bounce().translate({
        from: { x: -500, y: -50 },
        to: { x: 0, y: 0 },
        duration: 3500,
        stiffness: 10
    })
    .applyTo(document.querySelectorAll('.translate-from-left-animation'));

    new Bounce().translate({
        from: { x: 500, y: 50 },
        to: { x: 0, y: 0 },
        duration: 3500,
        stiffness: 10
    })
    .applyTo(document.querySelectorAll('.translate-from-right-animation'));

})();
