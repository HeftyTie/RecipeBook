import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div className="flex flex-col gap-5 text-center align-center">
      <h1 className="text-5xl">404 - Resource not found</h1>
      <div>
        <Link to="/" className="text-2xl button">Home Page</Link>
      </div>
    </div>
  );
}

export default NoPage;
