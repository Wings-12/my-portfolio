import CharacterContainer from "./components/CharacterContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Top Section */}
      <div id="top" className="section">
        {/* Content for the "Top" section */}
        <CharacterContainer />
      </div>

      {/* About Site Section */}
      <div id="about-website" className="section">
        {/* Content for the "About this Site" section */}
        <h2>
          <strong>about this website</strong>
        </h2>
      </div>

      {/* About Me Section */}
      <div id="about-me" className="section">
        {/* Content for the "About Me" section */}
        <h2>
          <strong>about me</strong>
        </h2>
      </div>

      {/* Contact Section */}
      <div id="contact" className="section">
        {/* Content for the "Contact" section */}
        <h2>
          <strong>contact</strong>
        </h2>
      </div>

      {/* Blog Section */}
      <div id="blog" className="section">
        {/* Content for the "Blog" section */}
        <h2>
          <strong>blog</strong>
        </h2>
      </div>
    </main>
  );
}
