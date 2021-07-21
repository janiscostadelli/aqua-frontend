export const goToLogin = (history) => {
  history.push("/entrar")
}

export const goToSignUp = (history) => {
  history.push("/cadastro")
}

export const goToHomePage = (history) => {
  history.push("/")
}

export const goToCreateMusicPage = (history) => {
  history.push("/criar-musica")
}

export const goToLastPage = (history) => {
  history.goBack()
}
