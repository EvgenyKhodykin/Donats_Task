export default class DonationItem {
    #date
    #value

    constructor(date,value) {
        this.#date = date
        this.#value = value
    }

    render() {
        const donationDiv = document.createElement('div')
        donationDiv.className = 'donate-item'
        donationDiv.innerHTML = `${this.#date} - <b>${this.#value}$</b>`
        return donationDiv
    }
}
