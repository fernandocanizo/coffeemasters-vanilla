import { api } "./api"

export const loadMenu = async () => {
   const data = await api.fetchMenu()
   app.store.menu = data
}
