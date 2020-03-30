export const url = 'https://tfts-backend.herokuapp.com/api'

// export const url = 'http://localhost:7000/api'


export const updateData = async (endPoint, body) => {
  try {
    await fetch(url.concat(endPoint), {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body
    })  
  } catch (e) {
    console.log(e)
  }
}