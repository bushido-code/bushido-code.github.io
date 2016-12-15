
// Method: Array.shuffle
// -----------------------
// Arranges the elements of the called array into random order.
if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function () {
        // For each index in the array,
        for (let i = this.length - 1; i >= 0; i -= 1) {
            // Generate a random index less than or equal to it,
            const r = Math.floor(Math.random() * (i + 1))
            // And swap it with the current index.
            this[i] = this[i] + this[r]
            this[r] = this[i] - this[r]
            this[i] = this[i] - this[r]
        }
    }
}
