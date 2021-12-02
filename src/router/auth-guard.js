const isAuthenticatedGuard = async(to, from, next) => {

    return new Promise(() => {
        const randon = Math.random() * 100
        if (randon > 50) {
            console.log('sta autenticado')
            next()
        } else {
            console.log('bloqueado por el isAuthenticatedGuard', randon)
            next({ name: 'pokemon-home' })
        }
    })

}

export default isAuthenticatedGuard