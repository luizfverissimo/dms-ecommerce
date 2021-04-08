import fs from 'fs'
import path from 'path'

function ProductPage({product}) {
  if (!product) return <div>not found</div>

  const { html, attributes } = product

  console.log(product)

  return (
    <>
    <div>{attributes.title}</div>
    <div dangerouslySetInnerHTML={{__html: html}}></div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/products'))
    .map((product) => {
      const trimmedName = product.substring(0, product.length - 3)
      console.log(trimmedName)
      return {
        params: { slug: trimmedName },
      }
    })

  return {
    paths,
    fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  console.log(slug)

  const product = await import(`../../content/products/${slug}.md`).catch(
    () => null
  )

  return {
    props: {
      product: product.default
    },
  }
}

export default ProductPage
