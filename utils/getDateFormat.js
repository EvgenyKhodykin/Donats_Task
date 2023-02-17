import moment from "moment"

function getDateFormat(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}

const formatDate = getDateFormat(new Date())
export default formatDate
