const space = 'mnpcdkm1p9bz'
const accessToken = '0FsLKgi_SEKY-ZGufDAvtD4HPpNEDwguV64kFMqJu1I'

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
