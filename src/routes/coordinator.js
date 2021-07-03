export const goToLogin = (history) => {
  history.push("/entrar")
}

export const goToSignUp = (history) => {
  history.push("/cadastro")
}

export const goToMusicsPage = (history) => {
  history.push("/")
}

export const goToCreateMusicPage = (history) => {
  history.push("/criar-musica")
}

export const goToMusicDetailsPage = (history, id) => {
  history.push(`/musicas/${id}`)
}

export const goToLastPage = (history) => {
  history.goBack()
}
