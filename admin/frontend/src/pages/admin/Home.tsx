export default function Home() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to WedukaApply</h1>
        <p>Please <a href="/auth/login" className="text-green-600">login</a> to access the admin panel.</p>
      </div>
    );
  }