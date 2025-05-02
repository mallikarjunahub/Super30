import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuth,success, children }) {
  console.log("protected route, isAuth =", isAuth);
  return isAuth ? children : <Navigate to='/login' replace />;
}

export default ProtectedRoute;