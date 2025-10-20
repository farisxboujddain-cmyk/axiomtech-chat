src/pages/index.tsximport Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem", color: "white" }}>
        <h1>مرحباً بك في AXIOMTECH Chat 🚀</h1>
      </main>
    </div>
  );
}
