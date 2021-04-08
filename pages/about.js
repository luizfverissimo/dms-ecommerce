import { attributes, html } from '../content/about.md'

const About = () => (
  <div>
    <h1>{attributes.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
  </div>
)

export default About
