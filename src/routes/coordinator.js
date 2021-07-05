export const goToLogin = (history) => {
  history.push("/aqua-frontend/entrar")
}

export const goToSignUp = (history) => {
  history.push("/aqua-frontend/cadastro")
}

export const goToMusicsPage = (history) => {
  history.push("/aqua-frontend")
}

export const goToCreateMusicPage = (history) => {
  history.push("/aqua-frontend/criar-musica")
}

export const goToMusicDetailsPage = (history, id) => {
  history.push(`/aqua-frontend/musicas/${id}`)
}

export const goToLastPage = (history) => {
  history.goBack()
}
