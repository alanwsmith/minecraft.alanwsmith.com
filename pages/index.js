import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TheMinecraftOfAlan</title>
        <meta
          name="description"
          content="The Minecraft notes of Alan W. Smith"
        />
      </Head>
      <main>
        <h1>Minecraft notes</h1>
        <h2>Enchanting Table</h2>
        <ul>
          <li>Enchanting table needs 15 book shelves around it</li>
          <li>Mine obsidian to get the recipe for the enchanting table</li>
          <li>
            If you break a bookshelf without silk touch, you have to rebuild it.
          </li>
        </ul>
      </main>
    </div>
  )
}
