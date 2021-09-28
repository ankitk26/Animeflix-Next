export default function Gallery({ pictures }) {
  return (
    <section className="mb-12">
      <h1>Gallery</h1>
      <div className="grid justify-center max-w-full grid-cols-6 gap-10 mt-4">
        {pictures.map((picture, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center col-span-1"
          >
            <img
              src={picture}
              alt={`pic_${picture}_${index}`}
              className="object-contain w-full mx-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
