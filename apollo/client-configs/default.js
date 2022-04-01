import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default (ctx) => {
  const httpLink = new HttpLink({ uri: ctx.isDev ? 'http://localhost:3000/api' : 'https://votel-dz.com/api' })

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    // This function is called before every request. Update ctx.req.session and window.__NUXT__.state.session
    // To point to wherever you store your token
    const token = null

    operation.setContext({
      headers: { authorization: `Bearer ${token}` }
    })
    return forward(operation)
  })
  const link = middlewareLink.concat(httpLink)
  return {
    link,
    cache: new InMemoryCache()
  }
}
