function newDate () {
  let date = new Date()
  let dd0 = date.getDate()
  let yesterday = new Date(date)
  yesterday.setDate(date.getDate() - 1)
  let dd = yesterday.getDate()
  let mm = null
  if (dd0 > 1) {
    mm = date.getMonth() + 1
  } else {
    mm = date.getMonth()
  }
  let yy = date.getFullYear()

  if (dd < 10) { dd = '0' + dd }
  if (dd0 < 10) { dd0 = '0' + dd0 }
  if (mm < 10) { mm = '0' + mm }

  let today = yy + '-' + mm + '-' + dd0
  let lastday = yy + '-' + mm + '-' + dd
  let Dates = {
    today: today,
    yesterday: lastday
  }
  return Dates
}

export {newDate}
