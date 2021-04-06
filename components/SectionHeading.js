function SectionHeading({children, id}) {
  return (
    <h2 id={id} className="my-14 font-catamaran font-semibold text-4xl sm:text-5xl text-theme-black">
      {children}
    </h2>
  )
}

export default SectionHeading
