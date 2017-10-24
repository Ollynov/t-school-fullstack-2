$(function () {
  console.log('hello')
  $('button').on('click', (event) => {
    // event.preventDefault()
    let phrase = $('input').val()
    $('input').val('')
    let options = {
      method: 'POST',
      url: '/api/reverse',
      data: {
        phrase: phrase
      }
    }
    axios(options).then(response => {
      console.log(response)
      let reversedPhrase = response.data
      $('.results').text(reversedPhrase)
    }).catch(err => {
      console.log(err)
    })
  })
})
