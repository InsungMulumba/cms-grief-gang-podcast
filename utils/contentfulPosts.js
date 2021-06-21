const space = mnpcdkm1p9bz
const accessToken = CFPAT-B8meoU843zchkv6RAKjctvCHBfVrCvGHZcS3VhXcZlA

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
