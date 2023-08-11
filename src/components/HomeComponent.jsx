function HomeComponent() {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">React Learning</h1>
            <p className="col-md-8 fs-4">
              This system is using Vite + React.js as front-end framework, and
              Node.js.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              See how it works.
            </button>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2023 chichi
        </footer>
      </div>
    </main>
  );
}

export default HomeComponent;
