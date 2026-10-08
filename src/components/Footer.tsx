export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-dim sm:px-8">
        © {new Date().getFullYear()} Williams Williams
      </div>
    </footer>
  );
}
