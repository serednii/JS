

//Аналог toUpperCase()
if (!Array.prototype.myUpperCase) {
    String.prototype.myUpperCase = function () {
        const deltaSymbol = 32;
        if (this >= 'a' && this <= 'z') {
            return String.fromCharCode(this.charCodeAt(0) - deltaSymbol)
        } else return this
    }
}


