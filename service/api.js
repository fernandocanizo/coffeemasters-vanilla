export const api = {
   path: "/data/menu.json",
   fetchMenu: async () => {
      const result = await fetch(api.path)
      return await result.json()
   }
}
