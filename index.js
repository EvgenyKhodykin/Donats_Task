import './index.css'
import DonationItem from './utils/DonationItem'
import formatDate from './utils/getDateFormat'

const donationInput = document.querySelector('.donate-form__donate-input')
const donationButton = document.querySelector('.donate-form__submit-button')
const donatesContainer = document.querySelector('.donates-container__donates')
const totalAmount = document.querySelector('#total-amount')

donationButton.addEventListener('click', donationSubmit)

function donationSubmit(event) {
    event.preventDefault()
    const newDonation = new DonationItem(formatDate,donationInput.value)
    donatesContainer.append(newDonation.render())
    const totalAmountArray = totalAmount.textContent.split('$').slice(0,1).map(item => Number(item) + Number(donationInput.value))
    totalAmount.textContent = `${totalAmountArray[0]}$`
    donationInput.value = ''
}