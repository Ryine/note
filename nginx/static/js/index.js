window.onload = () => {
  console.log(111)
  const url = '/api/4/news/latest'
  axios.get(url).then(res => {
    console.log(res)
  })
}