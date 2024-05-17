document.addEventListener('DOMContentLoaded', function () {
    const targetElement = document.querySelector('body')
    function callback(mutation, observer) {
        console.log(mutation)
    }

    const observer = new MutationObserver(callback)

    observer.observe(targetElement, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
        attributeFilter: ['id'],
        characterDataOldValue: true,
        // characterData: true
    })
})